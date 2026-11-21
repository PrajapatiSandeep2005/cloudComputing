import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Layers3,
  Sparkles,
} from "lucide-react";
import {
  CLOUD_GLOSSARY,
  FAQ_ITEMS,
  STARTER_STEPS,
} from "../data/cloudContent";
import {
  CloudCostEstimator,
  CloudQuiz,
  CloudSecurityChecklist,
} from "../components/CloudTools";
import { SectionHeading } from "../components/CloudPrimitives";
import Reveal from "../components/Reveal";

export function InteractiveToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive cloud tools"
            title="Plan smarter and build safer"
            description="Experiment with a sample cloud bill and check off practical security measures before you launch."
          />
        </Reveal>
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <CloudCostEstimator />
          </Reveal>
          <Reveal delay={120}>
            <CloudSecurityChecklist />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function KnowledgeCheckSection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
              Make it stick
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How much do you know about the cloud?
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-300">
              Take a quick knowledge check on service models, storage, and
              security. Every answer comes with an explanation.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-400/15 text-indigo-200">
                <Sparkles size={18} />
              </span>
              3 questions · No sign-up needed
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <CloudQuiz />
        </Reveal>
      </div>
    </section>
  );
}

export function GettingStartedSection() {
  return (
    <section
      id="get-started"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-indigo-700 to-violet-800 p-8 text-white sm:p-12 lg:p-14">
                <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[36px] border-white/10" />
                <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Layers3 size={24} />
                </span>
                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-indigo-100">
                  Your cloud learning path
                </p>
                <h2 className="relative mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Ready to take your first step?
                </h2>
                <p className="relative mt-4 max-w-md leading-7 text-indigo-100">
                  Start with the fundamentals, then put them to work in a small
                  project. Use this checklist as your roadmap.
                </p>
                <a
                  href="#services"
                  className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  Review cloud services <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="space-y-7">
                  {STARTER_STEPS.map((step, index) => (
                    <Reveal key={step.number} delay={index * 80}>
                      <article className="flex gap-4 sm:gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-400/10 text-xs font-bold text-indigo-200">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-bold text-white">{step.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {step.text}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Keep exploring"
            title="Cloud computing, made clearer"
            description="Quick answers to common cloud questions, plus a small glossary for new terminology."
          />
        </Reveal>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            {FAQ_ITEMS.map(({ question, answer }, index) => (
              <Reveal key={question} delay={index * 70}>
                <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
                    {question}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-indigo-600 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
                    {answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <aside className="rounded-3xl bg-indigo-950 p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                  <BookOpen size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                    Quick reference
                  </p>
                  <h3 className="mt-1 text-lg font-bold">Cloud glossary</h3>
                </div>
              </div>
              <dl className="mt-6 space-y-5">
                {CLOUD_GLOSSARY.map(({ term, definition }) => (
                  <div
                    key={term}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="font-semibold text-white">{term}</dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-300">
                      {definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
