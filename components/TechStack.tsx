// components/TechStack.tsx
// components/TechStack.tsx
import Image from "next/image";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type Group = {
  title: string;
  subtitle: string;
  accent: { bg: string; icon: string };
  categoryIcon: React.ReactNode;
  skills: Skill[];
};

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

const groups: Group[] = [
  {
    title: "Frontend",
    subtitle: "5 tecnologias",
    accent: { bg: "bg-blue-50", icon: "#185FA5" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#185FA5" strokeWidth="1.5" />
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 6l-4 12" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "Next.js",          icon: <DevIcon name="nextjs" fallback="Next.js" /> },
      { name: "TypeScript",       icon: <DevIcon name="typescript" fallback="TypeScript" /> },
      { name: "Tailwind CSS",     icon: <DevIcon name="tailwindcss" fallback="Tailwind CSS" /> },
      { name: "React",            icon: <DevIcon name="react" fallback="React" /> },
      { name: "JavaScript ES6+",  icon: <DevIcon name="javascript" fallback="JavaScript" /> },
    ],
  },
  {
    title: "Backend",
    subtitle: "3 tecnologias",
    accent: { bg: "bg-emerald-50", icon: "#0F6E56" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
        <path d="M6 9h2M6 12h4M6 15h2" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="12" r="2.5" stroke="#0F6E56" strokeWidth="1.5" />
      </svg>
    ),
    skills: [
      { name: "Node.js",   icon: <DevIcon name="nodejs"   fallback="Node.js" /> },
      { name: "MongoDB",   icon: <DevIcon name="mongodb"  fallback="MongoDB" /> },
      { name: "Postman",   icon: <DevIcon name="postman"  fallback="Postman" /> },
    ],
  },
  {
    title: "Qualidade & Gestão",
    subtitle: "3 tecnologias",
    accent: { bg: "bg-amber-50", icon: "#BA7517" },
    categoryIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      {
        name: "QA / Testes",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#BA7517" strokeWidth="1.5" />
            <path d="M17 17l4 4M8 11h6M11 8v6" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Metodologias Ágeis",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1" stroke="#BA7517" strokeWidth="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1" stroke="#BA7517" strokeWidth="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1" stroke="#BA7517" strokeWidth="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="#BA7517" strokeWidth="1.5" />
          </svg>
        ),
      },
      { name: "Power BI", icon: <DevIcon name="microsoftsqlserver" fallback="Power BI" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      aria-label="Stack técnica"
      className="py-24 px-8 md:px-24 bg-[#0d0d0d]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.title}
            className="border border-gray-800 rounded-2xl bg-[#0a0a0a] hover:border-gray-700 transition-colors"
          >
            {/* Cabeçalho do grupo */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-5 border-b border-gray-800/60">
              <div className={`w-8 h-8 rounded-lg ${group.accent.bg} flex items-center justify-center shrink-0`}>
                {group.categoryIcon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">{group.title}</p>
                <p className="text-[11px] text-gray-600 mt-0.5">{group.subtitle}</p>
              </div>
            </div>

            {/* Lista de skills */}
            <ul className="px-6 py-4 space-y-0 divide-y divide-gray-800/50">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 py-3"
                >
                  <span aria-hidden="true" className="shrink-0">{skill.icon}</span>
                  <span className="text-sm text-gray-400">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}