
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

import logo from "../../../public/ChatGPT Image Aug 5, 2026, 05_04_36 PM.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Printme", href: "/services" },
  { name: "Pages", href: "/pages" },
  { name: "Shop", href: "/shop" },
  { name: "Bulk Orders", href: "/bulk-orders" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm">
          <p className="hidden lg:block font-medium">
            Novos Suportes Publicitários, Lda
          </p>

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+351 920222 463</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="sm:block">
                info@example.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#fbf9f7] border-b">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-50 w-[180px] lg:h-50 lg:w-[240px]">
              <Image
                src={logo}
                alt="NVV Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 font-semibold uppercase tracking-wide">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Drawer */}
        <div
          ref={drawerRef}
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-5">
            <h3 className="text-lg font-semibold">Menu</h3>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="p-5">
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b pb-3 font-medium uppercase"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              >
                <Instagram size={18} />
              </Link>
            </div>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>0000 - 123 - 456789</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

