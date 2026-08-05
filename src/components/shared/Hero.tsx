"use client";

import Image from "next/image";

import burger from "../../../public/burger.png";
import mug from "../../../public/mug.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[550px] md:min-h-[700px] bg-gradient-to-r from-pink-200 via-orange-200 to-pink-400">
        {/* Decorative Shapes */}
        <div className="absolute left-4 top-10 h-10 w-10 rotate-45 bg-white/70 md:left-20 md:top-24 md:h-16 md:w-16" />

        <div className="absolute right-5 top-10 h-8 w-8 rounded-full border-[12px] border-yellow-400 border-b-transparent border-l-transparent md:right-32 md:top-16 md:h-10 md:w-10 md:border-[20px]" />

        <div className="absolute left-1/4 top-16 h-8 w-8 rounded-full border-4 border-white border-l-transparent border-b-transparent md:h-12 md:w-12 md:border-8" />

        <div className="absolute bottom-10 left-1/4 h-8 w-8 rounded-full border-[10px] border-yellow-400 border-t-transparent border-r-transparent md:h-12 md:w-12 md:border-[16px]" />

        {/* Left Image */}
        <div className="absolute left-[-30px] top-10 md:left-[-20px] md:top-28">
          <Image
            src={burger}
            alt="Printing Product"
            width={350}
            height={350}
            className="w-[160px] rotate-[-25deg] drop-shadow-2xl sm:w-[180px] md:w-[260px] lg:w-[370px]"
          />
        </div>

        {/* Right Image */}
        <div className="absolute bottom-8 right-[-25px] md:bottom-auto md:right-5 md:top-60">
          <Image
            src={mug}
            alt="Printed Mug"
            width={320}
            height={320}
            className="w-[150px] rotate-12 drop-shadow-2xl sm:w-[160px] md:w-[240px] lg:w-[350px]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto flex min-h-[550px] md:min-h-[700px] items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-white sm:text-xs md:mb-6 md:text-sm md:tracking-[4px]">
              Private & Commercial Projects
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:mb-8 md:text-7xl md:leading-none">
              Your trusted 
              <br />
             Printing partner
            </h1>

            <button className="rounded-full bg-white mt-4 px-6 py-3 text-sm font-semibold text-pink-500 transition hover:scale-105 md:px-10 md:py-4 md:text-base lg:mt-8">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}