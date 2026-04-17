"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid lines reveal
      gsap.fromTo(
        ".grid-line-h",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.8, stagger: 0.07, ease: "expo.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".grid-line-v",
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, duration: 1.8, stagger: 0.07, ease: "expo.out", delay: 0.1 }
      );

      // Name reveal — letter by letter
      const letters = nameRef.current?.querySelectorAll(".letter");
      if (letters) {
        gsap.fromTo(
          letters,
          { y: 130, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.0,
            stagger: 0.04,
            ease: "expo.out",
            delay: 0.5,
          }
        );
      }

      // Role tag
      gsap.fromTo(
        roleRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 1.2 }
      );

      // Description
      gsap.fromTo(
        descRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 1.4 }
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 1.6 }
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "expo.out",
          delay: 1.8,
        }
      );

      // Accent dot pulse
      gsap.to(".accent-dot", {
        scale: 1.5,
        opacity: 0.5,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating badge
      gsap.to(".float-badge", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Corner decorations
      gsap.fromTo(
        ".corner-deco",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(2)", delay: 2 }
      );
    }, containerRef);

    // Custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const nameLetters = "RENAN FELIX".split("").map((ch, i) => (
    <span
      key={i}
      className="letter inline-block"
      style={{ display: ch === " " ? "inline" : "inline-block" }}
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030303]"
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "rgba(34,211,238,0.9)",
          boxShadow: "0 0 20px rgba(34,211,238,0.6)",
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={`h${i}`}
            className="grid-line-h absolute left-0 right-0 h-px"
            style={{
              top: `${(i + 1) * 14}%`,
              background: "rgba(255,255,255,0.025)",
            }}
          />
        ))}
        {[...Array(9)].map((_, i) => (
          <div
            key={`v${i}`}
            className="grid-line-v absolute top-0 bottom-0 w-px"
            style={{
              left: `${(i + 1) * 11}%`,
              background: "rgba(255,255,255,0.025)",
            }}
          />
        ))}
      </div>

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "10%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      {/* Corner decorations */}
      <div className="corner-deco absolute top-8 left-8 w-6 h-6 border-t border-l border-cyan-500/30" />
      <div className="corner-deco absolute top-8 right-8 w-6 h-6 border-t border-r border-cyan-500/30" />
      <div className="corner-deco absolute bottom-8 left-8 w-6 h-6 border-b border-l border-cyan-500/30" />
      <div className="corner-deco absolute bottom-8 right-8 w-6 h-6 border-b border-r border-cyan-500/30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 pt-32 pb-24">

        {/* Role tag */}
        <p
          ref={roleRef}
          className="font-mono text-xs tracking-[0.3em] text-cyan-400/80 uppercase mb-6 flex items-center gap-3"
        >
          <span aria-hidden="true" className="accent-dot inline-block w-2 h-2 rounded-full bg-cyan-400" />
          Desenvolvedor de Software Jr · ADS @ FACENS · Porto Feliz/SP
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tighter text-white mb-8 overflow-hidden"
          style={{ perspective: "800px", fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "-0.02em" }}
        >
          {nameLetters}
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-cyan-500/50" />
          <p className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase">
            JavaScript · TypeScript · Node.js · Power BI
          </p>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="max-w-xl text-gray-400 text-lg leading-relaxed mb-10"
        >
          Desenvolvedor com foco em construir interfaces modernas, sistemas funcionais e 
          experiências digitais. Formado em ADS pela FACENS, com experiência em 
          suporte técnico, QA e desenvolvimento.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 items-center mb-16">
          <a
            href="#projects"
            aria-label="Ver projetos de Renan Felix"
            className="group relative px-8 py-3.5 bg-cyan-400 text-black font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-cyan-300"
          >
            <span className="relative z-10">Ver projetos</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#experience"
            aria-label="Ver experiência profissional de Renan Felix"
            className="px-8 py-3.5 border border-gray-700 text-gray-300 font-bold text-sm tracking-widest uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            Experiência
          </a>
          <a
            href="mailto:renan.d2109@gmail.com"
            aria-label="Entrar em contato com Renan Felix por email"
            className="px-8 py-3.5 border border-gray-800 text-gray-500 font-bold text-sm tracking-widest uppercase hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
          >
            Contato
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8">
          {[
            { value: "5+", label: "anos de exp." },
            { value: "ADS", label: "FACENS · 2024" },
            { value: "CNH", label: "A e B" },
            { value: "Dev", label: "em transição" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="font-mono text-2xl font-black text-white">{stat.value}</div>
              <div className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating status badge */}
        <div
          className="float-badge absolute right-8 md:right-16 top-32 border border-gray-800 bg-black/80 backdrop-blur-sm px-5 py-4 font-mono text-xs text-gray-500"
          style={{ borderLeft: "2px solid rgba(34,211,238,0.4)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400">disponível</span>
          </div>
          <div className="text-gray-600">para oportunidades</div>
          <div className="text-gray-700 text-[10px] mt-2">(11) 99881-5217</div>
        </div>

        {/* GitHub badge */}
        <div
          className="float-badge absolute right-8 md:right-16 bottom-32 border border-gray-800 bg-black/80 backdrop-blur-sm px-5 py-3 font-mono text-xs"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="https://github.com/orenanfelix43"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
             <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github.com/orenanfelix43
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 font-mono text-[10px] tracking-widest uppercase">
          
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}