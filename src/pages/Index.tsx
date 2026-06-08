import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Code2, Headphones, Database, TrendingUp, Mail, Github, Phone,
  Linkedin, MapPin, ExternalLink, Award, Briefcase, GraduationCap,
  X, ChevronRight, Sparkles, Lock, Cpu, Terminal, Download, Brain, Globe,
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
import resume from "@/assets/profile/resume.asset.json";

const CONTACT = {
  email: "charlesomondi2003@gmail.com",
  phone: "+254 769 140 009",
  github: "https://github.com/Omosh2003",
  portfolio: "https://charlesomondi.netlify.app",
  location: "Nairobi, Kenya",
};

// Image → content mapping (analyzed from photos + matched to CV sections)
const HERO_IMG = portraitShirt.url;                 // formal shirt+tie headshot → hero
const ABOUT_IMGS = [varsityBlack.url, argentinaJersey.url, stepsCap.url];

const skillGroups = [
  {
    icon: Shield, name: "Cybersecurity", accent: "from-cyan-400 to-blue-500",
    items: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Threat Analysis", "Network Security", "Security Monitoring"],
    tools: ["Nmap", "Burp Suite", "Wireshark"],
  },
  {
    icon: Code2, name: "Software Engineering", accent: "from-emerald-400 to-cyan-400",
    items: ["Web Development", "Application Development", "Secure Coding", "System Design"],
    tools: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    icon: Brain, name: "AI & Emerging Tech", accent: "from-fuchsia-400 to-violet-500",
    items: ["AI-Based Threat Detection", "Security Automation", "SalamaNet AI Development"],
    tools: ["ML Models", "Anomaly Detection"],
  },
  {
    icon: Headphones, name: "IT Support", accent: "from-sky-400 to-cyan-500",
    items: ["Troubleshooting", "Network Support", "Technical Support", "System Administration"],
    tools: ["Windows", "Linux", "Networking"],
  },
  {
    icon: Database, name: "Business & Data Management", accent: "from-amber-400 to-orange-500",
    items: ["CRM Management", "Lead Management", "Data Analysis", "Reporting", "Sales Operations"],
    tools: ["CRM Systems", "Excel", "Reporting Tools"],
  },
];

const experience = [
  {
    company: "Optiven Limited",
    role: "Data Management & Leads Administrator",
    period: "Aug 2025 — Present",
    tag: "Current",
    img: safaricomShop.url, // professional standing shot, business-casual era
    points: [
      "Managing and organizing large volumes of client data within CRM systems for accuracy and accessibility",
      "Tracking and following up on sales leads to support higher conversion rates",
      "Maintaining CRM systems with regular updates for real-time customer information",
      "Preparing sales performance and client engagement reports to support decision-making",
      "Coordinating structured communication between sales teams and prospects",
    ],
  },
  {
    company: "Coseke Limited",
    role: "Cybersecurity & Software Engineering Intern",
    period: "Jul 2025 — Sept 2025",
    tag: "Cybersecurity",
    img: usiuVarsity.url, // varsity jacket with "P" — campus/internship era
    points: [
      "Participated in vulnerability assessments and penetration testing exercises",
      "Supported development and maintenance of secure software solutions",
      "Implemented cybersecurity best practices in data handling and application workflows",
      "Supported monitoring, troubleshooting, and performance optimization",
      "Collaborated with teams to analyze threats and recommend mitigation strategies",
    ],
  },
  {
    company: "Safaricom PLC",
    role: "IT & Sales Support",
    period: "Feb 2024 — May 2024",
    tag: "IT Support",
    img: mpesaOffice.url, // M-Pesa branded shirt in office — Safaricom era
    points: [
      "Frontline IT support for mobile, network, and device-related issues",
      "Assisted clients in selecting suitable telecommunications products",
      "Promoted digital services including M-Pesa mobile banking and data solutions",
      "Delivered consistent high-quality service across the customer journey",
      "Built long-term client trust through clear communication and timely resolution",
    ],
  },
  {
    company: "Jamabinju Food & Catering",
    role: "ICT & Technical Support",
    period: "Prior",
    tag: "ICT",
    img: varsityBlack.url, // earlier era — black varsity with lanyard/ID
    points: [
      "Managed ICT infrastructure including computers and network systems",
      "Diagnosed and resolved hardware and software issues",
      "Ensured smooth operation of digital systems used in daily business",
      "Assisted in data management and system organization",
      "Trained staff on basic IT usage and troubleshooting techniques",
    ],
  },
  {
    company: "Stan Consulting Group",
    role: "Sales & Brand Ambassador",
    period: "Prior",
    tag: "Sales",
    img: interviewMic.url, // public-facing, microphone — outreach/brand work
    points: [
      "Represented the brand by promoting services to potential clients",
      "Engaged customers through direct marketing and product presentations",
      "Built strong client relationships to drive business growth",
      "Conducted market outreach to increase brand visibility",
      "Achieved sales targets through strategic communication",
    ],
  },
  {
    company: "Jubilee Insurance",
    role: "Financial Engineer Agent",
    period: "Prior",
    tag: "Finance",
    img: stepsCap.url, // casual, between-meetings shot — early career
    points: [
      "Advised clients on financial and insurance products tailored to their needs",
      "Promoted insurance solutions to individuals and organizations",
      "Helped clients understand policy details and benefits",
      "Built long-term client relationships supporting retention",
      "Achieved sales goals through trust-building and clear communication",
    ],
  },
];

