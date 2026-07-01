import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { galleryImages } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500">
              K-style gallery
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-0.06em] text-black sm:text-5xl md:text-6xl">
              Modern Asian hair trends, styled for everyday movement.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:translate-x-1"
          >
            Plan your look
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <article
              key={image.title}
              className={`group relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-black/10 bg-neutral-100 shadow-sm shadow-black/5 transition-all duration-300 hover:scale-[1.02] ${
                index === 1 || index === 6 ? "lg:row-span-2 lg:min-h-[45rem]" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] backdrop-blur">
                  {image.tag}
                </p>
                <h3 className="text-2xl font-black tracking-[-0.05em]">{image.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
