import React from "react";
import Image from "next/image";

const serviceData = [
  {
    icon: "/laptop-outline.png",
    title: "Application Development",
    description: "Designing, building, and maintaining software applications that solve real problems.",
    link: "#",
  },
  {
    icon: "/code-outline.png",
    title: "Frontend Development",
    description: "Creating responsive, accessible, and user-friendly interfaces for web and mobile applications.",
    link: "#",
  },
  {
    icon: "/logo-electron.png",
    title: "Backend Development",
    description: "Building secure, scalable server-side systems, including APIs, databases, and business logic.",
    link: "#",
  },
  {
    icon: "/apps-outline.png", 
    title: "Full-Stack Development",
    description: "Delivering end-to-end solutions by integrating frontend and backend systems into complete applications.",
    link: "#",
  },
  {
    icon: "/contract-outline.png",
    title: "API Development",
    description: "Designing and integrating APIs that enable communication between systems and services.",
    link: "#",
  },
  {
    icon: "/cloud-outline.png",
    title: "Database Design & Management",
    description:"Structuring and managing data efficiently to ensure performance, reliability, and scalability.",
    link: "#",
  },
  {
    icon: "/aperture-outline.png",
    title: "Testing & Quality Assurance",
    description: "Writing and implementing tests to ensure software reliability and reduce bugs.",
    link: "#",
  },
  {
    icon: "/logo-github.png",
    title: "Deployment & Version Control",
    description: "Deploying applications, managing code versions, and collaborating using modern development workflows.",
    link: "#",
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20 flex flex-col items-center text-center"
    >
      <h1 className="text-lg mb-2 font-Ovo"> What I Offer </h1>

      <h3 className="font-Ovo text-3xl mb-6">Services</h3>

      <p className="max-w-2xl font-Ovo text-gray-700 leading-relaxed mb-10">
        I build complete web applications, handling both frontend and backend
        development. My services include creating responsive user interfaces,
        developing secure and scalable backend systems, designing APIs, and
        integrating frontend and backend into seamless, high-performing
        applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 cursor-pointer 
            hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left"
          >
            <Image
              src={item.icon}
              alt=""
              width={24}
              height={24}
              className="w-6 mb-4"
            />

            <h4 className="font-Ovo font-semibold mb-3 text-gray-800">
              {item.title}
            </h4>

            <p className="text-gray-600 text-sm mb-5">
              {item.description}
            </p>

            <a
              href={item.link}
              className="text-blue-600 flex items-center gap-2 text-sm hover:underline"
            >
              Learn More
              <Image
                src="/arrow-forward-outline.png"
                alt=""
                width={16}
                height={16}
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
