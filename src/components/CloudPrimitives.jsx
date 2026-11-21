import {
  CloudCog,
  Database,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function CloudInfrastructureIllustration() {
  return (
    <div
      role="img"
      aria-label="Cloud services connecting applications, networks, and data"
      className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-50 via-white to-violet-100 p-8"
    >
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/80" />
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-100/70" />
      <div className="absolute inset-8 rounded-full border border-indigo-200/50" />
      <div className="absolute inset-16 rounded-full border border-indigo-200/40" />
      <div className="animate-float relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white bg-white text-indigo-600 shadow-xl shadow-indigo-200/70">
        <CloudCog size={54} strokeWidth={1.4} />
      </div>
      <span className="animate-float-delayed absolute left-[17%] top-[22%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-indigo-600 shadow-lg">
        <Server size={21} />
      </span>
      <span className="animate-float absolute right-[17%] top-[26%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-violet-600 shadow-lg">
        <Network size={21} />
      </span>
      <span className="animate-float-delayed absolute bottom-[18%] left-[24%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-sky-600 shadow-lg">
        <Database size={21} />
      </span>
      <span className="animate-float absolute bottom-[19%] right-[22%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-emerald-600 shadow-lg">
        <ShieldCheck size={21} />
      </span>
      <div className="absolute bottom-5 left-5 z-20 rounded-xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          A simple definition
        </p>
        <p className="mt-1 text-sm font-bold text-slate-900">
          Computing, delivered as a service
        </p>
      </div>
    </div>
  );
}
