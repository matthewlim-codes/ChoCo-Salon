import { ArrowRight, CalendarCheck } from "lucide-react";

import { businessInfo, navLinks } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="CHOCO SALON home">
          <span className="flex size-11 items-center justify-center rounded-full border border-black bg-black text-sm font-black tracking-tight text-white transition-all duration-300 group-hover:scale-105">
            CS
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-[-0.05em] text-[#111111] sm:text-lg">
              CHOCO SALON
            </span>
            <span className="mt-1 flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.34em] text-neutral-500">
              Cupertino
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm shadow-black/5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={businessInfo.bookingUrl}
          className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800 sm:px-5"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Book Appointment</span>
          <span className="sm:hidden">Book</span>
        </a>
      </nav>
    </header>
  );
}
