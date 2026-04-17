"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type Group = {
  title: string;
  subtitle: string;
  accent: { bg: string };
  categoryIcon: React.ReactNode;
  skills: Skill[];
};

// ─── Componente de ícone via Devicons CDN ─────────────────────────────────────

const DevIcon = ({ name, fallback }: { name: string; fallback?: string }) => (
  <div className="w-[18px] h-[18px] relative flex items-center justify-center">
    <Image
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
      alt={fallback ?? name}
      width={18}
      height={18}
      unoptimized
    />
  </div>
);

// ─── Dados das tags de tecnologia (seção de badges) ──────────────────────────

const interests = [
  { label: "JavaScript (ES6+)", category: "frontend" },
  { label: "TypeScript",        category: "frontend" },
  { label: "HTML5 / CSS3",      category: "frontend" },
  { label: "React / Next.js",   category: "frontend" },
  { label: "Tailwind CSS",      category: "frontend" },
  { label: "Node.js",           category: "backend"  },
  { label: "MongoDB",           category: "backend"  },
  { label: "SQL",               category: "backend"  },
  { label: "Integração de APIs",category: "backend"  },
  { label: "Power BI Avançado", category: "data"     },
  { label: "Excel / VBA",       category: "data"     },
  { label: "QA / Testes",       category: "quality"  },
  { label: "Git / GitHub",      category: "quality"  },
  { label: "Metodologias Ágeis",category: "quality"  },
  { label: "GSAP / Motion",     category: "frontend" },
  { label: "TOTVS Datasul",     category: "data"     },
];

const categoryConfig: Record<string, { colors: string; label: string }> = {
  frontend: {
    colors: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/60 hover:bg-cyan-500/10",
    label: "Frontend",
  },
  backend: {
    colors: "border-violet-500/30 text-violet-400 bg-violet-500/5 hover:border-violet-400/60 hover:bg-violet-500/10",
    label: "Backend",
  },
  data: {
    colors: "border-amber-500/30 text-amber-400 bg-amber-500/5 hover:border-amber-400/60 hover:bg-amber-500/10",
    label: "Dados & BI",
  },
  quality: {
    colors: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:border-emerald-400/60 hover:bg-emerald-500/10",
    label: "QA & Ops",
  },
};

const legend = Object.entries(categoryConfig).map(([key, val]) => ({ key, ...val }));

// ─── Dados dos grupos com ícones (seção de cards) ────────────────────────────

