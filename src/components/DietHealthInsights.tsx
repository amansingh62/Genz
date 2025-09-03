"use client";

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import HealthDietComparison from "@/components/HealthDietComparison";

export default function DietHealthInsights() {
  const [selected, setSelected] = useState<"conditions" | "comparisons">("conditions");

  return (
    <div className="max-w-7xl mx-auto mt-20 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        
        {/* ✅ Header Section - Now Wrapped in White */}
        <div className="p-6 rounded-xl shadow-lg text-center mb-8">
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold">
            Impact of Diet on Health Conditions
          </h1>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            Evidence-based insights into how different diets affect various health conditions
            and their therapeutic potential in managing chronic diseases.
          </p>
        </div>

        {/* ✅ Tabs Section - Wrapped in White */}
        <div className="bg-white p-5 rounded-xl shadow-lg text-black mb-6 border border-gray-300">
          <Tabs 
            aria-label="Diet and Health Information"
            selectedKey={selected}
            onSelectionChange={(key: React.Key) => setSelected(key as "conditions" | "comparisons")}
          >
            <Tab
              key="conditions"
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:heart-pulse" className="text-blue-500" />
                  <span>Health Conditions</span>
                </div>
              }
            >
              <HealthDietComparison selectedTab="conditions" />
            </Tab>
            
            <Tab
              key="comparisons"
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:git-compare" className="text-blue-500" />
                  <span>Diet Comparisons</span>
                </div>
              }
            >
              <HealthDietComparison selectedTab="comparisons" />
            </Tab>
          </Tabs>
        </div>

        {/* ✅ Important Note - Wrapped in White */}
        <Card className="mt-8 bg-white rounded-xl shadow-lg border border-gray-300">
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <Icon icon="lucide:info" className="text-blue-500" />
              Important Note
            </h2>
            <p className="text-gray-700">
              This information is for educational purposes only. Always consult with healthcare 
              professionals before making significant changes to your diet, especially if you 
              have existing health conditions or are taking medications.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
