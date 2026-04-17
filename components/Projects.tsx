"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Garq Imóveis",
    subtitle: "Sistema de Gestão Imobiliária",
    description:
      "Aplicação completa para gerenciamento de inventário imobiliário e fluxo de clientes. Sistema CRUD completo com lógica de filtros dinâmicos, focando em performance e usabilidade.",
    tags: ["JavaScript", "DOM Manipulation", "CRUD", "Persistência de Dados"],
    status: "concluído",
    highlight: true,
    link: "#",
  },
  {
    number: "02",
    title: "Portfolio Pessoal",
    subtitle: "Este site",
    description:
      "Site de portfólio com animações GSAP, design system em Tailwind e arquitetura Next.js App Router. Foco em performance e experiência visual.",
    tags: ["Next.js", "GSAP", "TypeScript", "Tailwind CSS"],
    status: "live",
    highlight: false,
    link: "#",
  },
  {
    number: "03",
    title: "Dashboard Analítico",
    subtitle: "Power BI · Relatórios",
    description:
      "Painel de gestão com DAX avançado, modelagem de dados e relatórios dinâmicos. Desenvolvimento baseado em experiência prática na Aisin Automotive.",
    tags: ["Power BI", "DAX", "Excel", "KPIs"],
    status: "concluído",
    highlight: false,
    link: "#",
  },
];

const statusColors: Record<string, string> = {
  live: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  "em desenvolvimento": "text-amber-400 bg-amber-500/10 border-amber-500/30",
  concluído: "text-gray-400 bg-gray-500/10 border-gray-500/30",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-label-proj",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".proj-heading",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".proj-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: ".proj-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-28 max-w-6xl mx-auto px-8 md:px-16">
      <p className="section-label-proj font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
        // 03 — Projetos
      </p>

      <h2 className="proj-heading text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
        O que eu <span className="text-cyan-400">construí</span>
      </h2>

      <p className="text-gray-600 text-sm mb-14 max-w-lg">
        Projetos pessoais e trabalhos práticos que demonstram capacidade técnica e criatividade.
      </p>

      <div className="proj-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            aria-label={`Ver projeto: ${proj.title} — ${proj.subtitle}`}
            className={`proj-card group relative border bg-black/20 p-7 flex flex-col gap-5
              transition-all duration-500 cursor-pointer overflow-hidden
              ${proj.highlight
                ? "border-cyan-500/30 bg-cyan-500/[0.02] hover:border-cyan-400/50 hover:bg-cyan-500/[0.04]"
                : "border-gray-800 hover:border-gray-700 hover:bg-white/[0.02]"
              }`}
          >
            {/* Highlight glow */}
            {proj.highlight && (
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-100 pointer-events-none" />
            )}

            {/* Hover sweep */}
            <span className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Number */}
            <span
              className={`font-mono text-5xl font-black leading-none select-none transition-colors duration-500
                ${proj.highlight
                  ? "text-cyan-500/15 group-hover:text-cyan-500/25"
                  : "text-white/5 group-hover:text-white/10"
                }`}
            >
              {proj.number}
            </span>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <h3
                    className={`font-bold text-lg leading-tight transition-colors duration-300
                      ${proj.highlight ? "text-white group-hover:text-cyan-400" : "text-gray-200 group-hover:text-white"}`}
                  >
                    {proj.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-600 mt-0.5">{proj.subtitle}</p>
                </div>
                <span
                  className={`shrink-0 font-mono text-[10px] tracking-wider px-2 py-1 border uppercase ${statusColors[proj.status]}`}
                >
                  {proj.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">{proj.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`font-mono text-[11px] border px-2.5 py-1 transition-colors duration-300
                    ${proj.highlight
                      ? "text-cyan-400/50 border-cyan-800/50 group-hover:text-cyan-400/80"
                      : "text-gray-600 border-gray-800 group-hover:text-gray-400"
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <div aria-hidden="true" className="absolute bottom-6 right-6 font-mono text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
              →
            </div>
          </a>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-10 flex items-center justify-center">
        <a
          href="https://github.com/orenanfelix43"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver mais projetos no GitHub de Renan Felix, abre em nova aba"
          className="group flex items-center gap-3 border border-gray-800 px-6 py-3.5 text-gray-500 font-mono text-sm tracking-wider hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-white transition-colors">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Ver mais no GitHub
          <span aria-hidden="true"className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}