"use client";

import React, { useState, useMemo } from "react";
import { Alert } from "@heroui/react";
import meals from "@/components/Meals";
import { MealCard } from "@/components/MealCard";
import type { Meal, MealPlan as MealPlanType } from "@/components/Meal";
import { motion } from "framer-motion";

const getRandomUnsplashImage = (mealType: string) => {
  const unsplashCategories: Record<string, string> = {
    breakfast: "/breakfast.jpg",
    lunch: "/lunch.jpeg",
    dinner: "/dinner.webp",
  };
  return unsplashCategories[mealType] || "https://source.unsplash.com/300x200/?food";
};

const getInitialMealPlan = (dietType: string): MealPlanType => {
  const defaultMeal: Meal = {
    id: "default",
    name: "No meal available",
    description: "Please try another diet type",
    calories: 0,
    nutrients: { protein: 0, carbs: 0, fats: 0 },
    image: getRandomUnsplashImage("breakfast"),
    mealType: "breakfast",
    dietType: dietType as "keto" | "vegan" | "paleo",
  };

  return {
    breakfast:
      meals.find((m) => m.mealType === "breakfast" && m.dietType === dietType) || defaultMeal,
    lunch:
      meals.find((m) => m.mealType === "lunch" && m.dietType === dietType) || {
        ...defaultMeal,
        image: getRandomUnsplashImage("lunch"),
        mealType: "lunch",
      },
    dinner:
      meals.find((m) => m.mealType === "dinner" && m.dietType === dietType) || {
        ...defaultMeal,
        image: getRandomUnsplashImage("dinner"),
        mealType: "dinner",
      },
  };
};

export default function MealPlan() {
  const [selectedDiet, setSelectedDiet] = useState<string>("keto");
  const [mealPlan, setMealPlan] = useState<MealPlanType>(() => getInitialMealPlan(selectedDiet));
  const [error, setError] = useState<string | null>(null);

  const handleDietChange = (value: string) => {
    setSelectedDiet(value);
    setMealPlan(getInitialMealPlan(value));
    setError(null);
  };

  const handleSwapMeal = (mealType: keyof MealPlanType) => {
    const currentMeal = mealPlan[mealType];
    const availableMeals = meals.filter(
      (m) => m.mealType === mealType && m.id !== currentMeal.id && m.dietType === selectedDiet
    );

    if (availableMeals.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMeals.length);
      setMealPlan((prev) => ({
        ...prev,
        [mealType]: availableMeals[randomIndex],
      }));
      setError(null);
    } else {
      setError(`No alternative ${mealType} meals available for ${selectedDiet} diet`);
    }
  };

  const totalCalories = useMemo(() => {
    return Object.values(mealPlan).reduce((sum, meal) => sum + (meal?.calories || 0), 0);
  }, [mealPlan]);

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center">
      {/* Title and Selection Section */}
      <div className="max-w-4xl w-full space-y-6">
        <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800">
          <h1 className="text-3xl font-semibold text-white tracking-wide">Daily Meal Plan</h1>
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold text-cyan-400 animate-pulse">
              {totalCalories} kcal
            </span>

            {/* Diet Selection Button Group */}
            <div className="flex gap-3 bg-gray-800 p-2 rounded-xl shadow-md border border-gray-700">
              {[
                { key: "keto", label: "🍗 Keto" },
                { key: "vegan", label: "🌿 Vegan" },
                { key: "paleo", label: "🥩 Paleo" },
              ].map((diet) => (
                <button
                  key={diet.key}
                  className={`px-5 py-2 rounded-lg text-white font-medium transition-all transform 
                  ${
                    selectedDiet === diet.key
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg scale-105"
                      : "bg-gray-700 hover:bg-gray-600 hover:scale-105"
                  }`}
                  onClick={() => handleDietChange(diet.key)}
                >
                  {diet.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert color="warning" className="mb-4 text-white text-lg font-medium shadow-lg bg-gray-900 border border-yellow-500 p-4 rounded-lg">
            {error}
          </Alert>
        )}

        {/* Meal Cards Section */}
        <div className="grid gap-6">
          {(["breakfast", "lunch", "dinner"] as (keyof MealPlanType)[]).map((mealType, index) => (
            <motion.div
              key={mealType}
              className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 transition-transform"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-cyan-400 uppercase tracking-widest">
                {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              </h2>
              <MealCard meal={mealPlan[mealType]} onSwap={() => handleSwapMeal(mealType)} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
