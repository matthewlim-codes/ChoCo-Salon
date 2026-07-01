"use client";

import { useMemo, useState } from "react";
import { Clock, Palette, Scissors, Sparkles } from "lucide-react";

import { serviceCategories, type ServiceCategory } from "@/lib/site-data";

const categoryIcons: Record<ServiceCategory["id"], typeof Sparkles> = {
  perms: Sparkles,
  color: Palette,
  cut: Scissors,
};

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceCategory["id"]>("perms");

  const activeCategory = useMemo(
    () => serviceCategories.find((category) => category.id === activeId) ?? serviceCategories[0],
    [activeId],
  );

  return (
    <section id="services" className="bg-[#111111] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#fff4d7]">
              Specialized menu
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-5xl md:text-6xl">
              Built for K-style precision.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-neutral-300 lg:ml-auto">
            Choose focused services by technique. Each appointment starts with a
            consultation around hair history, length, density, target shape, and maintenance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[22rem_1fr]">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {serviceCategories.map((category) => {
              const Icon = categoryIcons[category.id];
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`group rounded-[1.5rem] border p-5 text-left transition-all duration-300 hover:scale-[1.02] ${
                    isActive
                      ? "border-[#fff4d7] bg-[#fff4d7] text-black shadow-[0_20px_70px_rgba(255,244,215,0.22)]"
                      : "border-white/15 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]"
                  }`}
                >
                  <span
                    className={`mb-5 inline-flex size-11 items-center justify-center rounded-full border ${
                      isActive ? "border-black/15 bg-white" : "border-white/15 bg-black"
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="block text-lg font-black tracking-[-0.03em]">
                    {category.label}
                  </span>
                  <span
                    className={`mt-2 block text-sm leading-6 ${
                      isActive ? "text-neutral-700" : "text-neutral-400"
                    }`}
                  >
                    {category.eyebrow}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white p-4 text-black shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
            <div className="mb-7 flex flex-col gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                  {activeCategory.eyebrow}
                </p>
                <h3 className="mt-2 text-3xl font-black tracking-[-0.06em] sm:text-4xl">
                  {activeCategory.label}
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-600 sm:text-right">
                {activeCategory.description}
              </p>
            </div>

            <div className="grid gap-3">
              {activeCategory.services.map((service) => (
                <article
                  key={service.name}
                  className="group grid gap-4 rounded-[1.35rem] border border-black/10 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:border-black hover:bg-[#fff8e8] sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-black transition-all duration-300 group-hover:w-12" />
                      <h4 className="text-xl font-black tracking-[-0.04em]">{service.name}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{service.detail}</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 sm:min-w-56 sm:justify-end">
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-neutral-700">
                      <Clock className="size-4" aria-hidden="true" />
                      {service.duration}
                    </span>
                    <span className="text-lg font-black tracking-[-0.04em]">{service.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-black/10 bg-neutral-950 px-5 py-4 text-sm leading-6 text-neutral-200">
              <span className="font-black text-white">Note:</span> Prices may vary based on hair
              length, density, chemical history, and stylist rank. Final quote is confirmed during
              consultation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
