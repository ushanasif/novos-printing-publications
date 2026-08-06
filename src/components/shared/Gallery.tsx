"use client";

import Image from "next/image";

const galleryItems = [
   {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1786037761/059a234f-2313-4c20-a47b-39f833dc94ee-removebg-preview_1_rdxjpt.png",
    title: "Magazine Printing",
  },
 
  
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785954712/3f1b7549-821f-4d75-ad7d-de95e10a574f-removebg-preview_q9w6pe.png",
    title: "Custom Packaging",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785954091/Paper-Bags-with-Printed-Logo_s4pjjo.jpg",
    title: "Magazine Printing",
  },

{
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953388/accd6080-6b70-4f03-b848-a18d65fa9851_zhaikc.jpg",
    title: "Annual Report",
  },
 
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953387/95ab9fdf-f78b-411a-b5fe-16dfa885860d_wxr4d7.jpg",
    title: "Magazine Printing",
  },
   {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1786040502/images_bdmah4.jpg",
    title: "Magazine Printing",
  },
   {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785954995/3d83e2d9-3d4d-444f-bbdf-46fcd2b48c9e-removebg-preview_hyanem.png",
    title: "Canvas Printing",
  },
 
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953761/df8ad125-4085-403d-8377-9f1c81df0b0b-removebg-preview_pgnl1y.png",
    title: "Magazine Printing",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12 text-center">
          

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-6xl uppercase">
            printing
          </h2>

          <p className="mt-5 text-lg font-semibold uppercase tracking-[4px] text-orange-500">
            Fast, Reliable & Affordable
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden bg-white shadow-sm"
              >
                <div className="relative h-65">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="260px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="group overflow-hidden bg-white shadow-sm">
              <div className="relative h-75 md:h-100">
                <Image
                  src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953387/4e680714-8264-4d0c-ac9f-efa40da1a109_zjj26x.jpg"
                  alt="Design"
                  fill
                  sizes="400px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="group overflow-hidden bg-white shadow-sm">
              <div className="relative h-75 md:h-100">
                <Image
                  src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033818/WhatsApp_Image_2026-08-06_at_8.17.39_PM_xghgfc.jpg"
                  alt="Custom Mug"
                  fill
                  sizes="400px"
                  className="object-center transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}