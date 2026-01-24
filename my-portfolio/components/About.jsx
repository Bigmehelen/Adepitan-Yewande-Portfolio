import React from "react";
import Image from "next/image";

const infoList = [
  {
    icon: "/language-outline.png",
    title: "Languages & Frameworks",
    description: "Java, JavaScript, Python, Frameworks like SpringBoot, React, Next.js, Django, Node.js",
  },
  {
    icon: "/school-outline.png",
    title: "Education",
    description: "B.Sc. in Computer Science from the National Open University of Nigeria (NOUN) Lagos, Nigeria",
  },
  {
    icon: "/bag-handle-outline.png",
    title: "Projects",
    description: "Built and deployed more than 3 full-stack applications",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h1 className="text-lg md:text-xl mb-2 text-center font-Ovo">
        Introduction
      </h1>

      <h3 className="font-Ovo text-2xl text-center mb-10">
        About me
      </h3>

      <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-12">
        
        <div className="w-64 sm:w-80 rounded-3xl py-10">
          <Image src="/wande.jpeg" alt="About image" width={400} height={400} className="rounded-3xl w-full h-auto"/>
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-xl font-Ovo">
            I’m a software engineer with a strong interest in building reliable,
            user-focused applications. I enjoy turning complex problems into
            simple, scalable solutions and writing clean, maintainable code.
            I’m always learning, experimenting with new technologies, and
            looking for opportunities to grow as a developer while making a
            meaningful impact.
          </p>

          <ul className="space-y-4 grid grid-cols-2 max-w-2xl">
            {infoList.map((item, index) => (
              <li key={index} className="border-[-0.5px] border-gray-400 py-4 cursor-pointer 
              hover:-translate-y-1 duration-500 hover:light-Hover">
                <Image src={item.icon} alt="" width={24} height={24} className="w-6 mt-3" />
                <h4 className="font-Ovo font-semibold my-4 text-gray-700">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
