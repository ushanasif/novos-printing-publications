import {
  Clock3,
  Palette,
  ShieldCheck,
  Package,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Most standard print jobs are proofed, printed and ready within 24 hours.",
    color: "#F7941D",
    number: "01",
  },
  {
    icon: Palette,
    title: "Colour Accuracy",
    description:
      "Professionally calibrated printing for consistent and vibrant results.",
    color: "#3B5BDB",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Every order is checked before delivery to ensure the highest standards.",
    color: "#39B54A",
    number: "03",
  },
  {
    icon: Package,
    title: "Custom Solutions",
    description:
      "From business cards to large-format signage, we print it all.",
    color: "#EC008C",
    number: "04",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-[#F7F3E9] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#A86A17]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#151109] sm:text-5xl md:text-6xl">
            Print With Confidence
          </h2>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div key={reason.title} className="text-center">
                {/* Icon */}
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-md text-white"
                  style={{ backgroundColor: reason.color }}
                >
                  <Icon size={22} />
                </div>

                {/* Number */}
                <p className="mt-6 text-xs font-bold tracking-[0.3em] text-[#151109]/40">
                  {reason.number}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-lg font-bold text-[#151109]">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-[#33302A]/70">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CMYK Strip */}
        <div className="mx-auto mt-20 flex h-2 max-w-md overflow-hidden rounded-full">
          <div className="flex-1 bg-[#00AEEF]" />
          <div className="flex-1 bg-[#EC008C]" />
          <div className="flex-1 bg-[#FFD400]" />
          <div className="flex-1 bg-[#39B54A]" />
          <div className="flex-1 bg-[#F7941D]" />
        </div>
      </div>
    </section>
  );
}