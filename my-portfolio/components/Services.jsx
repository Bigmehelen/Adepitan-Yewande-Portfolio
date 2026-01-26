import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
  {
    id: "app-dev",
    icon: "/laptop-outline.png",
    title: "Application Development",
    description:
      "Designing, building, and maintaining software applications that solve real problems.",
    link: "#",
  },
  {
    id: "frontend-dev",
    icon: "/code-outline.png",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and user-friendly interfaces for web and mobile applications.",
    link: "#",
  },
  {
    id: "backend-dev",
    icon: "/logo-electron.png",
    title: "Backend Development",
    description:
      "Building secure, scalable server-side systems, including APIs, databases, and business logic.",
    link: "#",
  },
  {
    id: "fullstack-dev",
    icon: "/apps-outline.png",
    title: "Full-Stack Development",
    description:
      "Delivering end-to-end solutions by integrating frontend and backend systems into complete applications.",
    link: "#",
  },
  {
    id: "api-dev",
    icon: "/contract-outline.png",
    title: "API Development",
    description:
      "Designing and integrating APIs that enable communication between systems and services.",
    link: "#",
  },
  {
    id: "database",
    icon: "/cloud-outline.png",
    title: "Database Design & Management",
    description:
      "Structuring and managing data efficiently to ensure performance, reliability, and scalability.",
    link: "#",
  },
  {
    id: "testing",
    icon: "/aperture-outline.png",
    title: "Testing & Quality Assurance",
    description:
      "Writing and implementing tests to ensure software reliability and reduce bugs.",
    link: "#",
  },
  {
    id: "deployment",
    icon: "/logo-github.png",
    title: "Deployment & Version Control",
    description:
      "Deploying applications, managing code versions, and collaborating using modern development workflows.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-11/12 max-w-3xl mx-auto mt-10 pt-20 text-center flex flex-col items-center gap-4"
    >
      <h1 className="text-lg mb-2 font-Ovo">What I Offer</h1>

      <h2 className="font-Ovo text-3xl mb-6">Services</h2>

      <p className="max-w-2xl font-Ovo text-gray-700 leading-relaxed mb-10">
        I build complete web applications, handling both frontend and backend
        development. My services include creating responsive user interfaces,
        developing secure and scalable backend systems, designing APIs, and
        integrating frontend and backend into seamless, high-performing
        applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="
              border border-gray-300 rounded-xl p-6 text-left
              transition-all duration-300
              hover:shadow-lg
              sm:hover:-translate-y-1
            "
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={24}
              height={24}
              className="mb-4"
            />

            <h3 className="font-Ovo font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mb-5">
              {item.description}
            </p>

            <Link
              href={item.link}
              className="text-blue-600 flex items-center gap-2 text-sm hover:underline"
            >
              Learn More
              <Image
                src="/arrow-forward-outline.png"
                alt="Arrow icon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
