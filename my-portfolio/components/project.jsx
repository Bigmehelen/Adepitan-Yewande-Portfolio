import React from "react";
import Image from "next/image";

const portfolioData = [
  {
    title: "Smart Park",
    bgImage: "/park.jpg",
    description: "Smart Parking Lot System",
    link: "#",
  },
  {
    title: " Helen Artwork Gallery",
    bgImage: "/unspla.jpg",
    description: "Online Artwork Website",
    link: "#",
  },
  {
    title: "Url Shortener Service",
    bgImage: "/shortner.avif",
    description: "A URL Shortening App",
    link: "#",
  },
];

const Project = () => {
  return (
    <div id="project"
      className="w-11/12 max-w-5xl mx-auto pt-20 mt-10 text-center flex flex-col items-center gap-4"
    >
      <h1 className="text-2xl mb-10 font-Ovo">My Portfolio</h1>

      <p className="text-lg font-Ovo max-w-2xl mx-auto mt-5 mb-10">
        Welcome to my portfolio! You can explore all my projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="relative bg-cover + bg-center + bg-no-repeat aspect-square rounded-xl overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{ backgroundImage: `url(${item.bgImage})`}}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-lg p-4 flex items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="font-Ovo font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>

              <div className="border border-black rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                <Image
                  src="/arrow-forward-outline.png" width={20}height={20} alt="send-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
