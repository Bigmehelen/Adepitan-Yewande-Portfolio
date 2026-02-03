import React from "react";
import Image from "next/image";

const infoList = [
  {
    icon: "/language-outline.png",
    title: "Stack",
    description: "React, Next.js, SpringBoot, Node.js, Python, Java",
  },
  {
    icon: "/school-outline.png",
    title: "Education",
    description: "B.Sc. Computer Science, NOUN Lagos Nigeria",
  },
  {
    icon: "/bag-handle-outline.png",
    title: "Experience",
    description: "3+ Full-stack application deployments",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 lg:px-[8%] bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 space-y-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
            <Image src="/wande.jpeg" alt="About image" fill className="object-cover transition-all duration-700" />
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Personal Quote</h4>
            <p className="font-serif text-2xl italic text-luxury-black">
              "Design is Simplicity."
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl text-luxury-black tracking-tight">
              About <span className="italic font-normal">Me</span>
            </h2>
            <p className="text-xl text-luxury-gray leading-relaxed max-w-2xl font-medium">
              I’m a software engineer dedicated to creating high-performance digital products. My approach combines technical precision with a refined eye for design, ensuring every pixel and every line of code serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infoList.map((item, index) => (
              <div key={index} className="p-8 border border-luxury-black/5 hover:border-luxury-black/10 hover:bg-luxury-beige/10 transition-all duration-300 rounded-xl space-y-4">
                <div className="w-12 h-12 bg-luxury-black text-white flex items-center justify-center rounded-lg">
                  <Image src={item.icon} alt="" width={24} height={24} className="invert" />
                </div>
                <h3 className="text-2xl text-luxury-black">{item.title}</h3>
                <p className="text-luxury-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
