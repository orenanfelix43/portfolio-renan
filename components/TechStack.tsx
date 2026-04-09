// components/TechStack.tsx
export default function TechStack() {
  const skills = [
    { title: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "MongoDB", "Postman"] },
    { title: "Qualidade & Gestão", items: ["QA/Testes", "Metodologias Ágeis", "Power BI"] }
  ];

  return (
    <section className="py-24 px-8 md:px-24 bg-[#0d0d0d]">
      <h2 className="text-gray-500 font-mono mb-12 uppercase tracking-widest text-sm italic">Experiência Técnica</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="p-8 border border-gray-900 rounded-2xl bg-[#0a0a0a] hover:border-blue-500/50 transition-colors group">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.items.map(item => (
                <li key={item} className="text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}