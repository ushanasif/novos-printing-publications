"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Shop", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#fd918c] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#">
              <Facebook
                size={24}
                className="transition hover:text-yellow-400"
              />
            </Link>

            <Link href="#">
              <Instagram
                size={24}
                className="transition hover:text-yellow-400"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 font-semibold uppercase lg:flex">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Layout */}
          <div className="flex flex-1 items-center justify-between lg:flex-none">
            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-md sm:text-md md:text-base lg:flex-row lg:items-center lg:gap-4">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+351 920 222 463</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>cupandbox.pt@gmail.com</span>
              </div>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <button
              onClick={() => setOpen(true)}
              className="ml-4 lg:hidden"
              aria-label="Open Menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
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

        {/* Right Side Drawer */}
        <div
          className={`fixed top-0 right-0 z-[1000] h-screen w-72 bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b p-5">
            <h3 className="text-lg font-semibold text-black">Menu</h3>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >
              <X size={24} className="text-black" />
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

          {/* Contact Info */}
          <div className="space-y-4 p-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+351 920 222 463</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>cupandbox.pt@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 px-6">
            <Link href="#">
              <Facebook
                size={22}
                className="text-black hover:text-blue-600"
              />
            </Link>

            <Link href="#">
              <Instagram
                size={22}
                className="text-black hover:text-pink-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}