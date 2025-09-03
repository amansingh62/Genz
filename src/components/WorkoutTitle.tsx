"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Oswald as oswald } from "next/font/google";
import Image from "next/image";
import styled from 'styled-components';

const oswaldFont = oswald({ subsets: ["latin"], weight: "700" });

export default function WorkoutPage() {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut", delay: 0.3 } 
    },
  };

  return (
    <div className="relative flex items-center justify-between mt-24 bg-black text-white p-8 overflow-hidden">
      {/* Tiny Stars Background */}
      <StarBackground />

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-500 opacity-10 blur-2xl"></div>

      {/* Content Wrapper */}
      <div className="max-w-3xl z-10">
        {/* Animated Heading (Left Aligned) */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className={`text-6xl md:text-8xl font-extrabold uppercase leading-28  ml-10 text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] tracking-wider text-left ${oswaldFont.className}`}
        >
          Unleash <br /> Your <br /> Inner Beast
        </motion.h1>

        {/* Animated Subtext (Left Aligned) */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-sm md:text-xl mt-5 text-gray-300 max-w-2xl ml-10 text-left leading-relaxed"
        >
          Push your limits, break barriers, and transform your body and mind.  
          Whether you are a beginner or a pro,<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-2xl"><strong> consistency</strong></span> is the key to success. 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-2xl"><strong> Stay dedicated, stay strong,</strong></span> and become the best version of <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-2xl"><strong>yourself!</strong></span>
        </motion.p>
      </div>
     
      <StyledWrapper>
      <div className="cards">
        <figure className="card">
          <Image 
            src="/bruce lee.jpg" 
            alt="Card Image" 
            width={200} 
            height={250} 
            className="card_image w-full h-48 object-cover rounded-t-lg"
          />
          <figcaption className="card_quote mt-10 text-center w-full px-4 text-xl">“The best way to predict the future is to create it.”</figcaption>
          <p className="mt-2 ml-28 text-cyan-400 font-semibold">— Bruce Lee</p>
        </figure>
      </div>
    </StyledWrapper>
    </div>
  );  
}

// ✅ Tiny Stars Background Component
function StarBackground() {
  const [stars, setStars] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ top: `${star.top}%`, left: `${star.left}%` }}
        />
      ))}
    </div>
  );
}

const StyledWrapper = styled.div`
  .cards {
    perspective: 500px;
    margin-right: 4vw;
  }

  .card {
    width: 350px;
    height: 400px;
    background: #16161d;
    border: 2px solid #555555;
    border-radius: 10px;
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.5s;
  }

  .card:hover {
    transform: translateZ(10px) rotateX(20deg) rotateY(20deg);
  }

  .card_title {
    color: #fff;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    transition: transform 0.5s;
    font: 700 1.5rem monospace;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .card:hover .card_title {
    transform: translateZ(50px);
  }`;
