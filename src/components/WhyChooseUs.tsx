"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:weight-lifter",
    title: "Personalized Training Plans",
    description: "Get workouts tailored to your fitness level and goals.",
  },
  {
    icon: "mdi:chart-line",
    title: "Track Your Progress",
    description: "Monitor your strength, endurance, and workout consistency.",
  },
  {
    icon: "mdi:account-group",
    title: "Community Support",
    description: "Join a community of fitness enthusiasts & stay motivated.",
  },
  {
    icon: "mdi:lightning-bolt",
    title: "AI-Powered Recommendations",
    description: "Smart insights to optimize your workouts and avoid plateaus.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Our Platform?
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          Experience next-level fitness tracking with smart insights and personalized plans.
        </p>
      </div>

      <StyledWrapper className="max-w-5xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="align">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>

            {/* Icon */}
            <Icon icon={feature.icon} className="feature-icon" />

            {/* Title */}
            <h1>{feature.title}</h1>

            {/* Description */}
            <p>{feature.description}</p>
          </div>
        ))}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 130px;
    padding: 1rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(198, 198, 198, 0.3) 100%);
    border-radius: 12px;
    backdrop-filter: blur(8px);
    border-bottom: 4px solid rgba(255, 255, 255, 0.5);
    border-left: 3px solid rgba(255, 255, 255, 0.6);
    box-shadow: -30px 40px 30px rgba(0, 0, 0, 0.3);
    transform: skewX(10deg);
    transition: 0.4s ease-in-out;
    overflow: hidden;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card:hover {
    height: 260px;
    transform: skew(0deg);
    box-shadow: -10px 15px 20px rgba(0, 0, 0, 0.4);
  }

  .align {
    padding: 0.6rem;
    display: flex;
    gap: 6px;
    align-self: flex-start;
  }

  .red, .yellow, .green {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.3);
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  .feature-icon {
    font-size: 3rem;
    margin: 0.5rem 0;
    color: #00bcd4;
    transition: transform 0.3s ease-in-out;
  }

  .card:hover .feature-icon {
    transform: scale(1.2);
  }

  h1 {
    font-size: 1.3rem;
    font-weight: bold;
    color: rgb(218, 244, 237);
    text-shadow: -5px 3px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .card:hover p {
    opacity: 1;
  }
`;

export default WhyChooseUs;
