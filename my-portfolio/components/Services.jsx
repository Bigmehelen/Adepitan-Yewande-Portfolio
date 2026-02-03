import React from "react";
import Image from "next/image";

const serviceData = [
  {
    id: "01",
    title: "Web Architecture",
    description: "Designing scalable, high-performance infrastructures and robust backend systems for modern applications.",
  },
  {
    id: "02",
    title: "Interface Design",
    description: "Creating intuitive, accessible, and visually striking user interfaces that elevate the human experience.",
  },
  {
    id: "03",
    title: "Full-Stack Engineering",
    description: "Seamlessly integrating frontend and backend technologies to deliver complete, production-ready digital products.",
  },
  {
    id: "04",
    title: "API Development",
    description: "Building secure, well-documented RESTful and GraphQL APIs to power cross-platform communications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-32 px-6 lg:px-[8%] bg-luxury-white">
      <div className="max-w-360 mx-auto space-y-24">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-luxury-black/10 pb-16">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Capabilities</h4>
            <h2 className="text-6xl md:text-8xl text-luxury-black tracking-tighter">
              What I <span className="italic font-normal">Offer</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-luxury-gray leading-relaxed font-medium">
              Merging technical excellence with aesthetic precision to build digital solutions that transcend standard expectations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-luxury-black/10">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="bg-luxury-white p-10 space-y-12 h-full flex flex-col justify-between hover:bg-luxury-black hover:text-white transition-all duration-500 group"
            >
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gray group-hover:text-luxury-beige transition-colors">
                  {item.id}
                </span>
                <h3 className="text-3xl font-serif leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-luxury-gray text-sm leading-relaxed group-hover:text-luxury-beige/80 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
