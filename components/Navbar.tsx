"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", delay: 2.2 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = ["skills", "experience", "projects", "stack", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Navegação principal"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(3,3,3,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase hover:text-white transition-colors">
          <span className="text-cyan-400">RF</span> · Dev
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200
                ${active === link.href ? "text-cyan-400" : "text-gray-600 hover:text-gray-300"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:renan.d2109@gmail.com"
          aria-label="Status: disponível para oportunidades — clique para enviar um email para Renan"
          className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors border border-gray-800 hover:border-cyan-500/40 px-4 py-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Disponível
        </a>
      </div>
    </nav>
  );
}