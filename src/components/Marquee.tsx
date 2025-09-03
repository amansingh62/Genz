"use client";

import React from "react";
import { motion } from "framer-motion";

const Marquee: React.FC = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full rounded-tl-3xl rounded-tr-3xl py-20"
      style={{
        background: "linear-gradient(270deg, rgba(2, 19, 58, 0.9) 0%, rgba(15, 165, 190, 0.85) 60%)",
      }}
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[18vw] leading-none font-francois pr-20 bg-gradient-to-r from-neutral-50 to-neutral-500 text-transparent bg-clip-text"
        >
          WE ARE GENZ FITNESS
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[18vw] leading-none font-francois pr-20 bg-gradient-to-r from-neutral-50 to-neutral-500 text-transparent bg-clip-text"
        >
          WE ARE GENZ FITNESS
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
