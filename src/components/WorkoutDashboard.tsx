'use client';

import React from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { WorkoutLogForm, WorkoutLogData } from "@/components/WorkoutLogForm";
import { WorkoutHistory } from "@/components/WorkoutHistory";
import { WorkoutStats } from "@/components/WorkoutStats";
import { ProgressChart } from "@/components/ProgressChart";

export function WorkoutDashboard() {
  const [logs, setLogs] = React.useState<WorkoutLogData[]>([]);
  const [selectedExercise, setSelectedExercise] = React.useState("Bench Press");

  const handleLogSubmit = (data: WorkoutLogData) => {
    setLogs((prev) => [...prev, data]);
  };

  const getProgressData = () => {
    return logs
      .filter((log) => log.exercise === selectedExercise)
      .map((log) => ({
        date: log.date,
        weight: Number(log.weight),
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 bg-black min-h-screen">
      {/* Header */}
      <header className="text-center">
        <div className="inline-block p-3 rounded-full shadow-lg">
          <Icon icon="lucide:activity" className="text-5xl text-white" />
        </div>
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold">
          Workout Dashboard
        </h1>
        <p className="text-gray-400 mt-8">Track your progress and stay motivated with detailed analytics</p>
      </header>

      {/* Stats */}
      <WorkoutStats logs={logs} />

      {/* Main Card */}
      <Card className="bg-gray-900/60 border border-white/20 shadow-lg text-white">
        <CardBody className="p-0">
          <Tabs
            variant="underlined"
            color="primary"
            size="lg"
            classNames={{
              tabList: "p-0 px-4 pt-4",
              cursor: "w-full bg-blue-500",
              tab: "h-12 text-gray-300 data-[selected=true]:text-white font-semibold",
              panel: "text-white",
            }}
          >
            {/* Log Workout Tab */}
            <Tab
              key="log"
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:pencil" className="text-blue-400" />
                  <span>Log Workout</span>
                </div>
              }
            >
              <div className="p-6">
                <WorkoutLogForm onSubmit={handleLogSubmit} />
              </div>
            </Tab>

            {/* History Tab */}
            <Tab
              key="history"
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:history" className="text-blue-400" />
                  <span>History</span>
                </div>
              }
            >
              <div className="p-6">
                <WorkoutHistory logs={logs} />
              </div>
            </Tab>

            {/* Progress Tab */}
            <Tab
              key="progress"
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:trending-up" className="text-blue-400" />
                  <span>Progress</span>
                </div>
              }
            >
              <div className="p-6">
                <ProgressChart data={getProgressData()} exercise={selectedExercise} />
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
