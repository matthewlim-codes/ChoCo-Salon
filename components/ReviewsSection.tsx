import { CheckCircle2, Quote, Star } from "lucide-react";

import { reviews } from "@/lib/site-data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#f7f2e7] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500">
              Local proof
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] text-black sm:text-5xl md:text-6xl">
              Cupertino clients come for detail.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm shadow-black/5">
            <div className="flex items-center gap-2 text-black">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-black" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-2xl font-black tracking-[-0.05em] text-black">
              4.9 average across local salon reviews
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Loved for consultations, clean silhouettes, and Korean technique fluency.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group flex min-h-80 flex-col rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:scale-[1.02] hover:border-black"
            >
              <Quote className="size-9 text-black" aria-hidden="true" />
              <div className="mt-6 flex items-center gap-1 text-black">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-black" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-7 text-neutral-700">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-7 border-t border-black/10 pt-5">
                <div className="flex items-center gap-2">
                  <p className="font-black tracking-[-0.03em] text-black">{review.name}</p>
                  <CheckCircle2 className="size-4 fill-black text-white" aria-label="Verified review" />
                </div>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-neutral-500">
                  Verified | {review.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
