import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const RECIPIENT = "charlesomondi2003@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const honeypot = String(body?.website ?? "").trim(); // honeypot field

    // Spam: honeypot must be empty
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length > 200) return badRequest("Please enter your name.");
    if (!emailRe.test(email) || email.length > 320) return badRequest("Please enter a valid email.");
    if (!message || message.length > 5000) return badRequest("Please enter a message (max 5000 chars).");
    if (subject.length > 300) return badRequest("Subject too long.");

    // Rate limit by IP: max 3 / 10 min
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const ua = req.headers.get("user-agent") ?? "";
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

    const since = new Date(Date.now() - 10 * 60_000).toISOString();
    const { count } = await supabase
      .from("contact_messages")
      .select("id", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", since);

    if ((count ?? 0) >= 3) {
      return new Response(JSON.stringify({ error: "Too many messages. Please try again later." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Persist
    const { error: insertErr } = await supabase.from("contact_messages").insert({
      name, email, subject: subject || null, message, ip_address: ip, user_agent: ua,
    });
    if (insertErr) console.error("DB insert error:", insertErr);

    // Build email
    const safeSubject = subject || "New portfolio contact";
    const html = `
      <div style="font-family:Arial,sans-serif;background:#ffffff;padding:24px;color:#0f172a">
        <h2 style="margin:0 0 16px">New message from your portfolio</h2>
        <table style="border-collapse:collapse;width:100%;max-width:560px">
          <tr><td style="padding:6px 0;color:#64748b">From</td><td style="padding:6px 0"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Subject</td><td style="padding:6px 0">${escapeHtml(safeSubject)}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
        <div style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
        <p style="color:#94a3b8;font-size:12px">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>`;

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `[Portfolio] ${safeSubject}`,
        html,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Resend error:", resp.status, errText);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-email error:", e);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function badRequest(msg: string) {
  return new Response(JSON.stringify({ error: msg }), {
    status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
