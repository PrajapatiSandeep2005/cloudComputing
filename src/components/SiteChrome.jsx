import { useState } from "react";
import { ArrowRight, Cloud, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/cloudContent";

export function CloudMark({ className = "" }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 ${className}`}
      aria-hidden="true"
    >
      <Cloud size={22} strokeWidth={2.2} />
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Stratus Cloud home"
          onClick={closeMenu}
        >
          <CloudMark />
          <span className="text-lg font-extrabold tracking-tight text-slate-950">
            Stratus<span className="text-indigo-600">Cloud</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-started"
          className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 lg:inline-flex"
        >
          Get started <ArrowRight size={16} />
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Get started <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-3">
          <CloudMark className="h-9 w-9" />
          <span className="font-bold text-white">
            Stratus<span className="text-indigo-300">Cloud</span>
          </span>
        </a>
        <p className="max-w-lg text-sm leading-6 text-slate-400">
          A friendly introduction to cloud computing concepts, service models,
          architecture, and providers.
        </p>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          aria-label="Footer navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} StratusCloud · Cloud concepts made clear
      </div>
    </footer>
  );
}
