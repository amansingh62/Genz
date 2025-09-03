import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { WorkoutLogData } from "@/components/WorkoutLogForm";

interface WorkoutStatsProps {
  logs: WorkoutLogData[];
}

export function WorkoutStats({ logs }: WorkoutStatsProps) {
  const totalWorkouts = logs.length;
  const uniqueExercises = new Set(logs.map((log) => log.exercise)).size;
  const totalWeight = logs.reduce((acc, log) => acc + Number(log.weight), 0);
  const totalSets = logs.reduce((acc, log) => acc + Number(log.sets), 0);

  const stats = [
    {
      label: "Total Workouts",
      value: totalWorkouts,
      icon: "lucide:activity",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      label: "Different Exercises",
      value: uniqueExercises,
      icon: "lucide:dumbbell",
      gradient: "from-green-500 to-teal-400",
    },
    {
      label: "Total Weight Lifted",
      value: `${totalWeight} kg`,
      icon: "lucide:weight",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      label: "Total Sets",
      value: totalSets,
      icon: "lucide:repeat",
      gradient: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gray-900/60 border border-white/20 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <CardBody className="flex items-center gap-4 p-6">
            {/* Icon with Gradient Background */}
            <div
              className={`p-4 rounded-full bg-gradient-to-r ${stat.gradient} shadow-lg`}
            >
              <Icon icon={stat.icon} className="text-3xl text-white" />
            </div>

            {/* Stats Content */}
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
