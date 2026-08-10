"use client";

import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1786037761/059a234f-2313-4c20-a47b-39f833dc94ee-removebg-preview_1_rdxjpt.png",
    title: "Food Box",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785954712/3f1b7549-821f-4d75-ad7d-de95e10a574f-removebg-preview_q9w6pe.png",
    title: "Paper Cup",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785954091/Paper-Bags-with-Printed-Logo_s4pjjo.jpg",
    title: "Paper Bags",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953388/accd6080-6b70-4f03-b848-a18d65fa9851_zhaikc.jpg",
    title: "Stamps",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1785953387/95ab9fdf-f78b-411a-b5fe-16dfa885860d_wxr4d7.jpg",
    title: "Bags",
  },
  {
    src: "https://res.cloudinary.com/dvzxjqtub/image/upload/v1786040502/images_bdmah4.jpg",
    title: "Business Card",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A86A17]">
            Our Work
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase text-[#151109] md:text-6xl">
            Print Showcase
          </h2>

          <p className="mt-5 max-w-2xl text-[#33302A]/75">
            Packaging, signage, promotional products, and commercial printing
            solutions produced in our Lisbon workshop.
          </p>

          <div className="mt-6 flex h-2 w-48 overflow-hidden rounded-full">
            <div className="flex-1 bg-[#00AEEF]" />
            <div className="flex-1 bg-[#EC008C]" />
            <div className="flex-1 bg-[#FFD400]" />
            <div className="flex-1 bg-[#39B54A]" />
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-6">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dvzxjqtub/image/upload/v1786033818/WhatsApp_Image_2026-08-06_at_8.17.39_PM_xghgfc.jpg"
              alt="Featured Work"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.title}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#151109]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
