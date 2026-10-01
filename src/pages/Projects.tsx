import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, Mail } from "lucide-react";
import portraitShirt from "@/assets/profile/portrait-shirt.asset.json";
import usiuVarsity from "@/assets/profile/usiu-varsity.asset.json";
import techWeekRolls from "@/assets/profile/tech-week-rolls.asset.json";

const URL = "https://charlesomondiomollo.lovable.app/projects";
const TITLE = "Projects — Charles Omollo Omondi";
const DESCRIPTION =
  "Cybersecurity, AI security and web projects by Charles Omollo Omondi, including SalamaNet AI and a USIU vulnerability assessment.";

type ProjectLink = { label: string; href: string; internal?: boolean; icon: typeof ExternalLink };

const projects: {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  accent: string;
  img: string;
  imgAlt: string;
  links: ProjectLink[];
}[] = [
  {
    title: "SalamaNet AI",
    tag: "Featured · AI Security",
    description:
      "AI-powered cybersecurity platform for threat detection and anomaly monitoring, focused on phishing prevention and securing digital infrastructure for educational institutions and the public sector.",
    stack: ["Python", "AI/ML", "Threat Detection", "Phishing Prevention", "Anomaly Monitoring"],
    accent: "from-cyan-400 to-emerald-400",
    img: techWeekRolls.url,
    imgAlt: "Charles Omondi showcasing SalamaNet AI at Technology & Innovation Week.",
    links: [
      { label: "Related: Phishing guide", href: "/blog/phishing-guide", internal: true, icon: FileText },
      { label: "Request a demo", href: "/#contact", internal: true, icon: Mail },
    ],
  },
  {
    title: "USIU Counselling Portal — Vulnerability Assessment",
    tag: "Security Engagement",
    description:
      "Automated and manual security testing of the USIU counselling portal. Identified vulnerabilities across the web surface and delivered prioritized remediation recommendations.",
    stack: ["Nmap", "Burp Suite", "Wireshark", "Manual Testing", "Reporting"],
    accent: "from-fuchsia-400 to-cyan-400",
    img: usiuVarsity.url,
    imgAlt: "Charles Omondi on the USIU campus during the vulnerability assessment engagement.",
    links: [{ label: "Discuss this engagement", href: "/#contact", internal: true, icon: Mail }],
  },
  {
    title: "Personal Portfolio Website",
    tag: "Web",
    description:
      "Responsive portfolio designed and deployed to showcase projects, skills, and professional profile.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    accent: "from-emerald-400 to-sky-400",
    img: portraitShirt.url,
    imgAlt: "Studio portrait of Charles Omondi representing the portfolio website project.",
    links: [{ label: "Visit live site", href: "https://charlesomondi.netlify.app", icon: ExternalLink }],
  },
];

const linkCls =
  "inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 hover:bg-cyan-400/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

const Projects = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={URL} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
    </div>

    <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
      </nav>

      <header className="mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-300 mb-3">/ projects</div>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300">
          Projects & security work
        </h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl">
          A closer look at the platforms I've built and the systems I've tested.
        </p>
      </header>

      <div className="space-y-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className="grid md:grid-cols-5 overflow-hidden rounded-3xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl"
          >
            <div className="md:col-span-2 aspect-[16/10] md:aspect-auto bg-slate-950">
              <img src={p.img} alt={p.imgAlt} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <div className="md:col-span-3 p-7">
              <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${p.accent} text-slate-950 font-bold`}>
                {p.tag}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {p.links.map(({ label, href, internal, icon: Icon }) =>
                  internal ? (
                    <Link key={label} to={href} className={linkCls}>
                      <Icon className="h-4 w-4" aria-hidden /> {label}
                    </Link>
                  ) : (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      <Icon className="h-4 w-4" aria-hidden /> {label}
                    </a>
                  )
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  </div>
);

export default Projects;
