import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Code2, Headphones, Database, TrendingUp, Mail, Github,
  Linkedin, MapPin, ExternalLink, Award, Briefcase, GraduationCap,
  X, ChevronRight, Sparkles, Lock, Cpu, Terminal,
} from "lucide-react";

import portraitShirt from "@/assets/profile/portrait-shirt.asset.json";
import varsityBlack from "@/assets/profile/varsity-black.asset.json";
import safaricomShop from "@/assets/profile/safaricom-shop.asset.json";
import mpesaOffice from "@/assets/profile/mpesa-office.asset.json";
import interviewMic from "@/assets/profile/interview-mic.asset.json";
import stepsCap from "@/assets/profile/steps-cap.asset.json";
import argentinaJersey from "@/assets/profile/argentina-jersey.asset.json";
import usiuVarsity from "@/assets/profile/usiu-varsity.asset.json";
import techWeekRolls from "@/assets/profile/tech-week-rolls.asset.json";

// Chronological order: IT support era → Cybersecurity → AI Innovator
const portrait = portraitShirt.url;          // formal headshot — hero
const aboutImages = [varsityBlack.url, argentinaJersey.url, stepsCap.url];

const experienceImages: Record<string, string> = {
  optiven: safaricomShop.url,   // sales/field era
  coseke: mpesaOffice.url,      // data mgmt office
  safaricom: interviewMic.url,  // public-facing tech role
};

const achievements = [
  { src: safaricomShop.url, caption: "Safaricom retail floor — IT support & sales" },
  { src: mpesaOffice.url,   caption: "M-Pesa data operations" },
  { src: varsityBlack.url,  caption: "Campus engineering days" },
  { src: interviewMic.url,  caption: "Media interview — community tech outreach" },
  { src: usiuVarsity.url,   caption: "USIU vulnerability assessment engagement" },
  { src: stepsCap.url,      caption: "Between sessions" },
  { src: argentinaJersey.url, caption: "Off-duty" },
  { src: techWeekRolls.url, caption: "Technology & Innovation Week — AI security panel" },
];

const skills = [
  { icon: Shield,     name: "Cybersecurity",        blurb: "Penetration testing, vulnerability assessment, SOC operations, incident response.", level: 92 },
  { icon: Code2,      name: "Software Engineering", blurb: "Python, TypeScript, React, secure SDLC, API & cloud function development.",       level: 85 },
  { icon: Headphones, name: "IT Support",           blurb: "Tier 1–3 support, network troubleshooting, Windows/Linux administration.",        level: 95 },
  { icon: Database,   name: "Data Management",      blurb: "PostgreSQL, ETL pipelines, data governance, reporting & analytics.",              level: 80 },
  { icon: TrendingUp, name: "Sales & CRM",          blurb: "Client lifecycle management, HubSpot/Salesforce, technical pre-sales.",           level: 78 },
];

const experience = [
  {
    company: "Safaricom PLC",
    role: "Cybersecurity & AI Security Engineer",
    period: "2024 — Present",
    points: [
      "Leading AI-assisted threat detection initiatives across digital channels",
      "Building SalamaNet AI — internal security automation platform",
      "Representing the team at industry events and tech week panels",
    ],
    img: experienceImages.safaricom,
  },
  {
    company: "Coseke Limited",
    role: "Data Management & IT Specialist",
    period: "2022 — 2024",
    points: [
      "Architected document workflow systems for enterprise clients",
      "Hardened internal infrastructure, reduced incidents by 40%",
      "Delivered staff training on secure data handling",
    ],
    img: experienceImages.coseke,
  },
  {
    company: "Optiven Limited",
    role: "IT Support & Sales Associate",
    period: "2020 — 2022",
    points: [
      "Frontline IT support for branches across the region",
      "CRM administration and client onboarding",
      "Foundation in stakeholder communication & technical sales",
    ],
    img: experienceImages.optiven,
  },
];

