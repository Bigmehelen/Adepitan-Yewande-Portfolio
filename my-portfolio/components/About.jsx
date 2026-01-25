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
    <div id="about" className="w-11/12 max-w-3xl mx-auto pt-20 mt-10 text-center flex flex-col items-center gap-4"
>
      <h1 className="font-Ovo text-xl text-center mb-5"> Introduction </h1>
      <h3 className="font-Ovo text-2xl text-center mb-5"> About me </h3>

      <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-12">
        
        <div className="w-64 sm:w-80 rounded-3xl py-10 flex-1">
          <Image src="/wande.jpeg" alt="About image" width={400} height={400} className="rounded-3xl w-full h-auto"/>
        </div>

        <div className="flex-1">
          <p className="mb-6 max-w-lg font-Ovo">
            I’m a software engineer with a strong interest in building reliable,
            user-focused applications. I enjoy turning complex problems into
            simple, scalable solutions and writing clean, maintainable code.
            I’m always learning, experimenting with new technologies, and
            looking for opportunities to grow as a developer while making a
            meaningful impact.
          </p>

          <ul className="space-y-4 grid grid-cols-2 max-w-xl">
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
