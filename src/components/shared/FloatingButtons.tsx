"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/351920222463"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
        >
          <path d="M16.04 3C8.84 3 3 8.75 3 15.84c0 2.48.73 4.89 2.12 6.96L3 29l6.39-2.08a13.2 13.2 0 0 0 6.65 1.8h.01c7.2 0 13.04-5.75 13.04-12.84C29.09 8.75 23.25 3 16.04 3Zm7.63 18.16c-.32.88-1.89 1.68-2.61 1.79-.67.1-1.51.14-2.44-.16-.56-.18-1.27-.42-2.2-.82-3.87-1.66-6.38-5.53-6.57-5.79-.18-.26-1.57-2.04-1.57-3.89 0-1.85.98-2.76 1.33-3.13.35-.36.77-.45 1.02-.45.25 0 .51 0 .73.01.24.01.56-.09.88.68.32.77 1.08 2.65 1.18 2.84.1.19.16.42.03.68-.13.26-.19.42-.39.65-.19.22-.41.5-.58.67-.19.19-.38.4-.16.79.22.39.99 1.61 2.13 2.61 1.46 1.28 2.69 1.67 3.08 1.86.38.19.61.16.83-.1.22-.26.95-1.11 1.2-1.49.26-.39.51-.32.86-.19.35.13 2.22 1.04 2.6 1.23.38.19.64.29.73.45.1.16.1.93-.22 1.81Z" />
        </svg>
      </a>

      {/* Back To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black shadow-xl transition hover:scale-110"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}