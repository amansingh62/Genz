"use client";

import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HealthCondition } from "@/components/health";

interface HealthConditionCardProps {
  condition: HealthCondition;
}

export default function HealthConditionCard({ condition }: HealthConditionCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
      <Card className="bg-white rounded-lg">
        <CardBody className="p-6">
          {/* Title Section */}
          <div className="flex items-center gap-2 mb-4">
            <Icon icon="lucide:activity" className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-gray-900">{condition.name}</h3>
          </div>

          {/* Condition Description */}
          <p className="text-gray-700 mb-4">{condition.description}</p>
          <Divider className="my-4" />

          {/* Details Section */}
          <div className="space-y-4">
            {/* Recommended Diets */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                <Icon icon="lucide:check-circle" className="w-4 h-4 mr-2" />
                Recommended Diets
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {condition.recommendedDiets.map((diet, index) => (
                  <li key={index}>{diet}</li>
                ))}
              </ul>
            </div>

            {/* Foods to Avoid */}
            <div>
              <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                <Icon icon="lucide:x-circle" className="w-4 h-4 mr-2" />
                Foods to Avoid
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {condition.avoidFoods.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>

            {/* Key Nutrients */}
            <div>
              <h4 className="text-sm font-semibold text-blue-500 mb-2 flex items-center">
                <Icon icon="lucide:star" className="w-4 h-4 mr-2" />
                Key Nutrients
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {condition.keyNutrients.map((nutrient, index) => (
                  <li key={index}>{nutrient}</li>
                ))}
              </ul>
            </div>

            {/* Research Summary */}
            <div>
              <h4 className="text-sm font-semibold text-yellow-500 mb-2 flex items-center">
                <Icon icon="lucide:book" className="w-4 h-4 mr-2" />
                Research Summary
              </h4>
              <p className="text-sm text-gray-700">{condition.researchSummary}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
