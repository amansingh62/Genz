"use client";

import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Meal } from "@/components/Meal";

interface MealCardProps {
  meal: Meal;
  onSwap: () => void;
}

export function MealCard({ meal, onSwap }: MealCardProps) {
  // Dynamically calculate bar width percentages
  const getBarWidth = (value: number, max: number) => `${(value / max) * 100}%`;

  return (
    <Card className="relative w-full bg-gradient-to-r from-black to-gray-900 border border-gray-700 text-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/30 overflow-hidden">
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-glow"></div>

      <CardBody className="p-6 relative z-10">
        <div className="flex gap-6 items-center">
          {/* Optimized Image with Border Glow */}
          <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-lg border-2 border-cyan-500/30 hover:border-cyan-400 transition-all">
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-light text-gray-100 tracking-wide">{meal.name}</h3>
                <p className="text-sm text-gray-400 italic">{meal.description}</p>
              </div>
              <Button
                isIconOnly
                variant="ghost"
                onClick={onSwap}
                aria-label="Swap meal"
                className="border border-cyan-500/30 p-2 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition"
              >
                <Icon icon="lucide:refresh-cw" className="w-6 h-6 text-cyan-400 hover:text-cyan-200" />
              </Button>
            </div>

            {/* Macronutrient Info */}
            <div className="mt-5">
              <div className="flex justify-between mb-3 text-md font-semibold">
                <span>Calories</span>
                <span className="text-cyan-300 font-extrabold">{meal.calories} kcal</span>
              </div>

              {/* Enhanced Macronutrient Bars */}
              <div className="space-y-3">
                {[
                  { label: "Protein", value: meal.nutrients.protein, max: 50, gradient: "from-blue-500 to-cyan-400", glow: "shadow-blue-500/50" },
                  { label: "Carbs", value: meal.nutrients.carbs, max: 100, gradient: "from-green-500 to-lime-400", glow: "shadow-green-500/50" },
                  { label: "Fats", value: meal.nutrients.fats, max: 50, gradient: "from-yellow-500 to-amber-400", glow: "shadow-yellow-500/50" },
                ].map((nutrient) => (
                  <div key={nutrient.label} className="relative">
                    <div className="flex justify-between text-sm font-light text-gray-300 mb-1">
                      <span>{nutrient.label}</span>
                      <span>{nutrient.value}g</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative shadow-inner">
                      {/* Progress Bar Fill */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${nutrient.gradient} ${nutrient.glow} transition-all duration-700 ease-in-out rounded-full`}
                        style={{ width: getBarWidth(nutrient.value, nutrient.max) }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
