import React from "react";
import Image from "next/image";

const portfolioData = [
  {
    title: "Smart Park",
    bgImage: "/park.jpg",
    description: "Intelligent Parking Management System",
    category: "Architecture",
    link: "#",
  },
  {
    bgImage: "/unspla.jpg",
    description: "Curated Digital Art Exhibition",
    link: "#",    
  },
  {
    title: "Link Shortener",
    bgImage: "/shortner.avif",
    description: "High-performance URL infrastructure",
    category: "Engineering",
    link: "#",
  },
];

const Project = () => {
  return (
    <section id="project" className="w-full py-32 px-6 lg:px-[8%] bg-white">
      <div className="max-w-360 mx-auto space-y-24">

        <div className="space-y-6 max-w-2xl">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Selected Works</h4>
          <h2 className="text-6xl md:text-8xl text-luxury-black tracking-tighter">
            Featured <span className="italic font-normal">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${index === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-luxury-black/5">
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/20 transition-all duration-500" />

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white tracking-widest border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-luxury-black group-hover:italic transition-all">
                    {item.title}
                  </h3>
                  <p className="text-luxury-gray text-sm font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2">
                  <div className="w-10 h-10 border border-luxury-black/10 rounded-full flex items-center justify-center group-hover:bg-luxury-black transition-all">
                    <Image
                      src="/arrow-forward-outline.png"
                      alt=""
                      width={16}
                      height={16}
                      className="group-hover:invert transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-20">
          <button className="px-12 py-4 border border-luxury-black text-luxury-black font-bold uppercase tracking-widest text-xs hover:bg-luxury-black hover:text-white transition-all duration-300">
            Explore All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Project;
