import {
  CloudCog,
  ChevronRight,
  Database,
  Globe2,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import {
  ARCHITECTURE_COMPONENTS,
  DEPLOYMENT_MODELS,
  PROVIDERS,
  SERVICE_MODELS,
} from "../data/cloudContent";
import { SectionHeading } from "../components/CloudPrimitives";
import Reveal from "../components/Reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Choose your level of control"
            title="Three ways to use the cloud"
            description="From renting the building blocks to using a finished application, each model shifts who manages the technology."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_MODELS.map((service, index) => (
            <Reveal key={service.tag} className="h-full" delay={index * 100}>
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-extrabold text-indigo-700 shadow">
                    {service.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold leading-5 text-indigo-700">
                    {service.example}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchitectureSection() {
  const requestFlow = [
    { icon: Globe2, label: "User" },
    { icon: Network, label: "Network" },
    { icon: Server, label: "App" },
    { icon: Database, label: "Data" },
  ];

  return (
    <section
      id="architecture"
      className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                Behind every cloud app
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                One platform.
                <br />
                Many connected services.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">
                A typical cloud application combines several services. They work
                together to deliver a complete experience, from a visitor’s
                first request to the data stored securely behind it.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ARCHITECTURE_COMPONENTS.map(({ icon: Icon, label, detail }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon
                      size={19}
                      className="mt-0.5 shrink-0 text-indigo-300"
                    />
                    <span>
                      <span className="block text-sm font-bold">{label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        {detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/10 p-8 sm:p-10">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-indigo-200 backdrop-blur">
                  <CloudCog size={34} />
                </div>
                <p className="mb-7 text-sm font-semibold text-slate-200">
                  A request travels through the stack
                </p>
                <div className="grid w-full max-w-md grid-cols-4 items-center gap-2">
                  {requestFlow.map(({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-slate-900/60 text-indigo-200 sm:h-16 sm:w-16">
                        <Icon size={23} />
                        {index < requestFlow.length - 1 && (
                          <ChevronRight
                            size={16}
                            className="absolute -right-5 text-indigo-300"
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium text-slate-300">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-200">
                  <ShieldCheck size={15} />
                  Security and monitoring across every layer
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function DeploymentSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it is deployed"
            title="Clouds can be set up in different ways"
            description="Organizations choose an environment based on their needs for flexibility, control, and how existing systems connect."
            centered
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {DEPLOYMENT_MODELS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} className="h-full" delay={index * 100}>
              <article className="h-full rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProvidersSection() {
  return (
    <section
      id="providers"
      className="scroll-mt-24 bg-indigo-50/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Explore the ecosystem"
            title="Meet the major cloud providers"
            description="The platforms offer overlapping building blocks, with different tools and strengths. Compare services to find a fit for your workload."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {PROVIDERS.map((provider, index) => (
            <Reveal key={provider.initials} className="h-full" delay={index * 100}>
              <article className="h-full rounded-2xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold ${provider.color}`}
                >
                  {provider.initials}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {provider.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {provider.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Provider names and marks are used for educational identification;
          this guide is independent and not affiliated with these companies.
        </p>
      </div>
    </section>
  );
}
