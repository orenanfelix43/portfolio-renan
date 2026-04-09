"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="bg-[#030303] text-gray-300 min-h-screen">
      <Navbar />
      <Hero />
      <Interests />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}