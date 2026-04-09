"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interests = [
  { label: "JavaScript (ES6+)", category: "frontend", icon: "⬡" },
  { label: "TypeScript", category: "frontend", icon: "⬡" },
  { label: "HTML5 / CSS3", category: "frontend", icon: "⬡" },
  { label: "React / Next.js", category: "frontend", icon: "⬡" },
  { label: "Tailwind CSS", category: "frontend", icon: "⬡" },
  { label: "Node.js", category: "backend", icon: "◈" },
  { label: "MongoDB", category: "backend", icon: "◈" },
  { label: "SQL", category: "backend", icon: "◈" },
  { label: "Integração de APIs", category: "backend", icon: "◈" },
  { label: "Power BI Avançado", category: "data", icon: "◇" },
  { label: "Excel / VBA", category: "data", icon: "◇" },
  { label: "QA / Testes", category: "quality", icon: "◆" },
  { label: "Git / GitHub", category: "quality", icon: "◆" },
  { label: "Metodologias Ágeis", category: "quality", icon: "◆" },
  { label: "GSAP / Motion", category: "frontend", icon: "⬡" },
  { label: "TOTVS Datasul", category: "data", icon: "◇" },
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

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-label-interests",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".interest-heading",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".interest-tag",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".tags-grid", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".legend-item",
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "expo.out",
          scrollTrigger: { trigger: ".legend-row", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-28 max-w-6xl mx-auto px-8 md:px-16">
      <p className="section-label-interests font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
        // 01 — Tecnologias
      </p>

      <h2 className="interest-heading text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
        O que eu <span className="text-cyan-400">domino</span>
      </h2>

      {/* Legend */}
      <div className="legend-row flex flex-wrap gap-4 mb-10">
        {legend.map((item) => (
          <div key={item.key} className="legend-item flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-sm border ${
                item.key === "frontend" ? "border-cyan-500 bg-cyan-500/20" :
                item.key === "backend" ? "border-violet-500 bg-violet-500/20" :
                item.key === "data" ? "border-amber-500 bg-amber-500/20" :
                "border-emerald-500 bg-emerald-500/20"
              }`}
            />
            <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="tags-grid flex flex-wrap gap-3">
        {interests.map((item, i) => (
          <span
            key={i}
            className={`interest-tag border px-4 py-2.5 font-mono text-sm tracking-wider cursor-default
              transition-all duration-300 hover:scale-105 select-none
              ${categoryConfig[item.category].colors}`}
          >
            {item.label}
          </span>
        ))}
      </div>

      {/* Certifications strip */}
      <div className="mt-16 border border-gray-800 p-6 bg-black/20">
        <p className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase mb-5">
          // Certificações · Alura
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Lógica de Programação com JavaScript",
            "Git e GitHub — Versionamento e Colaboração",
            "Quality Assurance — Plano de Testes e Gestão de Bugs",
            "Power BI — DAX, Contextos e Iteração",
            "Equipes Ágeis — Scrum e Kanban",
            "Mergulho em Programação com JavaScript",
          ].map((cert, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
              <span className="text-cyan-500/50 font-mono text-xs">→</span>
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}