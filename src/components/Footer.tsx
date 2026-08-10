import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151109] text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Perforated Tear Line */}
        

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 pb-4 pt-4 md:flex-row">
          <div className="flex items-center gap-3">
            {/* Stamp */}
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-[#A8321D]/50 font-mono text-[8px] font-bold text-[#A8321D]">
              CB
            </span>

            <p className="font-mono text-[10px] tracking-wide text-white/80">
              © {new Date().getFullYear()} NVV — All rights reserved.
            </p>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/80">
            Designed &amp; Developed by NVV
          </p>
        </div>
      </div>
    </footer>
  );
}