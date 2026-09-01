import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Agile Project Manager API",
    description:
      "A backend API for managing agile projects, sprints, work items, comments, and user access through GitHub OAuth.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Passport",
      "Swagger",
    ],
    link: "https://github.com/dylancleghorn/cse341-final-project",
  },
  {
    title: "Ward Activity Board",
    description:
      "A web application and API for planning activities, managing participation, and controlling access with GitHub OAuth.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Passport",
      "Swagger",
    ],
    link: "https://github.com/dylancleghorn/cse341-project2",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          WDD 430 Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Building practical web experiences with Next.js.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          This portfolio collects course projects, experiments, and notes that
          show progress through modern frontend development.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