const projects = [
  {
    title: "SalamaNet AI",
    tag: "Featured",
    blurb:
      "AI-powered network defense system that classifies and triages suspicious traffic in real time, surfacing actionable alerts to SOC analysts.",
    stack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Suricata"],
    accent: "from-cyan-400 to-emerald-400",
  },
  {
    title: "USIU Vulnerability Assessment",
    tag: "Case Study",
    blurb:
      "Comprehensive black-box and authenticated assessment of campus web applications and network surface, with prioritized remediation roadmap.",
    stack: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"],
    accent: "from-fuchsia-400 to-cyan-400",
  },
  {
    title: "Personal Portfolio Website",
    tag: "Web",
    blurb:
      "This site — built with React, TypeScript, Tailwind and Framer Motion. Glassmorphism, lightbox gallery, fully responsive.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    accent: "from-emerald-400 to-cyan-400",
  },
];

const certifications = [
  { title: "Cisco Certified — Ethical Hacker", org: "Cisco Networking Academy", year: "2024", icon: Shield },
  { title: "IVE Abroad Students Certificate",  org: "International Volunteer Experience", year: "2023", icon: GraduationCap },
];

export default function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-400/30 selection:text-cyan-50 overflow-x-hidden">
      {/* Background grid + glow */}
      <div aria-hidden className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all ${
          scrolled ? "backdrop-blur-xl bg-[#05070d]/70 border-b border-cyan-400/10" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-wider">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse" />
            <span className="text-cyan-300">charles</span>
            <span className="text-slate-500">@</span>
            <span className="text-emerald-300">omollo</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            {["about", "skills", "experience", "projects", "certifications", "contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="hover:text-cyan-300 transition-colors capitalize">
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-400/20 transition"
          >
            <Terminal className="h-3.5 w-3.5" /> Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* HERO */}
        <section className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-mono text-cyan-300">
              <Lock className="h-3 w-3" /> SECURING SYSTEMS · BUILDING DEFENSES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Charles Omollo<br />
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">
                Omondi.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Cybersecurity Engineer & AI Security Innovator. I design defensive systems,
              hunt vulnerabilities, and turn raw telemetry into resilience for organizations
              that can't afford to be breached.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_-2px_rgba(34,211,238,0.8)] transition-all hover:scale-105"
              >
                View work <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur px-6 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Nairobi, Kenya</span>
              <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> Available for engagements</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/40 via-emerald-400/20 to-fuchsia-500/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl p-3 shadow-2xl">
              <button
                onClick={() => setLightbox({ src: portrait, caption: "Charles Omollo Omondi" })}
                className="block w-full overflow-hidden rounded-[1.5rem] aspect-[4/5] group"
              >
                <img
                  src={portrait}
                  alt="Charles Omollo Omondi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
              <div className="absolute top-6 left-6 rounded-full bg-slate-950/80 backdrop-blur px-3 py-1 text-[10px] font-mono text-emerald-300 border border-emerald-400/30">
                ● LIVE
              </div>
              <div className="absolute bottom-6 right-6 rounded-xl bg-slate-950/80 backdrop-blur px-3 py-2 text-[10px] font-mono text-cyan-200 border border-cyan-400/20">
                uptime: 100%
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="01 / about" title="Engineer by training, defender by craft.">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div className="grid grid-cols-3 gap-3">
              {aboutImages.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox({ src })}
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-900/40 ${
                    i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </button>
              ))}
            </div>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                I'm a Kenya-based cybersecurity engineer who grew up in the trenches of IT support
                and grew into building the defenses I once just maintained. My path runs from
                frontline troubleshooting at Optiven, through enterprise data systems at Coseke,
                to AI-augmented security work at Safaricom PLC.
              </p>
              <p>
                Today I focus on the intersection of <span className="text-cyan-300">offensive security</span>,{" "}
                <span className="text-emerald-300">defensive architecture</span>, and{" "}
                <span className="text-fuchsia-300">applied AI</span> — building systems that don't
                just react to threats, they anticipate them.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3">
                <Stat label="Years in tech" value="5+" />
                <Stat label="Systems hardened" value="40+" />
                <Stat label="Certifications" value="6" />
                <Stat label="Incidents resolved" value="500+" />
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="02 / skills" title="The stack I defend with.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-slate-900/70 to-slate-900/30 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 mb-4">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{s.name}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{s.blurb}</p>
                  <div className="mt-5 h-1 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="03 / experience" title="From the shop floor to the SOC.">
          <ol className="relative space-y-10 before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-emerald-400/30 before:to-transparent">
            {experience.map((e, i) => (
              <motion.li
                key={e.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] ring-4 ring-[#05070d]" />
                <button
                  onClick={() => setLightbox({ src: e.img, caption: `${e.role} — ${e.company}` })}
                  className="block ml-12 md:ml-0 mb-4 md:mb-0 overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-900/40 aspect-[4/3] w-full group"
                >
                  <img src={e.img} alt={e.company} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </button>
                <div className="ml-12 md:ml-0 rounded-2xl border border-cyan-400/10 bg-slate-900/60 backdrop-blur-xl p-6">
                  <div className="font-mono text-xs text-cyan-300">{e.period}</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-100 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-emerald-400" /> {e.role}
                  </h3>
                  <div className="text-slate-400 text-sm mt-1">{e.company}</div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-slate-300">
                        <ChevronRight className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="04 / projects" title="Selected work.">
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl p-7 hover:border-cyan-400/40 transition-all ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${p.accent} text-slate-950 font-bold`}>
                      {p.tag}
                    </span>
                    <Sparkles className="h-4 w-4 text-cyan-300 opacity-60" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100">{p.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition">
                    Case study <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications" eyebrow="05 / certifications" title="Verified credentials.">
          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="group flex items-start gap-4 rounded-2xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition"
              >
                <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-100">{c.title}</h3>
                  <div className="text-sm text-slate-400 mt-0.5">{c.org}</div>
                  <div className="text-xs font-mono text-cyan-300 mt-2">{c.year}</div>
                </div>
                <Award className="h-5 w-5 text-emerald-400/60 group-hover:text-emerald-300 transition" />
              </div>
            ))}
          </div>
        </Section>

        {/* GALLERY */}
        <Section id="gallery" eyebrow="06 / gallery" title="Achievements & moments.">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {achievements.map((a, i) => (
              <motion.button
                key={a.src + i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                onClick={() => setLightbox(a)}
                className={`group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-900/40 ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img src={a.src} alt={a.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/0 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-xs text-cyan-100 font-medium">{a.caption}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="07 / contact" title="Let's build something secure.">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/80 to-slate-900/30 backdrop-blur-xl p-10 md:p-14">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Have a system that needs <span className="text-cyan-300">defending</span>?
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  I'm open to consulting, full-time roles, and collaborations on cybersecurity,
                  AI security, and secure software engineering projects.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="mailto:charles.omollo@example.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:scale-105 transition">
                    <Mail className="h-4 w-4" /> charles.omollo@example.com
                  </a>
                  <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 font-mono text-sm">
                <input type="text" placeholder="> your name" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition" />
                <input type="email" placeholder="> your email" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition" />
                <textarea rows={4} placeholder="> your message" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition resize-none" />
                <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] transition">
                  Transmit message →
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative border-t border-cyan-400/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} Charles Omollo Omondi · All systems nominal.</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Crafted in Nairobi</span>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-slate-900/80 border border-cyan-400/30 flex items-center justify-center text-cyan-200 hover:bg-cyan-400/20 transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={lightbox.src} alt={lightbox.caption ?? ""} className="w-full max-h-[85vh] object-contain rounded-2xl border border-cyan-400/20" />
              {lightbox.caption && (
                <div className="mt-3 text-center text-sm font-mono text-cyan-200">{lightbox.caption}</div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="pt-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">{eyebrow}</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-cyan-400/10 bg-slate-900/40 px-4 py-3">
      <div className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}
