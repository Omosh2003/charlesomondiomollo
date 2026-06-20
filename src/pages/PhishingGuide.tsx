import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Eye, AlertTriangle, CheckCircle2, Mail, Lock } from "lucide-react";

const URL = "https://charlesomondiomollo.lovable.app/blog/phishing-guide";
const PUBLISHED = "2026-06-20";
const TITLE = "How to Spot a Phishing Email: A 2026 Cybersecurity Guide";
const DESCRIPTION =
  "A practical guide from cybersecurity engineer Charles Omollo Omondi on identifying phishing emails — red flags, real-world examples, and step-by-step actions to take.";

const redFlags = [
  { icon: Mail, title: "Suspicious sender address", body: "The display name says \"PayPal Support\" but the actual address is paypa1-help@secure-mail.ru. Always hover the From field and inspect the domain — attackers rely on you only reading the friendly name." },
  { icon: AlertTriangle, title: "Urgency and fear", body: "\"Your account will be suspended in 24 hours.\" Phishing weaponises panic so you act before thinking. Legitimate companies rarely demand immediate action over email." },
  { icon: Eye, title: "Mismatched or shortened links", body: "Hover every link before clicking. If the visible text says microsoft.com but the URL points to ms-login-verify.co, it's hostile. Be especially careful with bit.ly, tinyurl, or QR codes in emails." },
  { icon: Lock, title: "Requests for credentials or MFA codes", body: "No bank, employer, or platform will ever ask you to type your password or share an MFA code over email. That request alone is enough to classify the message as phishing." },
  { icon: ShieldAlert, title: "Unexpected attachments", body: "Invoices you didn't request, ZIPs, .html files, or Office documents asking you to \"enable macros\" are the most common malware delivery vehicles in 2026." },
  { icon: CheckCircle2, title: "Generic greetings & subtle grammar errors", body: "AI-generated phishing is now polished, but you'll still spot weird capitalisation, missing personalisation (\"Dear Customer\"), or phrasing that doesn't match the brand's usual tone." },
];

const examples = [
  {
    title: "The fake Microsoft 365 password reset",
    body: "An email styled like a Microsoft notification claims your password expires today. The link leads to a pixel-perfect login page on a lookalike domain. Once you sign in, attackers harvest your credentials and your MFA token in real time.",
  },
  {
    title: "The CEO gift-card scam (Business Email Compromise)",
    body: "A short message appearing to come from your CEO: \"Are you at your desk? I need a quick favour.\" The follow-up asks you to buy gift cards for a client. The sender domain is one character off from your real corporate domain.",
  },
  {
    title: "The M-Pesa / mobile-money reversal trick",
    body: "Common in Kenya: an SMS or email claims a transaction was sent to you by mistake and asks you to \"reverse\" it via a link or USSD prompt. The link installs a credential stealer or tricks you into authorising the transfer yourself.",
  },
];

const steps = [
  "Do not click any link, download any attachment, or reply.",
  "Hover over links and inspect the real destination URL.",
  "Verify with the sender through a separate, trusted channel — call them, message them on Slack, walk to their desk.",
  "Report the email using your mail client's \"Report phishing\" button so security teams and filters learn from it.",
  "If you already clicked or entered credentials: change that password immediately, revoke active sessions, rotate MFA, and notify your IT or security team.",
  "Run an updated endpoint scan and check sign-in logs for unfamiliar locations or devices.",
];

const PhishingGuide = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: {
      "@type": "Person",
      name: "Charles Omollo Omondi",
      url: "https://charlesomondiomollo.lovable.app/",
    },
    publisher: {
      "@type": "Person",
      name: "Charles Omollo Omondi",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9a06f510-82b3-4fe8-8b7c-f2f9ddfa8a1d",
    about: ["Phishing", "Cybersecurity", "Email Security", "Social Engineering"],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://charlesomondiomollo.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://charlesomondiomollo.lovable.app/blog" },
      { "@type": "ListItem", position: 3, name: "How to Spot a Phishing Email", item: URL },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="keywords" content="how to spot a phishing email, phishing red flags, phishing examples, email security, cybersecurity guide, social engineering, business email compromise" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      {/* Aurora background */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse [animation-duration:9s]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-amber-400/15 rounded-full blur-3xl animate-pulse [animation-duration:12s]" />
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs uppercase tracking-widest text-slate-400">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
              Cybersecurity
            </span>
            <time dateTime={PUBLISHED}>June 20, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300">
            {TITLE}
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Phishing is still the #1 way breaches start in 2026 — not zero-days, not exotic malware, just a convincing
            email. This guide walks through the red flags I teach during security training, real examples I've
            triaged, and exactly what to do the moment you spot a suspicious message.
          </p>
        </header>

        <section aria-labelledby="red-flags" className="mb-16">
          <h2 id="red-flags" className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            The 6 red flags of a phishing email
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {redFlags.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-cyan-400/40 transition-colors"
              >
                <Icon className="w-6 h-6 text-cyan-300 mb-3" aria-hidden />
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="examples" className="mb-16">
          <h2 id="examples" className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            Real-world examples
          </h2>
          <div className="space-y-5">
            {examples.map((ex) => (
              <article key={ex.title} className="rounded-2xl border-l-4 border-fuchsia-400/60 bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-2">{ex.title}</h3>
                <p className="text-slate-300 leading-relaxed">{ex.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="actions" className="mb-16">
          <h2 id="actions" className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            What to do if you suspect a phishing email
          </h2>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex-none w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <p className="text-slate-200 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="ai-phishing" className="mb-16">
          <h2 id="ai-phishing" className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            What's new in 2026: AI-generated phishing
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Large language models have erased the old "bad grammar" tell. Attackers now scrape LinkedIn, mimic your
            colleagues' writing style, and personalise every message at scale. Voice cloning is being used for
            follow-up calls confirming the email. The defence isn't spotting typos anymore — it's <strong>verifying
            requests out-of-band</strong> and treating any urgency-laced ask as suspect until proven otherwise.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This shift is exactly why my AI security research focuses on detecting machine-generated social
            engineering — you can read more about that work back on the{" "}
            <Link to="/" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              main portfolio
            </Link>
            .
          </p>
        </section>

        <aside className="rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-400/10 border border-white/10 p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Need a phishing simulation or security awareness training?
          </h2>
          <p className="text-slate-300 mb-5">
            I help teams in Nairobi and beyond run realistic phishing drills and harden their email defences.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold hover:opacity-90 transition"
          >
            Get in touch
          </Link>
        </aside>
      </main>
    </div>
  );
};

export default PhishingGuide;
