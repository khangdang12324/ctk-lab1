const skillGroups = [
  {
    title: "Ngon ngu lap trinh",
    skills: ["JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    title: "Front-end",
    skills: ["React", "Next.js (App Router)", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", ".NET Core Web API", "RESTful API"],
  },
  {
    title: "Co so du lieu & cong cu",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Git/GitHub", "Docker"],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">Ky nang lap trinh</h1>
      <p className="text-gray-600 mb-8">
        Tong hop cac ky nang ve ngon ngu, framework va cong cu toi dang su dung.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="border rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-emerald-50 text-emerald-700 rounded-md px-3 py-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

