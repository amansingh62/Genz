import React from "react";
import { Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

interface WorkoutDay {
  day: string;
  focus: string;
  exercises: Exercise[];
}

interface WorkoutScheduleCardProps {
  day: WorkoutDay;
}

export function WorkoutScheduleCard({ day }: WorkoutScheduleCardProps) {
  // Map focus areas to colors
  const getFocusColor = (focus: string): "primary" | "secondary" | "success" | "warning" | "danger" => {
    const focusLower = focus.toLowerCase();
    if (focusLower.includes("chest") || focusLower.includes("tricep")) return "primary";
    if (focusLower.includes("back") || focusLower.includes("bicep")) return "secondary";
    if (focusLower.includes("leg")) return "success";
    if (focusLower.includes("shoulder")) return "warning";
    if (focusLower.includes("arm")) return "danger";
    return "primary";
  };

  const focusColor = getFocusColor(day.focus);

  return (
    <Card
      className={`w-full shadow-xl hover:shadow-2xl transition-all duration-300 
                  bg-gray-900 border border-transparent rounded-2xl
                  hover:border-blue-500 hover:shadow-blue-500/50 relative overflow-hidden`}
    >
      {/* Gradient Glow Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg -z-10"></div>

      {/* 🏋️ Card Header */}
      <CardHeader className="flex flex-col gap-4 pb-2">
        {/* ✅ Removed Icon Between Weekday & Focus */}
        <div className="flex flex-col pb-2 border-b border-gray-600">
          <h3 className="text-2xl font-bold text-white tracking-wide">{day.day}</h3>
          <span className="text-lg font-medium text-gray-400">{day.focus}</span>
        </div>

        {/* ✅ Dumbbell icon & Exercises count - Properly aligned */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white text-lg font-semibold">
            <Icon icon="lucide:dumbbell" className="text-xl text-gray-400" />
            <span>{day.exercises.length} Exercises</span>
          </div>
        </div>
      </CardHeader>

      <Divider className="bg-gray-700 opacity-50" />

      {/* 🏋️‍♂️ Card Body */}
      <CardBody className="space-y-6 py-4">
        {day.exercises.map((exercise, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="font-light text-white text-lg tracking-wide">{exercise.name}</p>
              <div className="flex gap-3">
                <Chip size="sm" variant="flat" color={focusColor} className="px-3 py-1 font-medium">
                  {exercise.sets} sets
                </Chip>
                <Chip size="sm" variant="flat" color={focusColor} className="px-3 py-1 font-medium">
                  {exercise.reps}
                </Chip>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Icon icon="lucide:clock" height={16} width={16} className="text-blue-400" />
              <p>Rest: {exercise.rest}</p>
            </div>
            {/* Show Divider Between Exercises */}
            {index < day.exercises.length - 1 && (
              <Divider className="my-3 bg-gray-700 opacity-50" />
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
