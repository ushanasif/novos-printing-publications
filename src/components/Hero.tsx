import Image from "next/image";
import { ArrowRight } from "lucide-react";

const RAINBOW_LETTERS: { char: string; color: string }[] = [
  { char: "N", color: "#F5A623" },
  { char: "V", color: "#EC4899" },
  { char: "V", color: "#3B5BDB" },
  { char: "\u00A0", color: "transparent" },
  { char: "L", color: "#2FBF71" },
  { char: "D", color: "#17A2A0" },
  { char: "A", color: "#F5A623" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: "#E4E0D6",
        backgroundImage: `
          repeating-linear-gradient(95deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 1px, transparent 1px, transparent 3px),
          linear-gradient(135deg, #F2EFE6 0%, #DAD5C8 45%, #C3BDAC 100%)
        `,
      }}
    >
      {/* vertical RGB bars, lifted from the test chart on the left of the window */}
      <div className="absolute bottom-8 left-6 top-8 hidden w-10 gap-1 sm:flex">
        <span className="flex-1 rounded-sm bg-[#1FA34C]" />
        <span className="flex-1 rounded-sm bg-[#E31E24]" />
        <span className="flex-1 rounded-sm bg-[#1B4FA0]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:pl-24">
        {/* oval badge, echoing the teal nameplate above your door */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-linear-to-r from-[#0E7C82] to-[#1CA39C] px-4 py-1.5 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/90">
            Novos Suportes Publicitários, Lda
          </span>
        </div>

        {/* storefront photo — static + centered on mobile, floats right from lg up */}
        <div className="relative mx-auto mb-10 w-65 rotate-3 sm:w-75 lg:absolute lg:-right-6 lg:top-0 lg:mx-0 lg:mb-0 lg:w-85 xl:right-1 xl:w-[400px]">
          <div className="overflow-hidden rounded-sm border-4 border-[#F2EFE6] shadow-[10px_10px_0_0_rgba(0,0,0,0.2)]">
            <Image
              src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033824/WhatsApp_Image_2026-08-06_at_7.10.15_PM_onaxwv.jpg"
              alt="NVV Lda shopfront with printed colour proof in the window"
              width={800}
              height={1000}
              priority
              className="h-80 w-full object-cover sm:h-90 lg:h-105 xl:h-125"
            />
          </div>

          {/* tape corner, matching the About section framing */}
          <span
            className="absolute -left-3 -top-3 z-10 h-5 w-16 rotate-[-9deg] border border-white/60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0 2px, rgba(255,255,255,0.35) 2px 5px)",
            }}
          />

          {/* the real door number, tagged onto the photo */}
          <span className="absolute -bottom-3 left-6 -rotate-2 rounded-sm bg-[#2FA84B] px-3 py-1 font-mono text-sm font-bold text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]">
            31 A
          </span>
        </div>

        {/* glossy, extruded shop-sign lettering */}
        <h1 className="flex flex-wrap text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl lg:max-w-lg xl:max-w-xl">
          {RAINBOW_LETTERS.map((l, i) => (
            <span
              key={i}
              style={{
                color: l.color,
                textShadow:
                  l.char === "\u00A0"
                    ? undefined
                    : "1px 1px 0 rgba(0,0,0,0.2), 2px 2px 0 rgba(0,0,0,0.2), 3px 3px 0 rgba(0,0,0,0.2), 4px 5px 8px rgba(0,0,0,0.35)",
              }}
            >
              {l.char}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-[#33302A]/75">
          Full-colour digital printing, signage, and advertising displays —
          proofed and produced in-house, right down to the last swatch.
        </p>

        {/* grayscale swatch row, standing in for a divider */}
        <div className="mt-8 flex h-3 max-w-xs overflow-hidden rounded-sm shadow-inner">
          {["#F5F3EF", "#D9D5CC", "#B8B3A8", "#948E80", "#6B6558", "#403C33"].map(
            (c) => (
              <span key={c} className="flex-1" style={{ backgroundColor: c }} />
            )
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button className="group flex items-center gap-2 rounded-sm bg-[#151109] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-[3px_3px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5">
            Get a Quote
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      {/* horizontal CMYK bars, lifted from the panel bottom-right of the door */}
      <div className="mx-auto mt-16 max-w-6xl px-4 sm:pl-24">
        <div className="max-w-xs overflow-hidden rounded-sm shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]">
          <div className="h-3 bg-[#EC008C]" />
          <div className="h-3 bg-[#00AEEF]" />
          <div className="h-3 bg-[#FFE800]" />
        </div>
      </div>
    </section>
  );
}