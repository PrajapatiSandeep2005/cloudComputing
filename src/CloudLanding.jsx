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


// ===============================
// NAVIGATION
// ===============================

const NAV_LINKS = [
  "Home",
  "Services",
  "Providers",
  "About",
];


// ===============================
// FEATURES
// ===============================

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


// ===============================
// SERVICE MODELS
// ===============================

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


// ===============================
// CLOUD PROVIDERS
// ===============================

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


// ===============================
// DEPLOYMENT MODELS
// ===============================

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


// ===============================
// STATS
// ===============================

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


// ===============================
// PROVIDER COLORS
// ===============================

const tagColor = {
  amber: "bg-amber-50 text-amber-600",
  sky: "bg-sky-50 text-sky-600",
  emerald: "bg-emerald-50 text-emerald-600",
};


// ===============================
// CLOUD LOGO
// ===============================

function CloudMark({ className }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="none"
    >
      <path
        d="M25 45 a15 15 0 0 1 0-30 a20 20 0 0 1 38-6 a15 15 0 0 1 12 27 a10 10 0 0 1-3 9 H30 a15 15 0 0 1-5 0z"
        fill="currentColor"
      />
    </svg>
  );
}


// ===============================
// MAIN COMPONENT
// ===============================

export default function CloudLanding() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="w-full bg-white font-sans text-slate-800">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}

          <div className="flex items-center gap-2">

            <CloudMark
              className="w-8 h-8 text-indigo-500"
            />

            <span className="font-bold text-xl tracking-tight">

              Stratus
              <span className="text-indigo-500">
                Cloud
              </span>

            </span>

          </div>


          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">

            {NAV_LINKS.map((link) => (

              <a
                key={link}
                href="#"
                className="hover:text-indigo-500 transition-colors"
              >
                {link}
              </a>

            ))}

          </nav>


          {/* Desktop Button */}

          <button
            className="
              hidden md:block
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              text-sm
              font-semibold
              px-6
              py-3
              rounded-xl
              shadow-lg
              shadow-indigo-100
              transition-all
              hover:-translate-y-0.5
            "
          >
            Get started
          </button>


          {/* Mobile Menu */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
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

          <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-sm font-semibold text-slate-600">

            {NAV_LINKS.map((link) => (

              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-500"
              >
                {link}
              </a>

            ))}

          </div>

        )}

      </header>



      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-2
          gap-16
          items-center
          px-8
          pt-24
          pb-28
        "
      >

        {/* LEFT SIDE */}

        <div>

          <p
            className="
              text-sm
              font-bold
              tracking-[0.25em]
              text-indigo-500
              mb-5
            "
          >
            NEXT GENERATION INFRASTRUCTURE
          </p>


          <h1
            className="
              text-6xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              mb-7
            "
          >

            Build on the{" "}

            <span className="text-indigo-500">
              cloud
            </span>

            ,

            <br />

            not on hardware.

          </h1>


          <p
            className="
              text-lg
              text-slate-500
              leading-8
              mb-9
              max-w-xl
            "
          >
            Cloud computing gives you on-demand access to
            servers, storage, databases and software over
            the internet — so you can build, deploy and
            scale faster.
          </p>


          {/* Buttons */}

          <div className="flex gap-4">

            <button
              className="
                flex
                items-center
                gap-2
                bg-indigo-500
                hover:bg-indigo-600
                text-white
                font-semibold
                px-7
                py-4
                rounded-xl
                shadow-lg
                shadow-indigo-100
                transition-all
                hover:-translate-y-1
              "
            >

              Explore services

              <ArrowRight size={18} />

            </button>


            <button
              className="
                border
                border-slate-200
                hover:border-indigo-300
                hover:text-indigo-500
                font-semibold
                px-7
                py-4
                rounded-xl
                transition-all
              "
            >
              Learn more
            </button>

          </div>

        </div>



        {/* =================================================
            HERO VISUAL
        ================================================= */}

        <div
          className="
            relative
            h-[450px]
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-indigo-100
          "
        >

          {/* Decorative circles */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-indigo-200/30
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              h-72
              w-72
              rounded-full
              bg-indigo-100/50
            "
          />


          {/* Main Cloud */}

          <div
            className="
              absolute
              left-1/2
              top-16
              -translate-x-1/2
            "
          >

            <Cloud
              className="
                h-32
                w-32
                text-indigo-400
                fill-indigo-200
              "
            />

          </div>


          {/* COMPUTE CARD */}

          <div
            className="
              absolute
              left-10
              top-44
              w-56
              rounded-2xl
              border
              border-white
              bg-white
              p-5
              shadow-xl
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="rounded-xl bg-indigo-50 p-3">

                <Cpu
                  size={24}
                  className="text-indigo-500"
                />

              </div>

              <div>

                <p className="font-bold text-slate-800">
                  Compute
                </p>

                <p className="text-xs text-emerald-500">
                  Running
                </p>

              </div>

            </div>


            <div className="h-2 rounded-full bg-slate-100">

              <div
                className="
                  h-2
                  w-4/5
                  rounded-full
                  bg-indigo-500
                "
              />

            </div>


            <div className="mt-2 flex justify-between text-xs text-slate-400">

              <span>
                CPU
              </span>

              <span>
                82%
              </span>

            </div>

          </div>



          {/* DATABASE CARD */}

          <div
            className="
              absolute
              right-10
              top-56
              w-56
              rounded-2xl
              border
              border-white
              bg-white
              p-5
              shadow-xl
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="rounded-xl bg-indigo-50 p-3">

                <Database
                  size={24}
                  className="text-indigo-500"
                />

              </div>

              <div>

                <p className="font-bold text-slate-800">
                  Database
                </p>

                <p className="text-xs text-emerald-500">
                  Connected
                </p>

              </div>

            </div>


            <div className="flex gap-1">

              <span className="h-2 flex-1 rounded bg-indigo-200" />

              <span className="h-2 flex-1 rounded bg-indigo-300" />

              <span className="h-2 flex-1 rounded bg-indigo-400" />

              <span className="h-2 flex-1 rounded bg-indigo-500" />

            </div>

          </div>



          {/* SECURITY CARD */}

          <div
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white
              bg-white
              px-6
              py-3
              shadow-lg
            "
          >

            <LockKeyhole
              size={18}
              className="text-emerald-500"
            />

            <span className="text-sm font-semibold text-slate-700">
              Cloud infrastructure secure
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
          WHAT IS CLOUD COMPUTING
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            grid
            grid-cols-2
            gap-20
            items-center
          "
        >

          {/* TEXT */}

          <div>

            <p
              className="
                text-sm
                font-bold
                tracking-[0.25em]
                text-indigo-500
                mb-4
              "
            >
              INTRODUCTION
            </p>


            <h2
              className="
                text-4xl
                font-extrabold
                tracking-tight
                mb-6
              "
            >
              What is cloud computing?
            </h2>


            <p
              className="
                text-lg
                text-slate-500
                leading-8
                mb-5
              "
            >
              Cloud computing lets you access computing
              power through the internet instead of relying
              entirely on local machines.
            </p>


            <p
              className="
                text-lg
                text-slate-500
                leading-8
              "
            >
              Teams use cloud platforms to store data,
              host applications, run servers, and analyze
              information at any scale.
            </p>

          </div>



          {/* CLOUD ARCHITECTURE VISUAL */}

          <div
            className="
              relative
              h-[360px]
              rounded-3xl
              bg-white
              shadow-sm
              border
              border-slate-100
            "
          >

            {/* CLOUD */}

            <div
              className="
                absolute
                left-1/2
                top-8
                -translate-x-1/2
                rounded-2xl
                bg-indigo-50
                p-5
              "
            >

              <Cloud
                size={52}
                className="
                  text-indigo-500
                  fill-indigo-100
                "
              />

            </div>


            {/* CONNECTION LINE */}

            <div
              className="
                absolute
                left-1/2
                top-[105px]
                h-[55px]
                w-px
                bg-indigo-200
              "
            />



            {/* COMPUTE */}

            <div
              className="
                absolute
                left-8
                top-36
                flex
                items-center
                gap-3
                rounded-xl
                bg-white
                border
                border-slate-100
                p-4
                shadow-md
              "
            >

              <div className="rounded-lg bg-indigo-50 p-2">

                <Cpu
                  size={20}
                  className="text-indigo-500"
                />

              </div>

              <span className="font-semibold">
                Compute
              </span>

            </div>



            {/* STORAGE */}

            <div
              className="
                absolute
                right-8
                top-36
                flex
                items-center
                gap-3
                rounded-xl
                bg-white
                border
                border-slate-100
                p-4
                shadow-md
              "
            >

              <div className="rounded-lg bg-indigo-50 p-2">

                <Database
                  size={20}
                  className="text-indigo-500"
                />

              </div>

              <span className="font-semibold">
                Storage
              </span>

            </div>



            {/* HORIZONTAL CONNECTION */}

            <div
              className="
                absolute
                left-[25%]
                top-[160px]
                h-px
                w-[50%]
                bg-indigo-200
              "
            />



            {/* SECURITY */}

            <div
              className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-3
                rounded-xl
                bg-white
                border
                border-slate-100
                p-4
                shadow-md
              "
            >

              <div className="rounded-lg bg-emerald-50 p-2">

                <LockKeyhole
                  size={20}
                  className="text-emerald-500"
                />

              </div>

              <span className="font-semibold">
                Security
              </span>

            </div>


            {/* VERTICAL SECURITY CONNECTION */}

            <div
              className="
                absolute
                left-1/2
                top-[205px]
                h-[65px]
                w-px
                bg-indigo-200
              "
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-white py-24">

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            grid
            grid-cols-4
            gap-6
          "
        >

          {FEATURES.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (

              <div
                key={title}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-7
                  border
                  border-slate-100
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-indigo-50
                    flex
                    items-center
                    justify-center
                    mb-5
                    transition
                    group-hover:bg-indigo-500
                  "
                >

                  <Icon
                    size={21}
                    className="
                      text-indigo-500
                      transition
                      group-hover:text-white
                    "
                  />

                </div>


                <h3 className="font-bold text-lg mb-3">
                  {title}
                </h3>


                <p
                  className="
                    text-sm
                    text-slate-500
                    leading-relaxed
                  "
                >
                  {text}
                </p>

              </div>

            )
          )}

        </div>

      </section>



      {/* =====================================================
          SERVICE INTRO
      ===================================================== */}

      <section
        className="
          bg-indigo-500
          text-white
          py-20
        "
      >

        <div className="max-w-7xl mx-auto px-8 text-center">

          <p
            className="
              text-sm
              font-semibold
              tracking-[0.25em]
              text-indigo-100
              mb-4
            "
          >
            OUR TECHNOLOGY
          </p>


          <h2 className="text-4xl font-extrabold mb-4">
            Cloud computing services
          </h2>


          <p className="text-indigo-100 max-w-xl mx-auto text-lg">

            Explore the core service models behind
            modern cloud platforms.

          </p>

        </div>

      </section>



      {/* =====================================================
          SERVICE MODELS
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <p
          className="
            text-sm
            font-bold
            tracking-[0.25em]
            text-indigo-500
            text-center
            mb-4
          "
        >
          SERVICE MODELS
        </p>


        <h2
          className="
            text-4xl
            font-extrabold
            text-center
            mb-12
          "
        >
          Types of cloud services
        </h2>


        <div className="grid grid-cols-3 gap-8">

          {SERVICE_MODELS.map(
            ({
              icon: Icon,
              tag,
              name,
              text,
            }) => (

              <div
                key={tag}
                className="
                  group
                  border
                  border-slate-100
                  rounded-2xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-indigo-50
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:bg-indigo-500
                    transition
                  "
                >

                  <Icon
                    size={21}
                    className="
                      text-indigo-500
                      group-hover:text-white
                    "
                  />

                </div>


                <p
                  className="
                    text-indigo-500
                    font-bold
                    text-sm
                    mb-2
                  "
                >
                  {tag}
                </p>


                <h3 className="font-bold text-lg mb-3">
                  {name}
                </h3>


                <p
                  className="
                    text-sm
                    text-slate-500
                    leading-relaxed
                  "
                >
                  {text}
                </p>

              </div>

            )
          )}

        </div>

      </section>



      {/* =====================================================
          CLOUD PROVIDERS
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <p
            className="
              text-sm
              font-bold
              tracking-[0.25em]
              text-indigo-500
              text-center
              mb-4
            "
          >
            POPULAR PLATFORMS
          </p>


          <h2
            className="
              text-4xl
              font-extrabold
              text-center
              mb-12
            "
          >
            Major cloud providers
          </h2>


          <div className="grid grid-cols-3 gap-8">

            {PROVIDERS.map(
              ({
                name,
                tag,
                color,
                text,
              }) => (

                <div
                  key={tag}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    p-8
                    text-center
                    border
                    border-slate-100
                    shadow-sm
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                  "
                >

                  <div
                    className={`
                      w-20
                      h-20
                      mx-auto
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-lg
                      mb-5
                      ${tagColor[color]}
                    `}
                  >
                    {tag}
                  </div>


                  <h3 className="font-bold text-lg mb-3">
                    {name}
                  </h3>


                  <p
                    className="
                      text-sm
                      text-slate-500
                      leading-relaxed
                    "
                  >
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>



      {/* =====================================================
          HOW CLOUD COMPUTING WORKS
      ===================================================== */}

      <section
        className="
          bg-indigo-500
          text-white
          py-20
          text-center
        "
      >

        <h2 className="text-4xl font-extrabold mb-3">
          How does cloud computing work?
        </h2>


        <p className="text-indigo-100 text-lg">
          Understand how cloud technology changes
          modern computing.
        </p>

      </section>



      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-8
          py-24
          grid
          grid-cols-2
          gap-20
          items-center
        "
      >

        {/* Visual */}

        <div
          className="
            relative
            h-[380px]
            rounded-3xl
            bg-indigo-50
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              rounded-3xl
              bg-white
              p-8
              shadow-xl
            "
          >

            <Cloud
              size={110}
              className="
                text-indigo-500
                fill-indigo-100
              "
            />

          </div>


          {/* Small floating cards */}

          <div
            className="
              absolute
              top-8
              left-8
              bg-white
              rounded-xl
              px-5
              py-3
              shadow-lg
              font-semibold
            "
          >
            Servers
          </div>


          <div
            className="
              absolute
              top-8
              right-8
              bg-white
              rounded-xl
              px-5
              py-3
              shadow-lg
              font-semibold
            "
          >
            Storage
          </div>


          <div
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              bg-white
              rounded-xl
              px-5
              py-3
              shadow-lg
              font-semibold
            "
          >
            Internet
          </div>

        </div>



        {/* Text */}

        <div className="space-y-5">

          <p
            className="
              text-lg
              text-slate-500
              leading-8
            "
          >
            Cloud computing runs on a network of
            remote servers connected over the internet,
            delivering compute power, storage, and
            software to users on demand.
          </p>


          <p
            className="
              text-lg
              text-slate-500
              leading-8
            "
          >
            Instead of buying and maintaining physical
            hardware, organizations rent the resources
            they need from a cloud provider.
          </p>


          <p
            className="
              text-lg
              text-slate-500
              leading-8
            "
          >
            This makes it far easier to build applications,
            store data, and scale up or down as
            requirements change.
          </p>

        </div>

      </section>



      {/* =====================================================
          DEPLOYMENT MODELS
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <p
          className="
            text-sm
            font-bold
            tracking-[0.25em]
            text-indigo-500
            text-center
            mb-4
          "
        >
          DEPLOYMENT MODELS
        </p>


        <h2
          className="
            text-4xl
            font-extrabold
            text-center
            mb-12
          "
        >
          Choose the right cloud environment
        </h2>


        <div className="grid grid-cols-3 gap-8">

          {DEPLOYMENTS.map(
            ({
              icon: Icon,
              name,
              text,
            }) => (

              <div
                key={name}
                className="
                  group
                  bg-slate-50
                  rounded-2xl
                  p-8
                  text-center
                  hover:bg-indigo-50
                  transition-all
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    mx-auto
                    rounded-xl
                    bg-white
                    flex
                    items-center
                    justify-center
                    mb-5
                    border
                    border-slate-100
                    group-hover:bg-indigo-500
                    transition
                  "
                >

                  <Icon
                    size={21}
                    className="
                      text-indigo-500
                      group-hover:text-white
                    "
                  />

                </div>


                <h3 className="font-bold text-lg mb-3">
                  {name}
                </h3>


                <p
                  className="
                    text-sm
                    text-slate-500
                    leading-relaxed
                  "
                >
                  {text}
                </p>

              </div>

            )
          )}

        </div>

      </section>



      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-8
          pb-28
          grid
          grid-cols-2
          gap-16
          items-center
        "
      >

        <div>

          <p
            className="
              text-sm
              font-bold
              tracking-[0.25em]
              text-indigo-500
              mb-4
            "
          >
            THE FUTURE
          </p>


          <h2
            className="
              text-4xl
              font-extrabold
              mb-5
            "
          >
            Cloud computing is everywhere
          </h2>


          <p
            className="
              text-lg
              text-slate-500
              leading-8
              max-w-xl
            "
          >
            Cloud technologies power web apps,
            mobile apps, AI systems, data analytics,
            and online storage across nearly every
            industry today.
          </p>

        </div>



        {/* Stats */}

        <div className="grid grid-cols-3 gap-5">

          {STATS.map(
            ({
              value,
              label,
            }) => (

              <div
                key={label}
                className="
                  bg-indigo-50
                  rounded-2xl
                  py-8
                  text-center
                "
              >

                <p
                  className="
                    text-3xl
                    font-extrabold
                    text-indigo-500
                  "
                >
                  {value}
                </p>


                <p
                  className="
                    text-sm
                    text-slate-500
                    mt-2
                  "
                >
                  {label}
                </p>

              </div>

            )
          )}

        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          bg-slate-900
          text-slate-300
          py-16
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            flex
            justify-between
            gap-12
          "
        >

          {/* Footer Brand */}

          <div className="max-w-sm">

            <div className="flex items-center gap-2 mb-4">

              <CloudMark
                className="
                  w-7
                  h-7
                  text-indigo-400
                "
              />

              <span className="font-bold text-lg text-white">
                StratusCloud
              </span>

            </div>


            <p
              className="
                text-sm
                text-slate-400
                leading-relaxed
              "
            >
              Learn the fundamentals of modern cloud
              computing technology.
            </p>

          </div>



          {/* Quick Links */}

          <div>

            <p
              className="
                text-white
                font-bold
                text-sm
                mb-4
              "
            >
              Quick links
            </p>


            <ul
              className="
                space-y-3
                text-sm
                text-slate-400
              "
            >

              {NAV_LINKS.map((link) => (

                <li key={link}>

                  <a
                    href="#"
                    className="
                      hover:text-white
                      transition-colors
                    "
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>



        {/* Copyright */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            mt-12
            pt-7
            border-t
            border-slate-800
            text-xs
            text-slate-500
            text-center
          "
        >
          © StratusCloud. All rights reserved.
        </div>

      </footer>

    </div>
  );
}