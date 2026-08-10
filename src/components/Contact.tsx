import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Line */}
        <div className="h-px bg-black/15" />

        <div className="grid gap-16 py-16 lg:grid-cols-[1fr_0.9fr]">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-black/50">
              Novos Suportes Publicitários
            </p>

            <h2 className="mt-6 text-6xl font-black uppercase leading-none tracking-tight text-[#151109] lg:text-8xl">
              Contact
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-relaxed text-black/70">
              From business cards and packaging to large-format signage,
              we're ready to bring your next project to life.
            </p>

            <div className="mt-16 space-y-10">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-black/40">
                  Address
                </p>

                <p className="text-2xl font-semibold text-[#151109]">
                  Rua do Cabo 31 A
                </p>

                <p className="text-lg text-black/60">
                  1250-053 Lisbon, Portugal
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-black/40">
                  Phone
                </p>

                <a
                  href="tel:+351920222463"
                  className="text-2xl font-semibold transition hover:text-[#EC008C]"
                >
                  +351 920 222 463
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-black/40">
                  Email
                </p>

                <a
                  href="mailto:cupandbox.pt@gmail.com"
                  className="text-2xl font-semibold transition hover:text-[#00AEEF]"
                >
                  cupandbox.pt@gmail.com
                </a>
              </div>
            </div>

            {/* Print Registration Marks */}
            <div className="mt-16 flex items-center gap-8">
              <span className="font-black text-cyan-500">C</span>
              <span className="font-black text-pink-500">M</span>
              <span className="font-black text-yellow-500">Y</span>
              <span className="font-black text-black">K</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Print Sheet Frame */}
            <div className="absolute -left-4 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-black/10" />

            <div className="overflow-hidden border-[12px] border-white bg-white shadow-[20px_20px_0px_rgba(0,0,0,0.08)]">
              <iframe
                src="https://www.google.com/maps?q=Rua%20do%20Cabo%2031%20A%20Lisbon%20Portugal&output=embed"
                className="h-[600px] w-full"
                loading="lazy"
              />
            </div>

            {/* Color Bars */}
            <div className="mt-6 flex h-4 overflow-hidden">
              <div className="flex-1 bg-cyan-500" />
              <div className="flex-1 bg-pink-500" />
              <div className="flex-1 bg-yellow-400" />
              <div className="flex-1 bg-green-500" />
              <div className="flex-1 bg-orange-500" />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-black/50">
              Visit Our Workshop
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="h-px bg-black/15" />
      </div>
    </section>
  );
}