interface SkillsCardProps {
  skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <section className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-6">
      <h2 className="text-2xl font-bold text-slate-950">Technical Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technical skills">
        {skills.map((skill) => (
          <li key={skill} className="bg-blue-100 px-3 py-1 text-sm text-blue-900">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
