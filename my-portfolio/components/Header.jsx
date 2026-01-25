"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "../lib/Utils";

const Header = () => {
  return (
    <section className="w-11/12 max-w-3xl pt(--nav-h) mt-10 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 transition"
        )}
      >
        Welcome to My Portfolio
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl md:text-2xl mb-2 font-Ovo"
      >
        Hi! I'm Adepitan Yewande Helen
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-2xl md:text-5xl font-Ovo mb-2"
      >
        A Software Engineer based in Lagos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I’m a software engineer with a strong interest in building reliable,
        user-focused applications, and I live in Lagos, Nigeria.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="flex items-center border-2 border-black/50 bg-black text-white justify-center px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200"
        >
          Contact Me
          <Image
            src="/arrow-forward-outline.png"
            alt=""
            width={24}
            height={24}
            className="w-6 ml-2"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
