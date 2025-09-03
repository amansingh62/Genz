"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "How do I log my workouts?",
    answer: "You can log your workouts by navigating to the 'Log Workout' section and entering your exercise details such as weight, sets, and reps.",
  },
  {
    question: "Can I track my progress over time?",
    answer: "Yes! Your progress is automatically tracked and visualized in charts within the 'Progress' section of your dashboard.",
  },
  {
    question: "How are workouts personalized?",
    answer: "Our platform customizes workouts based on your fitness goals, workout history, and AI-driven recommendations.",
  },
  {
    question: "Is there a way to join a community?",
    answer: "Absolutely! We have a community section where you can connect with other fitness enthusiasts, share progress, and stay motivated.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "Not necessarily! We provide workouts that can be done both with and without equipment, so you can train anywhere.",
  },
  {
    question: "Can I integrate my fitness tracker?",
    answer: "Yes! Our platform supports integration with fitness trackers to sync your progress automatically.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-16 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* ✅ Section Title */}
        <motion.h2
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          Find answers to common questions about tracking workouts, progress, and more.
        </p>
      </div>

      {/* ✅ FAQ Accordion */}
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-all"
          >
            {/* ✅ Question - Click to Expand */}
            <button
              className="w-full flex justify-between items-center p-5 text-left text-white text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon icon="mdi:chevron-down" className="text-xl text-blue-400" />
              </motion.span>
            </button>

            {/* ✅ Animated Answer - Expands on Click */}
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="p-5 text-gray-300">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
