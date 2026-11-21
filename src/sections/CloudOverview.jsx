import { ArrowDown, ArrowRight, Check, Cloud, ShieldCheck, Sparkles } from "lucide-react";
import { BENEFITS } from "../data/cloudContent";
import {
  CloudInfrastructureIllustration,
  SectionHeading,
} from "../components/CloudPrimitives";
import Reveal from "../components/Reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate scroll-mt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/70 via-white to-white" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
        <Reveal>
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
              <Sparkles size={14} />
              A clearer way to understand the cloud
            </div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Big ideas.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                Built in the cloud.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover how cloud computing brings together servers, storage,
              networking, and software to help people build and deliver digital
              services.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Get started <ArrowRight size={17} />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
              >
                Explore the overview <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {["On-demand resources", "Flexible scale", "Global access"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={16} className="text-emerald-600" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="animate-pulse-soft absolute -left-7 top-10 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />
            <div className="animate-pulse-soft animation-delay-300 absolute -bottom-8 -right-2 h-48 w-48 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-900 shadow-2xl shadow-indigo-200/70">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=90"
                alt="Digital globe representing connected cloud infrastructure around the world"
                className="h-[380px] w-full object-cover sm:h-[480px]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-indigo-950/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:left-7 sm:top-7">
                <span className="animate-status-pulse h-2 w-2 rounded-full bg-emerald-400" />
                Connected infrastructure
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm font-medium text-indigo-200">
                  THE CLOUD, CONNECTED
                </p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      From data center to device
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                      Cloud services connect the infrastructure behind the apps
                      we use every day.
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur sm:flex">
                    <Cloud size={23} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex lg:-left-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={22} />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  Designed for resilience
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  Secure, distributed, dependable
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="scroll-mt-24 border-y border-slate-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <CloudInfrastructureIllustration />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <SectionHeading
              eyebrow="Cloud computing, explained"
              title="What does “the cloud” actually mean?"
              description="It’s a way to access computing resources over the internet instead of owning and operating every physical server yourself."
            />
            <p className="-mt-5 max-w-2xl leading-7 text-slate-600">
              A cloud provider runs data centers filled with physical computers.
              Using virtualization and managed services, those resources can be
              delivered to customers when they need them. Teams can launch an
              application, store files, or analyze data without first building
              their own data center.
            </p>
            <a
              href="#architecture"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-700 transition hover:gap-3"
            >
              See how the pieces fit together <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} className="h-full" delay={index * 80}>
            <article className="h-full rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/40">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Icon size={20} />
              </span>
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
