'use client';

import React from "react";
import { DietPlanCard } from "@/components/DietPlanCard";
import { DietPlanModal } from "@/components/DietPlanModal";
import { motion } from "framer-motion";

const dietPlans = [
  {
    title: "Muscle Builder",
    description: "High-protein diet plan designed for muscle growth and recovery",
    calories: 3000,
    meals: 6,
    type: "Bulking"
  },
  {
    title: "Fat Loss",
    description: "Calorie-controlled plan with optimal macro distribution",
    calories: 2000,
    meals: 5,
    type: "Cutting"
  },
  {
    title: "Maintenance",
    description: "Balanced nutrition plan for maintaining current physique",
    calories: 2500,
    meals: 4,
    type: "Maintenance"
  },
  {
    title: "Vegan Athlete",
    description: "Plant-based plan optimized for athletic performance",
    calories: 2800,
    meals: 5,
    type: "Vegan"
  }
];

export function DietPlans() {
  const [selectedPlan, setSelectedPlan] = React.useState<typeof dietPlans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleViewPlan = (plan: typeof dietPlans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto mt-24 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon above the heading */}

          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold">
            Personalized Diet Plans
          </h1>
          <p className="text-gray-400 mt-8">
            Choose from our expertly crafted nutrition plans designed to help you achieve your fitness goals. 
            Each plan is scientifically formulated to provide optimal macro distribution and meal timing 
            for maximum results.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-6">
        {dietPlans.map((plan, index) => (
          <DietPlanCard 
            key={plan.title} 
            {...plan} 
            index={index} 
            onViewPlan={() => handleViewPlan(plan)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <DietPlanModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plan={selectedPlan}
        />
      )}
    </div>
  );
}
