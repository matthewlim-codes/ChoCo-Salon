import { Camera, ExternalLink, MapPin } from "lucide-react";

import { businessInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#111111] px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black tracking-[-0.06em]">CHOCO SALON</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-neutral-400">
            <MapPin className="size-4" aria-hidden="true" />
            {businessInfo.address}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.instagram.com/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-white hover:bg-white hover:text-black"
          >
            <Camera className="size-4" aria-hidden="true" />
            Instagram
          </a>
          <a
            href="https://www.yelp.com/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-white hover:bg-white hover:text-black"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            Yelp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 CHOCO SALON. All rights reserved.</p>
        <p>Prices, hours, and service availability are subject to change after consultation.</p>
      </div>
    </footer>
  );
}
