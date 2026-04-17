"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    label: "Email",
    value: "renan.d2109@gmail.com",
    href: "mailto:renan.d2109@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Telefone",
    value: "(11) 99881-5217",
    href: "tel:+5511998815217",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "orenanfelix43",
    href: "https://github.com/orenanfelix43",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Localização",
    value: "Porto Feliz, SP",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  // Removemos o <HTMLElement> que causava erro no Build de servidor
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check de segurança para garantir que o código só rode no cliente e com a ref pronta
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%",
            toggleActions: "play none none none"
          },
        }
      );

      gsap.fromTo(
        ".contact-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { 
            trigger: ".contacts-grid", 
            start: "top 85%",
            toggleActions: "play none none none"
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-28 max-w-6xl mx-auto px-8 md:px-16">
      <p className="font-mono text-xs tracking-[0.3em] text-gray-600 uppercase mb-4">
        // 05 — Contato
      </p>

      <h2 className="contact-heading text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
        Vamos <span className="text-cyan-400">conversar</span>
      </h2>

      <p className="text-gray-500 text-lg mb-14 max-w-lg">
        Aberto a oportunidades em desenvolvimento de software, seja como Dev Front-End, Full Stack ou Suporte Técnico com viés técnico.
      </p>

      <div className="contacts-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={
              c.label === "Email"
                ? `Enviar email para Renan Felix: ${c.value}`
                : c.label === "Telefone"
                ? `Ligar para Renan Felix: ${c.value}`
                : c.label === "GitHub"
                ? `Perfil do GitHub de Renan Felix (${c.value}), abre em nova aba`
                : `Localização de Renan Felix: ${c.value}`
            }
            className="contact-card group border border-gray-800 p-5 bg-black/20 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all duration-300 flex items-center gap-4"
          >
            <div aria-hidden="true" className="text-gray-600 group-hover:text-cyan-400 transition-colors duration-300">
              {c.icon}
            </div>
            <div>
              <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-0.5">{c.label}</div>
              <div className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">{c.value}</div>
            </div>
            <div aria-hidden="true" className="ml-auto text-gray-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 font-mono">
              →
            </div>
          </a>
        ))}
      </div>

      <div className="border-t border-gray-900 pt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-gray-700">
            Renan Das Dores Felix · {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] text-gray-800 mt-1">
            Desenvolvido com Next.js · TypeScript · Tailwind · GSAP
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-gray-700">disponível para oportunidades</span>
        </div>
      </div>
    </section>
  );
}