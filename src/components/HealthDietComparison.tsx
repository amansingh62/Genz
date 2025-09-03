"use client";

import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { healthConditions, dietComparisons } from "@/components/healthData"; // ✅ Ensure path is correct

// ✅ Define Props Type
interface HealthDietComparisonProps {
  selectedTab: "conditions" | "comparisons";
}

export default function HealthDietComparison({ selectedTab }: HealthDietComparisonProps) {
  return (
    <div className="p-10 bg-white text-black rounded-xl shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-center mb-6">
        {selectedTab === "conditions" ? "Health Conditions & Recommended Diets" : "Diet Comparisons"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {selectedTab === "conditions"
          ? healthConditions.map((condition) => (
              <Card key={condition.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                <CardBody>
                  {/* ✅ Title Section */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon icon="lucide:heart-pulse" className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">{condition.name}</h3>
                  </div>

                  <p className="text-gray-700 mb-4">{condition.description}</p>
                  <Divider className="my-4" />

                  {/* ✅ Recommended Diets */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-2">
                        <Icon icon="lucide:check-circle" className="inline-block w-4 h-4 mr-2" />
                        Recommended Diets
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {condition.recommendedDiets.map((diet, index) => (
                          <li key={index}>{diet}</li>
                        ))}
                      </ul>
                    </div>

                    {/* ✅ Foods to Avoid */}
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-2">
                        <Icon icon="lucide:x-circle" className="inline-block w-4 h-4 mr-2" />
                        Foods to Avoid
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {condition.avoidFoods.map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>

                    {/* ✅ Key Nutrients */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 mb-2">
                        <Icon icon="lucide:star" className="inline-block w-4 h-4 mr-2" />
                        Key Nutrients
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {condition.keyNutrients.map((nutrient, index) => (
                          <li key={index}>{nutrient}</li>
                        ))}
                      </ul>
                    </div>

                    {/* ✅ Research Summary */}
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-600 mb-2">
                        <Icon icon="lucide:book" className="inline-block w-4 h-4 mr-2" />
                        Research Summary
                      </h4>
                      <p className="text-sm text-gray-700">{condition.researchSummary}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          : dietComparisons.map((diet) => (
              <Card key={diet.dietType} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                <CardBody>
                  {/* ✅ Diet Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon icon="lucide:leaf" className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold text-gray-900">{diet.dietType} Diet</h3>
                  </div>

                  <Divider className="my-4" />

                  {/* ✅ Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">
                      <Icon icon="lucide:check-circle" className="inline-block w-4 h-4 mr-2" />
                      Benefits
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {diet.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ Risks */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">
                      <Icon icon="lucide:x-circle" className="inline-block w-4 h-4 mr-2" />
                      Risks
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {diet.risks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ Key Features */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">
                      <Icon icon="lucide:star" className="inline-block w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {diet.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ Research Findings */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-yellow-600 mb-2">
                      <Icon icon="lucide:book" className="inline-block w-4 h-4 mr-2" />
                      Research Findings
                    </h4>
                    <p className="text-sm text-gray-700">{diet.researchFindings}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
      </div>
    </div>
  );
}
