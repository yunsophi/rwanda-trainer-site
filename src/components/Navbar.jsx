import { useState } from "react";
import TrainerButton from "./TrainerButton";

const links = [
  { href: "#about-afrijwi", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why", label: "Why Become a Trainer" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-earth-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-brand-800">
          <span className="text-xl" aria-hidden="true">🌱</span>
          <span className="text-sm leading-tight sm:text-base">
            Rwanda Farmer Support
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            &amp; Trainer Matching
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-earth-900/80 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <TrainerButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-800 md:hidden"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-earth-50 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-earth-900/80 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <TrainerButton className="mt-1 w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