const projects = [
  {
    title: "SalamaNet AI",
    tag: "Featured · AI Security",
    blurb:
      "AI-powered cybersecurity platform for threat detection and anomaly monitoring. Focused on phishing prevention and securing digital infrastructure for educational institutions and the public sector.",
    stack: ["Python", "AI/ML", "Threat Detection", "Phishing Prevention", "Anomaly Monitoring"],
    accent: "from-cyan-400 to-emerald-400",
    img: techWeekRolls.url, // Technology & Innovation Week — premier project showcase
  },
  {
    title: "USIU Counselling Portal — Vulnerability Assessment",
    tag: "Security Engagement",
    blurb:
      "Conducted automated and manual security testing of the USIU counselling portal. Identified vulnerabilities across the web surface and delivered prioritized remediation recommendations.",
    stack: ["Nmap", "Burp Suite", "Wireshark", "Manual Testing", "Reporting"],
    accent: "from-fuchsia-400 to-cyan-400",
    img: usiuVarsity.url, // USIU-related engagement
  },
  {
    title: "Personal Portfolio Website",
    tag: "Web",
    blurb:
      "Responsive portfolio designed and deployed to showcase projects, skills, and professional profile. Live at charlesomondi.netlify.app.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    accent: "from-emerald-400 to-sky-400",
    img: portraitShirt.url,
  },
];

const certifications = [
  { title: "Cisco Ethical Hacker", org: "Cisco Networking Academy", icon: Shield, accent: "emerald" },
  { title: "IVE Abroad Students Certificate", org: "International Volunteer Experience", icon: GraduationCap, accent: "cyan" },
];

const achievements = [
  "Strong interest in cybersecurity research, ethical hacking, and emerging threat analysis",
  "Hands-on experience through real-world projects — vulnerability assessments and AI security",
  "Continuously learning and applying new technologies across cybersecurity, software & IT",
  "Excellent problem-solving, analytical thinking, and attention to detail",
  "Proven teamwork, sales, and client engagement experience",
];

const gallery = [
  { src: portraitShirt.url,  cat: "Professional", caption: "Professional headshot" },
  { src: mpesaOffice.url,    cat: "Work Experience", caption: "Safaricom · M-Pesa operations" },
  { src: safaricomShop.url,  cat: "Work Experience", caption: "Field IT & sales support" },
  { src: usiuVarsity.url,    cat: "Cybersecurity Activities", caption: "USIU engagement period" },
  { src: varsityBlack.url,   cat: "Leadership & Teamwork", caption: "ICT support era" },
  { src: interviewMic.url,   cat: "Events & Training", caption: "Brand ambassador outreach" },
  { src: techWeekRolls.url,  cat: "Events & Training", caption: "Technology & Innovation Week" },
  { src: stepsCap.url,       cat: "Professional", caption: "Between sessions" },
  { src: argentinaJersey.url, cat: "Leadership & Teamwork", caption: "Off-duty" },
];

