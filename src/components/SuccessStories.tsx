"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Roman Reigns",
    quote: "I've never been more consistent with my workouts. Highly recommend!",
    image: "/roman_avtar.jpeg",
    afterImage: "/roman.jpg",
  },
  {
    name: "Brock Lesnar",
    quote: "This platform pushed me beyond my limits. Strength, discipline, and results—undisputed!",
    image: "/brock_avtar.avif",
    afterImage: "/brock lesner.webp",
  },
  {
    name: "Thor",
    quote: "This platform helped me get back in shape and rebuild my strength in Endgame!",
    image: "/thor_avatar.jpg",
    afterImage: "/thor.jpg",
  },
  {
    name: "Smriti Mandhana",
    quote: "Flexibility and agility are game-changers. My training routine helped me stay at my best on and off the field!",
    image: "/smriti_avatar.jpg",
    afterImage: "/smriti.webp",
  },
  {
    name: "Jasprit Bumrah",
    quote: "This workout regime played a huge role in my recovery and getting me back in top shape during the Champions Trophy.",
    image: "/bumrah_avatar.avif",
    afterImage: "/bumrah.jpeg",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Success Stories & Testimonials
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          Real users, real results. See how our platform has helped people achieve their fitness goals.
        </p>
      </div>

      {/* ✅ Ultra-Smooth Infinite Sliding Carousel */}
      <div className="max-w-5xl mx-auto mt-12 overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{
            x: ["0%", "-100%"], // Moves left continuously
          }}
          transition={{
            repeat: Infinity, // Loops infinitely
            duration: 20, // Slower speed for ultra-smooth effect
            ease: "linear", // Ensures smooth, non-stuttering movement
          }}
        >
          {/* ✅ Double the array for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] md:min-w-[350px] p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500
                         transition-all relative flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              {/* ✅ User Profile Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={90}
                height={90}
                className="w-20 h-20 rounded-full border-4 border-blue-400 object-cover"
              />

              {/* ✅ Testimonial Text */}
              <p className="text-lg text-white mt-4 font-extralight">{testimonial.quote}</p>

              {/* ✅ User Name */}
              <span className="text-sm text-gray-400 mt-2">— {testimonial.name}</span>

              {/* ✅ After-Only Image */}
              <Image
                src={testimonial.afterImage}
                alt="After Transformation"
                width={280}
                height={180}
                className="w-full rounded-lg mt-4 shadow-md hover:shadow-lg object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
