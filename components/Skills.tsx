"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  {
    cat: "Frontend",
    accent: "cyan",
    items: [
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "React / Next.js", level: 65 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    cat: "Backend & Dados",
    accent: "violet",
    items: [
      { name: "Node.js", level: 55 },
      { name: "MongoDB", level: 50 },
      { name: "SQL (Básico)", level: 60 },
      { name: "Power BI (DAX)", level: 90 },
      { name: "Excel / VBA", level: 85 },
    ],
  },
  {
    cat: "Qualidade & Gestão",
    accent: "emerald",
    items: [
      { name: "QA / Testes de Software", level: 75 },
      { name: "Git / GitHub", level: 70 },
      { name: "Scrum / Kanban", level: 80 },
      { name: "Gestão de Bugs", level: 80 },
      { name: "TOTVS Datasul", level: 65 },
    ],
  },
];

const accentColors: Record<string, { bar: string; text: string; border: string }> = {
  cyan: { bar: "bg-cyan-400", text: "text-cyan-400", border: "border-cyan-500/30" },
  violet: { bar: "bg-violet-400", text: "text-violet-400", border: "border-violet-500/30" },
  emerald: { bar: "bg-emerald-400", text: "text-emerald-400", border: "border-emerald-500/30" },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-label-skills",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".skills-heading",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".skill-group",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
        }
      );

      // Animate progress bars
      document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        const target = bar.getAttribute("data-level") || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
            delay: 0.5,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stack" aria-label="Stack técnica de Renan Felix" className="py-28 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <p className="section-label-skills font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
          // 04 — Stack Técnica
        </p>

        <h2 className="skills-heading text-4xl md:text-5xl font-black text-white mb-14 leading-tight">
          Minhas <span className="text-cyan-400">ferramentas</span>
        </h2>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {stack.map((group, i) => {
            const accent = accentColors[group.accent];
            return (
              <div key={i} className={`skill-group border p-6 bg-black/20 ${accent.border}`}>
                <h4 className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-2 ${accent.text}`}>
                  <span className={`w-2 h-2 rounded-sm ${accent.bar}`} />
                  {group.cat}
                </h4>

                <div className="space-y-5">
                  {group.items.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-400 text-sm font-medium">{skill.name}</span>
                        <span className="font-mono text-xs text-gray-700">{skill.level}%</span>
                      </div>
                      <div className="h-px bg-gray-800 relative overflow-hidden"
                        role="progressbar"
                        aria-label={`${skill.name}: ${skill.level}% de proficiência`}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className={`skill-bar-fill h-full ${accent.bar} opacity-70 absolute top-0 left-0`}
                          data-level={skill.level}
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Visão Analítica & Operacional",
              desc: "Experiência prática em integração de sistemas, dados e processos com histórico em áreas que dialogam com tecnologia.",
            },
            {
              title: "Transição Estruturada para Dev",
              desc: "Formação técnica sólida combinada com experiência em suporte e QA — perspectiva única para o desenvolvimento de produtos.",
            },
            {
              title: "Habilidade Visual & Criativa",
              desc: "Background em desenho clássico contribui para senso estético aplicado ao design de interfaces.",
            },
            {
              title: "Automação com IA",
              desc: "Experiência na criação de prompts e automatizações com ferramentas de IA para otimização de processos.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 p-5 bg-black/10 hover:border-gray-700 transition-colors">
              <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}