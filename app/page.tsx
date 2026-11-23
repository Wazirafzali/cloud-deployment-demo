const metrics = [
  { label: "Framework", value: "Next.js 16", detail: "React Framework" },
  { label: "Container", value: "Docker", detail: "Containerized Application" },
  { label: "Environment", value: "Local", detail: "Development Environment" },
  { label: "Version", value: "1.0.0", detail: "Demo Release" },
];

const pipeline = [
  { step: "01", title: "Development", description: "Write application code" },
  { step: "02", title: "GitHub", description: "Store and manage source code" },
  {
    step: "03",
    title: "Build",
    description: "Prepare application for deployment",
  },
  {
    step: "04",
    title: "Vercel",
    description: "Deploy to cloud infrastructure",
  },
];

const technologies = [
  { name: "Next.js", role: "Frontend Framework" },
  { name: "Docker", role: "Containerization" },
  { name: "GitHub", role: "Version Control" },
  { name: "Vercel", role: "Cloud Hosting" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {/* Navigation */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold">
              C
            </div>
            <div>
              <h1 className="text-xl font-bold">CloudDeploy</h1>
              <p className="text-xs text-slate-400">
                Application Deployment Dashboard
              </p>
            </div>
          </div>
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300">
            DEMO ENVIRONMENT
          </span>
        </header>

        {/* Hero */}
        <section className="py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Cloud Computing Project
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Cloud-Based Web Application
            <span className="block text-blue-400">Deployment & Management</span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-400 leading-7">
            A university demonstration of modern application deployment,
            containerization, version control, and cloud hosting.
          </p>
        </section>

        {/* Metrics */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-slate-400">{metric.label}</p>
              <h3 className="mt-3 text-2xl font-bold">{metric.value}</h3>
              <p className="mt-2 text-xs text-slate-500">{metric.detail}</p>
            </div>
          ))}
        </section>

        {/* Deployment Pipeline */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Deployment Pipeline</h3>
            <p className="mt-2 text-sm text-slate-400">
              Planned workflow from development to cloud deployment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {pipeline.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-700 bg-slate-800/60 p-5"
              >
                <span className="text-sm font-bold text-blue-400">
                  STEP {item.step}
                </span>
                <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">Technology Stack</h3>
            <p className="mt-2 text-sm text-slate-400">
              Tools used in this deployment demonstration.
            </p>

            <div className="mt-6 space-y-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between gap-3 rounded-xl bg-slate-800 p-4"
                >
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-right text-xs text-slate-400">
                    {tech.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">Deployment Information</h3>
            <p className="mt-2 text-sm text-slate-400">
              Current project demonstration details.
            </p>

            <dl className="mt-6 space-y-5">
              <div className="flex justify-between gap-4 border-b border-slate-800 pb-4">
                <dt className="text-slate-400">Project</dt>
                <dd className="text-right font-medium">
                  cloud-deployment-demo
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-800 pb-4">
                <dt className="text-slate-400">Local Port</dt>
                <dd className="font-medium">3001</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-800 pb-4">
                <dt className="text-slate-400">Container Port</dt>
                <dd className="font-medium">3000</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Cloud Deployment</dt>
                <dd className="font-medium text-amber-400">Not yet deployed</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-800 py-7 text-center text-sm text-slate-500">
          CloudDeploy — Cloud Computing University Project
        </footer>
      </div>
    </main>
  );
}
