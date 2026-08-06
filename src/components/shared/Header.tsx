"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      {/* Background Image */}
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033824/WhatsApp_Image_2026-08-06_at_7.10.15_PM_onaxwv.jpg"
          alt="NVV Banner"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Header Content */}
      <div className="absolute inset-0 z-20">
        {/* Top Bar */}
        <div className="border-b border-white/20 sticky top-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
            {/* Social */}
            <div className="flex items-center gap-4">
              <Link href="#">
                <Facebook
                  size={18}
                  className="transition hover:text-yellow-400"
                />
              </Link>

              <Link href="#">
                <Instagram
                  size={18}
                  className="transition hover:text-yellow-400"
                />
              </Link>
            </div>

            <ul className="hidden items-center gap-10 font-semibold uppercase text-white lg:flex">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative transition hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+351 920 222 463</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav>
          <div className="mx-auto flex max-w-7xl items-center justify-between lg:justify-center  px-4 py-5">
            {/* Desktop Menu */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="ml-auto text-white lg:hidden"
              aria-label="Open Menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-screen w-2/3 bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b p-5">
            <h3 className="text-lg font-semibold text-black">Menu</h3>

            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X size={28} className="text-black" />
            </button>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b px-6 py-4 font-medium uppercase text-black transition hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5">
            <Link href="#">
              <Facebook size={22} className="text-black hover:text-blue-600" />
            </Link>

            <Link href="#">
              <Instagram size={22} className="text-black hover:text-pink-600" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 px-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+351 920 222 463</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
