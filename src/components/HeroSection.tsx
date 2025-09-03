"use client";

import React from "react";
import { Oswald as oswald } from "next/font/google";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Button2 from "./Button2";

const oswaldFont = oswald({ subsets: ["latin"], weight: ["400", "700"] });

function HeroSection() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="p-4 relative z-10 w-full text-start ml-16">
          <h1
            className={`mt-20 md:mt-0 text-4xl ml-40 md:text-7xl font-bold bg-clip-text text-transparent 
       bg-gradient-to-b from-neutral-50 to-neutral-500 uppercase tracking-widest scale-125 leading-20 ${oswaldFont.className}`}
          >
            Make Your <br /> Gym <br /> Unstoppable
          </h1>
          <p className="mt-14 font-extralight text-start text-xl text-neutral-300 max-w-xl">
            We are a complete ecosystem of top-quality fitness solutions. We offer{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold text-2xl">
              high-standard diet plans
            </span>{" "}
            and a variety of services to set up your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold text-2xl">
              gym from scratch.
            </span>
          </p>
          <Button2 text="Start Now" />
        </div>

        <div>
          <img
            src="sushi.jpg"
            alt="hero"
            className="absolute right-28 bottom-32 rounded-2xl z-10 w-1/4"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div className="border-1 border-neutral-500 opacity-60 absolute transform w-full bottom-0 z-0">

        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default HeroSection;
