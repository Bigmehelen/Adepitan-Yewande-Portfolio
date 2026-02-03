"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-[8%] pt-20 overflow-hidden bg-luxury-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-bold text-luxury-black/5 select-none pointer-events-none whitespace-nowrap z-0 uppercase tracking-tighter">
        Architect
      </div>

      <div className="z-10 text-center max-w-5xl mx-auto space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-luxury-gray uppercase tracking-widest text-xs md:text-sm font-medium"
        >
          Software Engineer | Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-luxury-black"
        >
          Crafting <span className="italic font-normal serif">Digital Solutions </span> <br />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12"
        >
          <div className="max-w-xs text-left">
            <p className="text-luxury-gray text-sm leading-relaxed ">
              A Nigerian based software engineer, and I specialize in building highly functional and visually stunning web applications that focus on the user journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#project"
              className="group flex items-center gap-4 text-luxury-black font-semibold text-lg overflow-hidden"
            >
              View Projects
              <span className="w-10 h-10 border border-luxury-black rounded-full flex items-center justify-center group-hover:bg-luxury-black group-hover:text-white transition-all duration-300">
                <Image src="/arrow-forward-outline.png" alt="" width={18} height={18} className="invert" />
              </span>
            </a>

            <a
              href="#contact"
              className="text-luxury-gray hover:text-luxury-black transition-colors text-sm uppercase tracking-widest font-bold underline underline-offset-8"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-linear-to-b from-luxury-black to-transparent opacity-30 animate-bounce" />
    </section>
  );
};

export default Header;
