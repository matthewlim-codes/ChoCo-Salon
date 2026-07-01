import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { businessInfo, heroImages } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#fff4d7] blur-3xl" />
      <div className="absolute inset-x-0 top-24 -z-10 h-px bg-black/10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:pb-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-neutral-800 shadow-sm shadow-black/5">
            <Sparkles className="size-4 fill-[#fff4d7] text-black" aria-hidden="true" />
            Cupertino K-Beauty Studio
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.07em] text-[#111111] sm:text-6xl md:text-7xl lg:text-8xl">
            Signature K-Beauty Styling & Precision Cuts.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
            High-shine digital perms, magic straightening, down perms, and custom
            color designed for modern Asian hair trends in a bright Cupertino studio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={businessInfo.bookingUrl}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800"
            >
              Book on Fresha
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:border-black hover:bg-[#fff8e8]"
            >
              Explore Gallery
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-black/10 border-y border-black/10 text-center">
            {[
              ["4.9", "Local rating"],
              ["10+", "Signature services"],
              ["7 days", "Open weekly"],
            ].map(([stat, label]) => (
              <div key={label} className="py-5">
                <p className="text-3xl font-black tracking-[-0.06em] text-black">{stat}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[34rem] lg:min-h-[44rem]">
          <div className="absolute inset-y-8 left-0 right-10 rounded-[2rem] border border-black/10 bg-[#fff8e8] shadow-[0_30px_90px_rgba(0,0,0,0.12)]" />
          <div className="absolute left-2 top-0 h-[62%] w-[68%] overflow-hidden rounded-[2rem] border-[10px] border-white bg-neutral-100 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] sm:left-8">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-0 h-[52%] w-[58%] overflow-hidden rounded-[2rem] border-[10px] border-white bg-neutral-100 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.02]">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              fill
              sizes="(min-width: 1024px) 34vw, 72vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[34%] w-[42%] overflow-hidden rounded-[1.5rem] border-[8px] border-white bg-neutral-100 shadow-2xl shadow-black/15 transition-all duration-300 hover:scale-[1.02] sm:left-12">
            <Image
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              fill
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-6 top-8 rounded-full border border-black bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black shadow-xl shadow-black/10">
            Bright studio energy
          </div>
        </div>
      </div>
    </section>
  );
}