export default function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cats = ["All", ...Array.from(new Set(gallery.map((g) => g.cat)))];
  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);

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
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[140px]" />
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
            <span className="text-cyan-300">omollo</span>
            <span className="text-slate-500">.</span>
            <span className="text-emerald-300">sec</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            {["about", "skills", "experience", "projects", "certifications", "gallery", "contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="hover:text-cyan-300 transition-colors capitalize">{s}</a>
              </li>
            ))}
          </ul>
          <a
            href={resume.url}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-400/20 transition"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>
        </nav>
      </header>

      <main id="top" className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* HERO */}
        <section className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center min-h-[80vh]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-mono text-cyan-300">
              <Lock className="h-3 w-3" /> SECURING SYSTEMS · ENGINEERING DEFENSES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Omollo Charles<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                Omondi.
              </span>
            </h1>
            <p className="text-base md:text-lg text-cyan-200/90 font-mono">
              Cybersecurity Specialist · Software Engineer · AI Security Researcher
            </p>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Cybersecurity and IT specialist with hands-on experience in penetration testing, vulnerability
              assessment, and network security. Currently building <span className="text-cyan-300">SalamaNet AI</span>{" "}
              — an AI-driven platform for threat detection and phishing prevention.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={resume.url}
                download="Omollo_Charles_Omondi_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_-2px_rgba(34,211,238,0.8)] transition-all hover:scale-105"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur px-6 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur px-6 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {CONTACT.location}</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {CONTACT.phone}</span>
              <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> Open to opportunities</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/40 via-blue-400/20 to-fuchsia-500/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl p-3 shadow-2xl">
              <button onClick={() => setLightbox({ src: HERO_IMG, caption: "Omollo Charles Omondi" })} className="block w-full overflow-hidden rounded-[1.5rem] aspect-[4/5] group">
                <img src={HERO_IMG} alt="Omollo Charles Omondi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
              <div className="absolute top-6 left-6 rounded-full bg-slate-950/80 backdrop-blur px-3 py-1 text-[10px] font-mono text-emerald-300 border border-emerald-400/30">● LIVE</div>
              <div className="absolute bottom-6 right-6 rounded-xl bg-slate-950/80 backdrop-blur px-3 py-2 text-[10px] font-mono text-cyan-200 border border-cyan-400/20">
                threat_level: <span className="text-emerald-300">low</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="01 / about" title="Engineer by training, defender by craft.">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div className="grid grid-cols-3 gap-3">
              {ABOUT_IMGS.map((src, i) => (
                <button key={src} onClick={() => setLightbox({ src })} className={`group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-900/40 ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                  <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </button>
              ))}
            </div>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                I'm a Nairobi-based cybersecurity and IT professional with hands-on experience in penetration
                testing, vulnerability assessment, software engineering, IT support, and data management. I
                work fluently with tools like <span className="text-cyan-300">Nmap, Burp Suite, and Wireshark</span> to identify
                weaknesses and harden digital environments.
              </p>
              <p>
                My path runs from sales and customer service → IT support → data management → cybersecurity →
                software engineering → AI security innovation. That progression keeps both sides of my brain
                sharp: I understand the systems I'm defending <em>and</em> the humans using them.
              </p>
              <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/40 p-5">
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-widest mb-2">Mission</div>
                <p className="text-slate-300">
                  Build secure, intelligent systems that protect people and institutions — combining
                  cybersecurity rigor, software craft, and applied AI to anticipate threats before they land.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <Stat label="Roles" value="6" />
                <Stat label="Major project" value="SalamaNet" />
                <Stat label="Certifications" value="2" />
                <Stat label="Toolchain" value="3+" />
              </div>
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="02 / education" title="Academic foundation.">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-slate-900/70 to-slate-900/30 backdrop-blur-xl p-8 md:p-10">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/30">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-cyan-300">Expected Graduation · 2026</div>
                <h3 className="mt-1 text-2xl font-semibold">Bachelor's Degree in Business and Technical Management</h3>
                <p className="text-slate-400 mt-1">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="03 / skills" title="The stack I defend with.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-slate-900/70 to-slate-900/30 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-10 blur-2xl group-hover:opacity-30 transition`} />
                <div className="relative">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-slate-950 mb-4`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{s.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-slate-300 flex gap-2">
                        <ChevronRight className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-cyan-400/10">
                    {s.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-cyan-200">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="04 / experience" title="From the shop floor to the SOC.">
          <ol className="relative space-y-10 before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-blue-400/30 before:to-transparent">
            {experience.map((e, i) => (
              <motion.li
                key={e.company + e.period}
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
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="font-mono text-xs text-cyan-300">{e.period}</div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200">{e.tag}</span>
                  </div>
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
        <Section id="projects" eyebrow="05 / projects" title="Selected work.">
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl hover:border-cyan-400/40 transition-all ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <button onClick={() => setLightbox({ src: p.img, caption: p.title })} className="block overflow-hidden aspect-[16/9] w-full">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </button>
                <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition pointer-events-none`} />
                <div className="relative p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${p.accent} text-slate-950 font-bold`}>
                      {p.tag}
                    </span>
                    <Sparkles className="h-4 w-4 text-cyan-300 opacity-60" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100">{p.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications" eyebrow="06 / certifications" title="Verified credentials.">
          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((c) => (
              <div key={c.title} className="group flex items-start gap-4 rounded-2xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition">
                <div className={`h-12 w-12 flex-shrink-0 rounded-xl bg-${c.accent}-400/10 border border-${c.accent}-400/30 flex items-center justify-center text-${c.accent}-300`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-100">{c.title}</h3>
                  <div className="text-sm text-slate-400 mt-0.5">{c.org}</div>
                </div>
                <Award className="h-5 w-5 text-emerald-400/60 group-hover:text-emerald-300 transition" />
              </div>
            ))}
          </div>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section id="achievements" eyebrow="07 / achievements" title="Activities & strengths.">
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 rounded-2xl border border-cyan-400/10 bg-slate-900/40 backdrop-blur p-5 hover:border-cyan-400/30 transition"
              >
                <Sparkles className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* GALLERY */}
        <Section id="gallery" eyebrow="08 / gallery" title="Moments & milestones.">
          <div className="flex flex-wrap gap-2 mb-6">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition ${
                  filter === c
                    ? "bg-cyan-400/20 border-cyan-400/50 text-cyan-200"
                    : "bg-slate-900/40 border-slate-700 text-slate-400 hover:text-cyan-200 hover:border-cyan-400/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((a, i) => (
                <motion.button
                  key={a.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(a)}
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-900/40 ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img src={a.src} alt={a.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/0 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">{a.cat}</span>
                    <span className="text-xs text-cyan-100 font-medium mt-0.5">{a.caption}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="09 / contact" title="Let's build something secure.">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/80 to-slate-900/30 backdrop-blur-xl p-10 md:p-14">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Have a system that needs <span className="text-cyan-300">defending</span>?
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Open to cybersecurity engagements, software engineering roles, AI security collaborations,
                  and consulting opportunities.
                </p>
                <ul className="mt-6 space-y-3 font-mono text-sm">
                  <ContactRow icon={Mail}  label="email"     value={CONTACT.email}    href={`mailto:${CONTACT.email}`} />
                  <ContactRow icon={Phone} label="phone"     value={CONTACT.phone}    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} />
                  <ContactRow icon={Github} label="github"   value="Omosh2003"        href={CONTACT.github} />
                  <ContactRow icon={Globe} label="portfolio" value="charlesomondi.netlify.app" href={CONTACT.portfolio} />
                  <ContactRow icon={MapPin} label="location" value={CONTACT.location} />
                </ul>
              </div>
              <form
                onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${CONTACT.email}`; }}
                className="space-y-3 font-mono text-sm"
              >
                <input type="text" placeholder="> your name" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition" />
                <input type="email" placeholder="> your email" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition" />
                <textarea rows={5} placeholder="> your message" className="w-full bg-slate-950/60 border border-cyan-400/20 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 transition resize-none" />
                <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] transition">
                  Transmit message →
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative border-t border-cyan-400/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} Omollo Charles Omondi · All systems nominal.</span>
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

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
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
      <div className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{value}</div>
      <div className="text-[10px] text-slate-500 mt-0.5 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <Icon className="h-4 w-4 text-cyan-300 flex-shrink-0" />
      <span className="text-slate-500 w-20">{label}</span>
      <span className="text-slate-200 break-all">{value}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 hover:text-cyan-200 transition group">
          {inner}
          <ExternalLink className="h-3 w-3 text-slate-600 group-hover:text-cyan-300 ml-auto" />
        </a>
      ) : (
        <div className="flex items-center gap-3">{inner}</div>
      )}
    </li>
  );
}
