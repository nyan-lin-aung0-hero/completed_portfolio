"use client";
import React from "react";
import { motion } from "framer-motion";
import Lamp from "../ui/Lamp";

export default function LampDemo() {
  return (
    <Lamp>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        This is <br /> Blaze
      </motion.h1>
    </Lamp>
  );
}
