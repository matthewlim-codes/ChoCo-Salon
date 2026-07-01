import { Calendar, Clock, MapPin, Phone, Sparkles } from "lucide-react";

import { businessInfo } from "@/lib/site-data";

const bookingWidgetMarkup = `
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body { margin: 0; font-family: Inter, Arial, sans-serif; background: #ffffff; color: #111111; }
        .wrap { padding: 24px; }
        .badge { display: inline-block; border: 1px solid #111111; border-radius: 999px; padding: 8px 12px; font-size: 11px; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; }
        h1 { margin: 18px 0 8px; font-size: 28px; line-height: .95; letter-spacing: -.05em; }
        p { margin: 0; color: #555555; line-height: 1.55; font-size: 14px; }
        .grid { display: grid; gap: 10px; margin-top: 22px; }
        .slot { border: 1px solid #dedede; border-radius: 18px; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; font-weight: 800; }
        .slot span { color: #777777; font-size: 13px; font-weight: 700; }
        button { width: 100%; margin-top: 18px; border: 0; border-radius: 999px; padding: 15px; background: #111111; color: white; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }
      </style>
    </head>
    <body>
      <div class="wrap">
        <span class="badge">Fresha preview</span>
        <h1>Reserve your CHOCO appointment</h1>
        <p>Select a consultation-friendly slot for color, perm, cut, or treatment services.</p>
        <div class="grid">
          <div class="slot">Today <span>12:30 PM</span></div>
          <div class="slot">Tomorrow <span>3:00 PM</span></div>
          <div class="slot">Weekend <span>10:30 AM</span></div>
        </div>
        <button>Continue booking</button>
      </div>
    </body>
  </html>
`;

export function LocationSection() {
  return (
    <section id="contact" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500">
            Cupertino hub
          </p>
          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] text-black sm:text-5xl md:text-6xl">
            Easy booking, bright studio, daily hours.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#111111] text-white shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
            <div className="grid gap-4 p-6 sm:grid-cols-3 lg:p-8">
              <InfoItem icon={Clock} label="Hours" value={businessInfo.hours} />
              <InfoItem icon={MapPin} label="Address" value={businessInfo.address} />
              <InfoItem icon={Phone} label="Call" value={businessInfo.phone} />
            </div>
            <div className="h-[24rem] border-t border-white/10 bg-neutral-900">
              <iframe
                title="CHOCO SALON Cupertino map"
                src="https://www.google.com/maps?q=10879%20N%20Wolfe%20Rd%20Cupertino%20CA&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-black bg-[#fff8e8] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-6 lg:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black">
              <Sparkles className="size-4" aria-hidden="true" />
              Ready to transform your look?
            </div>
            <h3 className="text-3xl font-black leading-none tracking-[-0.06em] text-black sm:text-4xl">
              Book a consultation-first appointment.
            </h3>
            <p className="mt-4 text-sm leading-6 text-neutral-700">
              Share your inspo, hair history, and styling goals. CHOCO SALON will match you with
              the right technique and stylist level.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm shadow-black/5">
              <iframe
                title="CHOCO SALON booking widget preview"
                srcDoc={bookingWidgetMarkup}
                className="h-[25rem] w-full"
              />
            </div>

            <a
              href={businessInfo.bookingUrl}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800"
            >
              <Calendar className="size-4" aria-hidden="true" />
              Open booking page
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
      <Icon className="size-5 text-[#fff4d7]" aria-hidden="true" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-neutral-400">{label}</p>
      <p className="mt-2 text-base font-bold leading-6 text-white">{value}</p>
    </div>
  );
}
