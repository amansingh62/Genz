'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const dietMythsAndFacts = [
  { id: '1', myth: 'Carbs are bad for you', fact: 'Carbohydrates are essential macronutrients that provide energy for your body. The key is choosing complex carbs like whole grains, fruits, and vegetables over refined carbs.', icon: 'lucide:bread' },
  { id: '2', myth: 'Skipping meals helps lose weight', fact: 'Skipping meals can slow metabolism and lead to overeating later. Regular, balanced meals help maintain stable blood sugar and support healthy weight management.', icon: 'lucide:clock' },
  { id: '3', myth: 'All fats make you gain weight', fact: 'Healthy fats (like those in avocados, nuts, and olive oil) are essential for hormone production, nutrient absorption, and brain health.', icon: 'lucide:avocado' },
  { id: '4', myth: 'Eating at night causes weight gain', fact: 'What matters most is your total daily calorie intake, not the time you eat. However, late-night eating might affect sleep quality.', icon: 'lucide:moon' },
  { id: '5', myth: 'Detox diets cleanse your body', fact: 'Your liver, kidneys, and digestive system naturally detoxify your body. Special detox diets are unnecessary and can be harmful.', icon: 'lucide:flask' },
  { id: '6', myth: 'Protein supplements cause hair loss', fact: 'There\'s no scientific evidence linking protein supplements to hair loss. In fact, protein is essential for healthy hair growth. Hair loss is typically related to genetics, hormones, or nutritional deficiencies.', icon: 'lucide:hair' },
  { id: '7', myth: 'You need protein immediately after exercise', fact: 'While protein is important for muscle recovery, the \"anabolic window\" is much wider than previously thought. Getting adequate protein throughout the day is more important than timing.', icon: 'lucide:dumbbell' },
  { id: '8', myth: 'Eggs raise cholesterol levels', fact: 'For most people, dietary cholesterol has little impact on blood cholesterol. Eggs are highly nutritious and can be part of a healthy diet.', icon: 'lucide:egg' },
  { id: '9', myth: 'You must eat protein every 3 hours', fact: 'Your body can effectively utilize protein from fewer, larger meals. Total daily protein intake is more important than frequent protein feeding.', icon: 'lucide:timer' },
  { id: '10', myth: 'Plant proteins are incomplete', fact: 'While some plant proteins may be lower in certain amino acids, a varied plant-based diet can provide all essential amino acids needed for health.', icon: 'lucide:sprout' }
];

export default function Myths() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-16 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Common Diet Myths & Facts
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          Debunking common diet myths with science-backed facts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        {dietMythsAndFacts.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left text-white text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center gap-3">
                <Icon icon={item.icon} className="text-primary text-xl" />
                {item.myth}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon icon="mdi:chevron-down" className="text-xl text-blue-400" />
              </motion.span>
            </button>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="p-5 text-gray-300">{item.fact}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}