const groups: Group[] = [
  {
    title: "Frontend",
    subtitle: "5 tecnologias",
    accent: { bg: "bg-blue-950" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 6l-4 12" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "Next.js",         icon: <DevIcon name="nextjs"      fallback="Next.js" /> },
      { name: "TypeScript",      icon: <DevIcon name="typescript"  fallback="TypeScript" /> },
      { name: "Tailwind CSS",    icon: <DevIcon name="tailwindcss" fallback="Tailwind CSS" /> },
      { name: "React",           icon: <DevIcon name="react"       fallback="React" /> },
      { name: "JavaScript ES6+", icon: <DevIcon name="javascript"  fallback="JavaScript" /> },
    ],
  },
  {
    title: "Backend",
    subtitle: "3 tecnologias",
    accent: { bg: "bg-violet-950" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#a78bfa" strokeWidth="1.5" />
        <path d="M6 9h2M6 12h4M6 15h2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="12" r="2.5" stroke="#a78bfa" strokeWidth="1.5" />
      </svg>
    ),
    skills: [
      { name: "Node.js", icon: <DevIcon name="nodejs"  fallback="Node.js" /> },
      { name: "MongoDB", icon: <DevIcon name="mongodb" fallback="MongoDB" /> },
      { name: "Postman", icon: <DevIcon name="postman" fallback="Postman" /> },
    ],
  },
  {
    title: "Qualidade & Gestão",
    subtitle: "3 tecnologias",
    accent: { bg: "bg-amber-950" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      {
        name: "QA / Testes",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#fbbf24" strokeWidth="1.5" />
            <path d="M17 17l4 4M8 11h6M11 8v6" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Metodologias Ágeis",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3"  y="3"  width="8" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.5" />
            <rect x="13" y="3"  width="8" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.5" />
            <rect x="3"  y="13" width="8" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        name: "Power BI",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" stroke="#fbbf24" strokeWidth="1.5" />
            <path d="M7 17V10M12 17V7M17 17v-4" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

// ─── Certificações ────────────────────────────────────────────────────────────

const certifications = [
  "Lógica de Programação com JavaScript",
  "Git e GitHub — Versionamento e Colaboração",
  "Quality Assurance — Plano de Testes e Gestão de Bugs",
  "Power BI — DAX, Contextos e Iteração",
  "Equipes Ágeis — Scrum e Kanban",
  "Mergulho em Programação com JavaScript",
];

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label de seção
      gsap.fromTo(
        ".section-label-interests",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Título
      gsap.fromTo(
        ".interest-heading",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      // Badges de tecnologia
      gsap.fromTo(
        ".interest-tag",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".tags-grid", start: "top 80%" },
        }
      );

      // Legenda de categorias
      gsap.fromTo(
        ".legend-item",
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "expo.out",
          scrollTrigger: { trigger: ".legend-row", start: "top 85%" },
        }
      );

      // Cards de grupo (TechStack)
      gsap.fromTo(
        ".group-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "expo.out",
          scrollTrigger: { trigger: ".groups-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Tecnologias e habilidades de Renan Felix"
      className="py-28 max-w-6xl mx-auto px-8 md:px-16"
    >
      {/* ── Cabeçalho ─────────────────────────────────────────────────────── */}
      <p className="section-label-interests font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
        // 01 — Tecnologias
      </p>

      <h2 className="interest-heading text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
        O que eu <span className="text-cyan-400">domino</span>
      </h2>

      {/* ── Legenda de categorias ──────────────────────────────────────────── */}
      <div className="legend-row flex flex-wrap gap-4 mb-10">
        {legend.map((item) => (
          <div key={item.key} className="legend-item flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-sm border ${
                item.key === "frontend" ? "border-cyan-500 bg-cyan-500/20"    :
                item.key === "backend"  ? "border-violet-500 bg-violet-500/20" :
                item.key === "data"     ? "border-amber-500 bg-amber-500/20"   :
                                          "border-emerald-500 bg-emerald-500/20"
              }`}
            />
            <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Badges de tecnologia ───────────────────────────────────────────── */}
      <div className="tags-grid flex flex-wrap gap-3 mb-16">
        {interests.map((item, i) => (
          <span
            key={i}
            role="listitem"
            className={`interest-tag border px-4 py-2.5 font-mono text-sm tracking-wider cursor-default
              transition-all duration-300 hover:scale-105 select-none
              ${categoryConfig[item.category].colors}`}
          >
            {item.label}
          </span>
        ))}
      </div>

      {/* ── Cards detalhados por grupo (com ícones) ────────────────────────── */}
      <div className="groups-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {groups.map((group) => (
          <div
            key={group.title}
            className="group-card border border-gray-800 bg-black/20 hover:border-gray-700 transition-all duration-500"
          >
            {/* Cabeçalho do card */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-5 border-b border-gray-800/60">
              <div
                className={`w-8 h-8 rounded-lg ${group.accent.bg} flex items-center justify-center shrink-0`}
              >
                {group.categoryIcon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">{group.title}</p>
                <p className="text-[11px] text-gray-600 mt-0.5">{group.subtitle}</p>
              </div>
            </div>

            {/* Lista de skills com ícone */}
            <ul className="px-6 py-4 divide-y divide-gray-800/50">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 py-3">
                  <span aria-hidden="true" className="shrink-0">{skill.icon}</span>
                  <span className="text-sm text-gray-400">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Certificações ──────────────────────────────────────────────────── */}
      <div className="border border-gray-800 p-6 bg-black/20">
        <p className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase mb-5">
          // Certificações · Alura
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
              <span aria-hidden="true" className="text-cyan-500/50 font-mono text-xs">→</span>
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}