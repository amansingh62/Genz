import React from "react";
import { Card, CardBody, CardFooter, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";

interface WorkoutLevelCardProps {
  level: string;
  description: string;
  icon: string;
  daysPerWeek: number;
  isSelected: boolean;
  onSelect: () => void;
}

export function WorkoutLevelCard({
  level,
  description,
  icon,
  daysPerWeek,
  isSelected,
  onSelect,
}: WorkoutLevelCardProps) {
  return (
    <Card
      isPressable
      onPress={onSelect}
      className={`w-full rounded-2xl transition-all duration-300 hover:scale-105 
        ${isSelected ? "border-2 border-blue-500 shadow-lg shadow-blue-900" 
        : "border border-gray-700 hover:shadow-md"} 
        bg-gradient-to-br from-gray-800 to-gray-900`}
      shadow={isSelected ? "lg" : "sm"}
    >
      <CardBody className="gap-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-4 rounded-xl transition-all duration-300 ${
                isSelected ? "bg-blue-700 shadow-md shadow-blue-500" : "bg-gray-700"
              }`}
            >
              <Icon
                icon={icon}
                className={`text-3xl transition-all duration-300 ${isSelected ? "text-blue-400" : "text-gray-300"}`}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{level}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Icon icon="lucide:calendar" height={16} width={16} />
                <span>{daysPerWeek} days/week</span>
              </div>
            </div>
          </div>
          {isSelected && (
            <Badge color="primary" variant="flat" className="bg-blue-500 text-white px-3 py-1 rounded-md">
              Selected
            </Badge>
          )}
        </div>
        
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          {description}
        </p>
      </CardBody>

      <CardFooter className="pt-0 px-6 pb-6">
        {/* ✅ Fix: Ensured Button Keeps Its Shape & Style When Selected */}
        <div
          role="button"
          tabIndex={0}
          onClick={onSelect}
          className={`mt-5 flex items-center justify-center gap-2 transition-all duration-300 
            rounded-full py-3 text-center cursor-pointer w-full text-lg font-semibold
            ${isSelected ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-700" 
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          style={{ minHeight: "48px", padding: "12px 16px" }} // ✅ Fix: Prevents shrinking
        >
          {isSelected && <Icon icon="lucide:check" className="text-lg" />}
          {isSelected ? "Selected" : "Select This Level"}
        </div>
      </CardFooter>
    </Card>
  );
}
