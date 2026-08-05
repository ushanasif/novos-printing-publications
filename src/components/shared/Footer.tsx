import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">NVV</h3>

            <p className="text-sm leading-7 text-gray-300">
              Professional printing solutions for businesses and
              individuals. Quality products, fast delivery, and
              affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-orange-400"
                />
                <p>
                  Novos Suportes Publicitários, Lda
                  <br />
                  Rua do Cabo 31 A - 1250-053
                  <br />
                  Lisbon, Portugal
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-orange-400"
                />
                <span>+351 920 222 463</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-orange-400"
                />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} NVV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}