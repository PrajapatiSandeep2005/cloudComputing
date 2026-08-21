import { useState } from "react";

import {
  Cloud,
  DollarSign,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Server,
  Settings2,
  LayoutGrid,
  Building2,
  Link2,
  Menu,
  X,
  Database,
  Cpu,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = ["Home", "Services", "Providers", "About"];

const FEATURES = [
  {
    icon: DollarSign,
    title: "Cost effective",
    text: "Pay only for the compute and storage you actually use, with no upfront hardware spend.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    text: "Encryption, access controls, and monitoring are built into every layer of the platform.",
  },
  {
    icon: Globe2,
    title: "Global access",
    text: "Reach your applications and data from anywhere with an internet connection.",
  },
  {
    icon: TrendingUp,
    title: "Scales with you",
    text: "Add or release resources on demand as traffic and workloads change.",
  },
];

const SERVICE_MODELS = [
  {
    icon: Server,
    tag: "IaaS",
    name: "Infrastructure as a Service",
    text: "Rent virtualized servers, storage, and networking, and manage the OS and apps yourself.",
  },
  {
    icon: Settings2,
    tag: "PaaS",
    name: "Platform as a Service",
    text: "Build and deploy applications on a managed platform without worrying about the servers underneath.",
  },
  {
    icon: LayoutGrid,
    tag: "SaaS",
    name: "Software as a Service",
    text: "Use ready-made applications over the internet, with the provider handling maintenance and updates.",
  },
];

const PROVIDERS = [
  {
    name: "Amazon Web Services",
    tag: "AWS",
    color: "amber",
    text: "The largest cloud platform, spanning compute, storage, databases, and hundreds of other services.",
  },
  {
    name: "Microsoft Azure",
    tag: "Azure",
    color: "sky",
    text: "Deep integration with enterprise tools, plus infrastructure, AI, and developer services.",
  },
  {
    name: "Google Cloud",
    tag: "GCP",
    color: "emerald",
    text: "Strong in data analytics, machine learning, and Kubernetes-native application hosting.",
  },
];

const DEPLOYMENTS = [
  {
    icon: Globe2,
    name: "Public cloud",
    text: "Shared infrastructure delivered over the internet by a third-party provider.",
  },
  {
    icon: Building2,
    name: "Private cloud",
    text: "Dedicated infrastructure reserved for a single organization's exclusive use.",
  },
  {
    icon: Link2,
    name: "Hybrid cloud",
    text: "A mix of public and private environments that work together as one system.",
  },
];

const STATS = [
  {
    value: "24/7",
    label: "Availability",
  },
  {
    value: "∞",
    label: "Scalability",
  },
  {
    value: "150+",
    label: "Regions served",
  },
];

const tagColor = {
  amber: "bg-amber-50 text-amber-600",
  sky: "bg-sky-50 text-sky-600",
  emerald: "bg-emerald-50 text-emerald-600",
};

/* ---------------------------------------------------
   Cloud Logo
--------------------------------------------------- */

function CloudMark({ className }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 45a15 15 0 0 1 0-30 20 20 0 0 1 38-6 15 15 0 0 1 12 27 10 10 0 0 1-3 9H30a15 15 0 0 1-5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------------------------------------------------
   Main Component
--------------------------------------------------- */

export default function CloudLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="flex items-center gap-2.5"
            >
              <CloudMark className="w-8 h-8 text-indigo-500" />

              <span className="font-bold text-xl tracking-tight">
                Stratus
                <span className="text-indigo-500">
                  Cloud
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}

            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-500">

              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-indigo-500 transition-colors"
                >
                  {link}
                </a>
              ))}

            </nav>

            {/* Desktop Button */}

            <button className="hidden md:flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-lg shadow-indigo-200">

              Get started

              <ArrowRight size={16} />

            </button>

            {/* Mobile Menu Button */}

            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* Mobile Navigation */}

          {menuOpen && (
            <div className="md:hidden border-t border-slate-100 py-5">

              <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">

                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-indigo-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}

                <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-medium mt-2">
                  Get started
                </button>

              </nav>

            </div>
          )}

        </div>

      </header>


      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="w-full bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center py-20 lg:py-28">

            {/* Hero Content */}

            <div>

              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-indigo-500 mb-6">
                NEXT GENERATION INFRASTRUCTURE
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-7">

                Build on the{" "}

                <span className="text-indigo-500">
                  cloud
                </span>

                <br />

                not on hardware.

              </h1>

              <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-xl mb-9">

                Cloud computing gives you on-demand access
                to servers, storage, databases and software
                over the internet — so you can build, deploy
                and scale faster.

              </p>

              <div className="flex flex-wrap gap-4">

                <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-200">

                  Explore services

                  <ArrowRight size={17} />

                </button>

                <button className="border border-slate-200 hover:border-indigo-300 hover:text-indigo-500 text-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all">

                  Learn more

                </button>

              </div>

            </div>


            {/* Hero Visual */}

            <div className="relative">

              <div className="relative min-h-[430px] lg:min-h-[500px] bg-indigo-50 rounded-[2rem] overflow-hidden flex items-center justify-center">

                {/* Decorative Circle */}

                <div className="absolute -top-28 -right-20 w-80 h-80 bg-indigo-100 rounded-full" />

                <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/80 rounded-full" />


                {/* Large Cloud */}

                <div className="relative z-10">

                  <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-indigo-100 flex items-center justify-center">

                    <Cloud
                      size={100}
                      strokeWidth={1.5}
                      className="text-indigo-400"
                    />

                  </div>

                </div>


                {/* Compute Card */}

                <div className="absolute left-6 lg:left-10 bottom-24 bg-white rounded-2xl shadow-2xl p-5 lg:p-6 w-60 lg:w-64">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">

                      <Cpu
                        size={24}
                        className="text-indigo-500"
                      />

                    </div>

                    <div>

                      <p className="font-semibold text-base">
                        Compute
                      </p>

                      <p className="text-sm text-emerald-500 mt-0.5">
                        Running
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 h-2 bg-slate-100 rounded-full overflow-hidden">

                    <div className="h-full w-3/4 bg-indigo-500 rounded-full" />

                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    CPU usage
                  </p>

                </div>


                {/* Database Card */}

                <div className="absolute right-5 lg:right-8 bottom-12 bg-white rounded-2xl shadow-2xl p-5 lg:p-6 w-60 lg:w-64">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">

                      <Database
                        size={24}
                        className="text-indigo-500"
                      />

                    </div>

                    <div>

                      <p className="font-semibold text-base">
                        Database
                      </p>

                      <p className="text-sm text-emerald-500 mt-0.5">
                        Connected
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 flex gap-2">

                    <div className="h-2 flex-1 bg-indigo-500 rounded-full" />

                    <div className="h-2 w-10 bg-indigo-500 rounded-full" />

                  </div>

                </div>


                {/* Security Badge */}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-full px-6 lg:px-8 py-3.5 flex items-center gap-3 whitespace-nowrap">

                  <LockKeyhole
                    size={17}
                    className="text-emerald-500"
                  />

                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Cloud infrastructure secure
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section
        id="about"
        className="w-full bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-24">

            {/* Text */}

            <div>

              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 mb-4">
                INTRODUCTION
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                What is cloud computing?
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed mb-5 max-w-xl">

                Cloud computing lets you access computing
                power through the internet instead of relying
                entirely on local machines.

              </p>

              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">

                Teams use cloud platforms to store data, host
                applications, run servers, and analyze
                information at any scale.

              </p>

            </div>


            {/* Visual */}

            <div className="flex justify-center">

              <div className="w-full max-w-md aspect-square rounded-[2rem] bg-slate-50 flex items-center justify-center relative overflow-hidden">

                <div className="absolute w-72 h-72 rounded-full bg-indigo-50 -top-20 -right-20" />

                <Cloud
                  size={170}
                  strokeWidth={1.2}
                  className="text-indigo-200 relative z-10"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURES
      ================================================== */}

      <section
        id="services"
        className="w-full bg-slate-50 py-20 lg:py-24"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {FEATURES.map(
              ({ icon: Icon, title, text }) => (

                <div
                  key={title}
                  className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-indigo-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >

                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">

                    <Icon
                      size={20}
                      className="text-indigo-500"
                    />

                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          SERVICE INTRO
      ================================================== */}

      <section className="w-full bg-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">

          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-100 mb-4">
            OUR TECHNOLOGY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Cloud computing services
          </h2>

          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Explore the core service models behind modern
            cloud platforms.
          </p>

        </div>

      </section>


      {/* ==================================================
          SERVICE MODELS
      ================================================== */}

      <section className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="text-center mb-12">

            <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 mb-4">
              SERVICE MODELS
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Types of cloud services
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {SERVICE_MODELS.map(
              ({ icon: Icon, tag, name, text }) => (

                <div
                  key={tag}
                  className="border border-slate-100 rounded-2xl p-8 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >

                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">

                    <Icon
                      size={21}
                      className="text-indigo-500"
                    />

                  </div>

                  <p className="text-indigo-500 font-bold text-sm mb-2">
                    {tag}
                  </p>

                  <h3 className="text-lg font-semibold mb-3">
                    {name}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          PROVIDERS
      ================================================== */}

      <section
        id="providers"
        className="w-full bg-slate-50 py-20 lg:py-24"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 mb-4">
              POPULAR PLATFORMS
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Major cloud providers
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {PROVIDERS.map(
              ({ name, tag, color, text }) => (

                <div
                  key={tag}
                  className="bg-white rounded-2xl p-8 text-center border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >

                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center font-bold text-lg mb-6 ${tagColor[color]}`}
                  >
                    {tag}
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {name}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          HOW IT WORKS INTRO
      ================================================== */}

      <section className="w-full bg-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How does cloud computing work?
          </h2>

          <p className="text-indigo-100 text-lg">
            Understand how cloud technology changes modern computing.
          </p>

        </div>

      </section>


      {/* ==================================================
          HOW IT WORKS
      ================================================== */}

      <section className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Visual */}

            <div className="flex justify-center">

              <div className="w-full max-w-lg bg-slate-50 rounded-[2rem] p-12 flex items-center justify-center">

                <Cloud
                  size={190}
                  strokeWidth={1.2}
                  className="text-indigo-200"
                />

              </div>

            </div>


            {/* Text */}

            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">

              <p>
                Cloud computing runs on a network of remote
                servers connected over the internet, delivering
                compute power, storage, and software to users
                on demand.
              </p>

              <p>
                Instead of buying and maintaining physical
                hardware, organizations rent the resources
                they need from a cloud provider.
              </p>

              <p>
                This makes it far easier to build applications,
                store data, and scale up or down as requirements
                change.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          DEPLOYMENT MODELS
      ================================================== */}

      <section className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-24">

          <div className="grid md:grid-cols-3 gap-6">

            {DEPLOYMENTS.map(
              ({ icon: Icon, name, text }) => (

                <div
                  key={name}
                  className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-indigo-50 transition-colors"
                >

                  <div className="w-12 h-12 mx-auto rounded-xl bg-white flex items-center justify-center mb-5 border border-slate-100">

                    <Icon
                      size={20}
                      className="text-indigo-500"
                    />

                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {name}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          STATS
      ================================================== */}

      <section className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}

            <div>

              <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 mb-4">
                THE FUTURE
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Cloud computing is everywhere
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Cloud technologies power web apps, mobile
                apps, AI systems, data analytics, and online
                storage across nearly every industry today.
              </p>

            </div>


            {/* Stats */}

            <div className="grid grid-cols-3 gap-4">

              {STATS.map(
                ({ value, label }) => (

                  <div
                    key={label}
                    className="bg-indigo-50 rounded-2xl py-8 px-3 text-center"
                  >

                    <p className="text-3xl lg:text-4xl font-bold text-indigo-500">
                      {value}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-500 mt-2">
                      {label}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="w-full bg-slate-900 text-slate-300">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* Footer Logo */}

            <div className="max-w-sm">

              <div className="flex items-center gap-2.5 mb-4">

                <CloudMark className="w-7 h-7 text-indigo-400" />

                <span className="font-bold text-lg text-white">
                  Stratus
                  <span className="text-indigo-400">
                    Cloud
                  </span>
                </span>

              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Learn the fundamentals of modern cloud
                computing technology and understand how
                today's digital infrastructure works.
              </p>

            </div>


            {/* Footer Links */}

            <div>

              <p className="text-white font-semibold text-sm mb-4">
                Quick links
              </p>

              <ul className="space-y-3 text-sm text-slate-400">

                {NAV_LINKS.map((link) => (

                  <li key={link}>

                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* Footer Information */}

            <div>

              <p className="text-white font-semibold text-sm mb-4">
                Cloud infrastructure
              </p>

              <ul className="space-y-3 text-sm text-slate-400">

                <li className="flex items-center gap-2">
                  <Server size={15} />
                  Infrastructure
                </li>

                <li className="flex items-center gap-2">
                  <Database size={15} />
                  Cloud databases
                </li>

                <li className="flex items-center gap-2">
                  <ShieldCheck size={15} />
                  Security
                </li>

              </ul>

            </div>

          </div>


          {/* Copyright */}

          <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">

            © 2026 StratusCloud. All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}