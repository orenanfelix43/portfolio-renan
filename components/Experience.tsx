"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "11/2025 — atual",
    role: "Analista de Suporte Técnico / Implementação",
    company: "Deeliv Software",
    location: "Porto Feliz/SP",
    description:
      "Identificação e reporte de bugs, colaborando com o time de engenharia para melhoria do produto. Implementação técnica de sistemas, garantindo integridade de dados e configuração de ambientes para novos clientes.",
    tags: ["QA", "Bug Management", "Onboarding", "Suporte Técnico"],
    type: "current",
  },
  {
    period: "07/2022 — 12/2024",
    role: "Auxiliar Técnico de Manutenção Pleno II",
    company: "Aisin Automotive Ltda",
    location: "Itu/SP",
    description:
      "Responsável por compras técnicas, planejamento e controle de materiais. Padronização de processos e documentação. Desenvolvimento de layouts e instruções de trabalho com foco em usabilidade. Homologação de fornecedores e controle de budget.",
    tags: ["TOTVS Datasul", "Power BI", "Processos", "Documentação"],
    type: "tech",
  },
  {
    period: "03/2022 — 07/2022",
    role: "Aprendiz Administrativo — Compras",
    company: "ITEMM (agência) · Aisin Automotive",
    location: "Itu/SP",
    description:
      "Realização de cotações de frete, inventário e recebimento de materiais. Suporte administrativo e entrega de documentos.",
    tags: ["Compras", "Inventário", "Administrativo"],
    type: "admin",
  },
  {
    period: "02/2021 — 03/2022",
    role: "Assistente de Estoque Jr",
    company: "JVC Vestuário Ltda",
    location: "Itu/SP",
    description:
      "Controle de estoque e entrada de mercadorias no sistema. Atualização de marketplaces como Amazon e Mercado Livre. Gestão de KPIs e planilhas.",
    tags: ["Excel", "Amazon", "Mercado Livre", "KPIs"],
    type: "admin",
  },
  {
    period: "08/2020 — 02/2021",
    role: "Aprendiz Administrativo",
    company: "Cia do Celular",
    location: "Itu/SP",
    description:
      "Suporte em vendas e atendimento técnico. Responsável por requisições para conserto de eletrônicos e softwares.",
    tags: ["Suporte Técnico", "Atendimento", "Eletrônicos"],
    type: "tech",
  },
];

const typeAccent: Record<string, string> = {
  current: "border-cyan-500/40 bg-cyan-500/[0.03] hover:border-cyan-500/60",
  tech: "border-gray-800 bg-black/20 hover:border-violet-500/30 hover:bg-violet-500/[0.02]",
  admin: "border-gray-800 bg-black/10 hover:border-gray-700",
};

const tagStyle: Record<string, string> = {
  current: "text-cyan-400/70 border-cyan-500/20",
  tech: "text-violet-400/70 border-violet-500/20",
  admin: "text-gray-500 border-gray-800",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-label-exp",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".exp-heading",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.6, ease: "expo.out",
          scrollTrigger: { trigger: ".exp-list", start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".exp-card",
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "expo.out",
          scrollTrigger: { trigger: ".exp-list", start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".timeline-dot",
        { scale: 0 },
        {
          scale: 1, duration: 0.4, stagger: 0.12, ease: "back.out(2)",
          scrollTrigger: { trigger: ".exp-list", start: "top 75%" },
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-28 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <p className="section-label-exp font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
          // 02 — Experiência
        </p>

        <h2 className="exp-heading text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Onde já <span className="text-cyan-400">trabalhei</span>
        </h2>

        <p className="text-gray-600 text-sm mb-14 max-w-lg">
          Trajetória com foco crescente em tecnologia — da operação à implementação de sistemas.
        </p>

        <div className="exp-list relative flex gap-8">
          {/* Vertical timeline */}
          <div className="relative flex-col items-center pt-2 hidden md:flex" style={{ minWidth: "24px" }}>
            <div
              className="timeline-line absolute top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, rgba(34,211,238,0.4), rgba(100,100,100,0.2), transparent)",
              }}
            />
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`timeline-dot relative z-10 w-3 h-3 rounded-full border-2 border-black ring-2 ${
                  exp.type === "current"
                    ? "bg-cyan-400 ring-cyan-500/40"
                    : exp.type === "tech"
                    ? "bg-violet-400 ring-violet-500/30"
                    : "bg-gray-600 ring-gray-700/30"
                }`}
                style={{ marginTop: i === 0 ? 0 : "calc(100% / 6)" }}
              />
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 flex-1">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card group border p-7 transition-all duration-500 ${typeAccent[exp.type]}`}
              >
                {exp.type === "current" && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Posição atual</span>
                  </div>
                )}

                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3
                      className={`font-bold text-lg transition-colors duration-300 ${
                        exp.type === "current"
                          ? "text-white group-hover:text-cyan-400"
                          : exp.type === "tech"
                          ? "text-gray-200 group-hover:text-violet-400"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-gray-500 font-mono text-sm">{exp.company}</p>
                      <span className="text-gray-700">·</span>
                      <p className="text-gray-700 font-mono text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gray-600 bg-white/5 px-3 py-1.5 border border-gray-800 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`font-mono text-xs border px-2.5 py-1 ${tagStyle[exp.type]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education block */}
        <div className="mt-12 border border-gray-800 p-7 bg-black/20 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-2">// Formação Acadêmica</p>
            <h3 className="text-white font-bold text-lg">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-gray-500 font-mono text-sm mt-1">Faculdade de Engenharia de Sorocaba · FACENS</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-gray-600 bg-white/5 px-4 py-2 border border-gray-800">
              Concluído · Dezembro/2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}