import SkillsCard from "@/components/SkillsCard";

const skills = ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB"];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        About
      </p>
      <h1 className="mb-4 mt-4 text-3xl font-bold text-slate-950">About Me</h1>
      <p className="text-lg text-gray-700">
        This portfolio shares projects that demonstrate my experience building
        web applications, APIs, and reusable user interfaces.
      </p>
      <SkillsCard skills={skills} />
    </main>
  );
}
