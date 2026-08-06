import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Rua%20do%20Cabo%2031%20A%20Lisbon%20Portugal&output=embed"
              width="100%"
              height="220"
              loading="lazy"
              className="border-0"
            />
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-5 text-xl font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <div>
                  <p className="font-medium">
                    Novos Suportes Publicitários
                  </p>
                  <p className="text-sm text-gray-400">
                    Rua do Cabo 31 A
                    <br />
                    1250-053 Lisbon, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-orange-500"
                />
                <span className="text-gray-300">
                  +351 920 222 463
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-orange-500"
                />
                <span className="text-gray-300">
                  info@example.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} NVV. All rights reserved.
          </p>

          <p>
            Designed & Developed by NVV
          </p>
        </div>
      </div>
    </footer>
  );
}