import { ArrowRight } from "lucide-react";

type Reason = {
  title: string;
  description: string;
  color: string;
};

const reasons: Reason[] = [
  {
    title: "24-Hour Turnaround",
    description: "Standard orders proofed, printed, and packed within a day.",
    color: "#F5A623",
  },
  {
    title: "True-to-Screen Colour",
    description: "Calibrated CMYK presses matched against Pantone proofs.",
    color: "#EC4899",
  },
  {
    title: "Any Size, One Shop",
    description: "Business cards to 3-metre banners, printed under one roof.",
    color: "#3B5BDB",
  },
  {
    title: "Transparent Pricing",
    description: "Flat per-sheet rates — no surprise setup or rush fees.",
    color: "#2FBF71",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="mb-10 ml-10 flex items-center justify-center gap-3">
        <div className="flex gap-1">
          <span className="h-4 w-4 rounded-full bg-[#00AEEF]" />
          <span className="h-4 w-4 rounded-full bg-[#EC008C]" />
          <span className="h-4 w-4 rounded-full bg-[#FFE800]" />
          <span className="h-4 w-4 rounded-full bg-[#151109]" />
        </div>
        <span className="font-mono uppercase tracking-[0.3em] text-[#7A3A12]">
          About Us
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl px-4 gap-16 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        {/* Photo, framed like the door itself */}
        
        <div>
          <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#151109] sm:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#33302A]/75">
            Every job that leaves our door has already passed through the same
            proof sheet you see in our window — calibrated, checked, and signed
            off before it goes to press.
          </p>

          <div className="mt-10 space-y-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-sm shadow-[1px_1px_0_0_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: reason.color }}
                />
                <div>
                  <h3 className="text-lg font-bold text-[#151109]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#33302A]/70">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="group mt-10 flex items-center gap-2 rounded-sm bg-[#151109] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-[3px_3px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5">
            Get a Quote
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
        
        <div className="relative">
          {/* tape corners */}
          <span
            className="absolute -left-3 -top-3 z-10 h-5 w-16 -rotate-[9deg] border border-white/50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.55) 0 2px, rgba(255,255,255,0.3) 2px 5px)",
            }}
          />
          <span
            className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[7deg] border border-white/50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.55) 0 2px, rgba(255,255,255,0.3) 2px 5px)",
            }}
          />

          {/* vertical RGB strip, like the test-chart bars */}
          <div className="absolute -left-5 bottom-6 top-6 hidden w-3 flex-col gap-1 sm:flex">
            <span className="flex-1 rounded-sm bg-[#1FA34C]" />
            <span className="flex-1 rounded-sm bg-[#E31E24]" />
            <span className="flex-1 rounded-sm bg-[#1B4FA0]" />
          </div>

          <div className="overflow-hidden rounded-sm border-4 border-[#D8D4C9] shadow-[8px_8px_0_0_rgba(0,0,0,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033818/WhatsApp_Image_2026-08-06_at_8.17.39_PM_xghgfc.jpg"
              alt="NVV Lda shopfront with printed colour proof in the window"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>

          {/* the real door number, doubling as a caption tag */}
          <span className="absolute -bottom-3 left-6 -rotate-2 rounded-sm bg-[#2FA84B] px-3 py-1 font-mono text-sm font-bold text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]">
            31 A
          </span>
        </div>

        {/* Copy */}
        
      </div>
    </section>
  );
}
