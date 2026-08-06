// "use client";

// import Image from "next/image";
// import burger from "../../../public/burger.png";
// import mug from "../../../public/mug.png";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden"> 
//       <div className="relative min-h-137.5 md:min-h-175 bg-linear-to-r from-pink-300 via-orange-300 to-pink-400">
//         {/* Decorative Shapes */}
//         <div className="absolute left-4 top-10 h-10 w-10 rotate-45 bg-white/70 md:left-20 md:top-24 md:h-16 md:w-16" />

//         <div className="absolute right-5 top-10 h-8 w-8 rounded-full border-12 border-yellow-400 border-b-transparent border-l-transparent md:right-32 md:top-16 md:h-10 md:w-10 md:border-20" />

//         <div className="absolute left-1/4 top-16 h-8 w-8 rounded-full border-4 border-white border-l-transparent border-b-transparent md:h-12 md:w-12 md:border-8" />

//         <div className="absolute bottom-10 left-1/4 h-8 w-8 rounded-full border-10 border-yellow-400 border-t-transparent border-r-transparent md:h-12 md:w-12 md:border-16" />

//         {/* Left Image */}
//         <div className="absolute -left-7.5 top-10 md:-left-5 md:top-28">
//           <Image
//             src={burger}
//             alt="Printing Product"
//             width={350}
//             height={350}
//             className="w-40 rotate-[-25deg] drop-shadow-2xl sm:w-45 md:w-65 lg:w-92.5"
//           />
//         </div>

//         {/* Right Image */}
//         <div className="absolute bottom-8 -right-6.25 md:bottom-auto md:right-5 md:top-60">
//           <Image
//             src={mug}
//             alt="Printed Mug"
//             width={320}
//             height={320}
//             className="w-37.5 rotate-12 drop-shadow-2xl sm:w-40 md:w-60 lg:w-87.5"
//           />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto flex min-h-137.5 md:min-h-175 items-center justify-center px-4">
//           <div className="max-w-4xl text-center">
//             <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-white sm:text-xs md:mb-6 md:text-sm md:tracking-[4px]">
//               Private & Commercial Projects
//             </p>

//             <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:mb-8 md:text-7xl md:leading-none">
//               Your trusted 
//               <br />
//              Printing partner
//             </h1>

//             <button className="rounded-full bg-white mt-4 px-6 py-3 text-sm font-semibold text-pink-500 transition hover:scale-105 md:px-10 md:py-4 md:text-base lg:mt-8">
//               Let's Talk
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// src/components/home/HeroSection.tsx

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[500px] md:h-[650px]">
//         <Image
//           src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033816/WhatsApp_Image_2026-08-06_at_7.10.17_PM_o3tgvn.jpg"
//           alt="Novos Suportes Publicitários"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto w-full max-w-7xl px-6">
//             <div className="max-w-2xl text-white">
//               <span className="mb-4 inline-block rounded-full border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-400">
//                 Professional Printing Solutions
//               </span>

//               <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
//                 Quality Printing That
//                 <span className="block text-yellow-400">
//                   Makes an Impression
//                 </span>
//               </h1>

//               <p className="mb-8 text-lg text-gray-200 md:text-xl">
//                 Large format printing, banners, signage, promotional materials,
//                 business branding and custom printing solutions for your company.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="/shop"
//                   className="rounded-md bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
//                 >
//                   Explore Products
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="rounded-md border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
//                 >
//                   Get Quote
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Stats */}
//       <div className="bg-black py-8 text-white">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
//           <div>
//             <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
//             <p>Years Experience</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
//             <p>Projects Completed</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
//             <p>Quality Printing</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
//             <p>Customer Support</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }