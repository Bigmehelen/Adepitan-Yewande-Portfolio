"use client";
import React from "react";
import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-indigo-50">
      
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-600/30 via-indigo-600/20 to-pink-600/30"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <motion.div
        className="absolute top-[-20%] left-[-10%] w-37.5 h-37.5 rounded-full bg-purple-500/30 blur-[120px]"
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-37.5 h-37.5 rounded-full bg-pink-500/30 blur-[120px]"
        animate={{ y: [0, -80, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[20%] right-[20%] w-25 h-25 rounded-full bg-indigo-500/30 blur-[100px]"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default AnimatedBackground;
