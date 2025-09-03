"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button2 from "./Button2";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const backgroundImage: string = "girl.jpg";

  return (
    <div className="w-11/12 p-20 bg-neutral-400 mt-20 ml-12 rounded-3xl text-black">
      <h1 className="text-5xl font-sans text-black opacity-80 font-extralight leading-[4vw] tracking-tight">
        GenZ Fitness is your ultimate destination for transforming health and wellness. Whether you aim to build muscle, boost endurance, shed weight, or enhance overall fitness, we offer expert training, customized workout routines, and personalized nutrition plans.
      </h1>
      <div className="w-full flex gap-5 pt-10 mt-20 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl font-extralight opacity-80">Our approach:</h1>

          {/* Smooth Toggle Effect with Framer Motion */}
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                className="mt-4 text-3xl text-black"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                At GenZ Fitness, we believe in a holistic approach to fitness. Our programs combine strength training, cardio, flexibility, and nutrition guidance to ensure sustainable results. Whether you are a beginner or an advanced athlete, we tailor every plan to your individual needs.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <div className="text-white mt-4">
          <Button2 text={isExpanded ? "Read Less" : "Read More"} onClick={() => setIsExpanded(!isExpanded)} />

          </div>
        </div>

        {/* Background Image Section */}
        <div
          className="w-2/3 h-[65vh] rounded-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
