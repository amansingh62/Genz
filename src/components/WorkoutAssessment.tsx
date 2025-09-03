"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Divider, Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { WorkoutLevelCard } from "@/components/WorkoutLevelCard";
import { WorkoutScheduleCard } from "@/components/WorkoutScheduleCard";
import { BookTrainerModal } from "@/components/BookTrainer";
import { workoutLevels, workoutPlans } from "@/components/workoutPlans";

export default function WorkoutAssessment() {
  const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>("assessment");
  const [isBookTrainerModalOpen, setIsBookTrainerModalOpen] = React.useState(false);
  const [showWorkoutPlan, setShowWorkoutPlan] = React.useState(false);

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    // Reset workout plan visibility when selecting a new level
    setShowWorkoutPlan(false);
  };

  const handleViewWorkoutPlan = () => {
    if (selectedLevel) {
      setActiveTab("workout-plan");
      // Don't show workout plan yet - user needs to click the button in the workout plan tab
    }
  };

  const handleShowWorkoutPlan = () => {
    setShowWorkoutPlan(true);
  };

  const handleBackToAssessment = () => {
    setActiveTab("assessment");
  };

  const handleBookTrainer = () => {
    console.log("Opening Trainer Modal...");
    setIsBookTrainerModalOpen(true);
  };

  // Handle tab selection change with proper typing
  const handleTabChange = (key: React.Key) => {
    setActiveTab(key.toString());
  };
  

  const selectedWorkoutPlan = selectedLevel ? workoutPlans[selectedLevel] : null;
  
  // Calculate progress percentage based on selected level
  const progressPercentage = React.useMemo(() => {
    if (!selectedLevel) return 0;
    if (selectedLevel === "beginner") return 33;
    if (selectedLevel === "intermediate") return 66;
    if (selectedLevel === "advanced") return 100;
    return 0;
  }, [selectedLevel]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-block mb-4 p-2 bg-primary-900 rounded-full">
            <Icon icon="lucide:dumbbell" className="text-4xl text-primary-400" />
          </div>
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-bold">
            Workout Assessment
          </h1>
          <p className="text-gray-300 max-w-2xl mt-8 mx-auto text-lg">
            Find the perfect workout plan for your fitness level. We wll help you choose exercises
            that match your experience and goals.
          </p>
        </header>

        <Card className="mb-8 shadow-lg rounded-2xl bg-gray-800 border-gray-700">
          <CardBody className="p-0">
            <Tabs 
              selectedKey={activeTab} 
              onSelectionChange={handleTabChange}
              variant="underlined"
              color="primary"
              size="lg"
              classNames={{
                tabList: "p-0 px-4 pt-4",
                cursor: "w-full bg-primary",
                tab: "h-12 data-[selected=true]:font-bold text-white"
              }}
            >
              <Tab 
                key="assessment" 
                title={
                  <div className="flex items-center text-2xl gap-2">
                    <Icon icon="lucide:clipboard-check" />
                    <span className="text-3xl font-extralight">Assessment</span>
                  </div>
                }
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Select Your Experience Level</h2>
                    {selectedLevel && (
                      <Badge color="primary" variant="flat">
                        {workoutLevels.find(l => l.id === selectedLevel)?.name} Selected
                      </Badge>
                    )}
                  </div>
                  
                  <div className="mb-6 w-full">
  {/* Progress Bar Container */}
  <div className="relative w-full h-6 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
    {/* Progress Fill */}
    <div
      className="h-full text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 transition-all duration-500"
      style={{ width: `${progressPercentage}%` }} // ✅ Dynamically fills based on percentage
    />

    {/* Percentage Label (Inside Progress Bar) */}
    <p className="absolute inset-0 flex justify-center items-center text-black text-sm font-semibold">
      {progressPercentage}% {/* ✅ Displays percentage */}
    </p>
  </div>

  {/* Workout Level Label */}
  <p className="mt-4 text-white text-sm font-semibold text-center">
    {selectedLevel 
      ? `${workoutLevels.find(l => l.id === selectedLevel)?.name} Level`
      : "Select a level"}
  </p>
</div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {workoutLevels.map((level) => (
                      <WorkoutLevelCard
                        key={level.id}
                        level={level.name}
                        description={level.description}
                        icon={level.icon}
                        daysPerWeek={level.daysPerWeek}
                        isSelected={selectedLevel === level.id}
                        onSelect={() => handleLevelSelect(level.id)}
                      />
                    ))}
                  </div>

                  <div className="mt-10 flex justify-center items-center">
                  <Button
  size="lg"
  onPress={handleViewWorkoutPlan}
  isDisabled={!selectedLevel}
  startContent={<Icon icon="lucide:clipboard-check" className="w-6 h-6" />}
  className="px-10 py-6 text-lg font-semibold shadow-lg text-white 
             bg-gradient-to-r from-blue-500 to-cyan-500 
             hover:from-blue-600 hover:to-cyan-600 
             flex items-center justify-center gap-4 rounded-full"
  radius="full"
>
  View Your Workout Plan
</Button>

                  </div>
                </div>
              </Tab>

              <Tab 
                key="workout-plan" 
                title={
                  <div className="flex items-center text-2xl gap-2">
                    <Icon icon="lucide:calendar" />
                    <span className="text-3xl font-extralight">Workout Plan</span>
                  </div>
                }
              >
                {selectedWorkoutPlan ? (
                  <div className="p-6">
                    <Card className="shadow-md bg-gradient-to-r from-gray-900 to-gray-800 mb-8 border border-gray-700">
                      <CardHeader>
                        <div className="flex justify-between items-center w-full">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary-900/50 rounded-full">
                              <Icon 
                                icon={workoutLevels.find(l => l.id === selectedLevel)?.icon || "lucide:dumbbell"} 
                                className="text-3xl text-primary-400"
                              />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-white">
                                {workoutLevels.find(l => l.id === selectedLevel)?.name} Workout Plan
                              </h2>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Icon icon="lucide:calendar" />
                                <p>
                                  {workoutLevels.find(l => l.id === selectedLevel)?.daysPerWeek} days per week
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="flat"
                            color="primary"
                            startContent={<Icon icon="lucide:arrow-left" />}
                            onPress={handleBackToAssessment}
                            radius="full"
                          >
                            Back to Assessment
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>

                    {!showWorkoutPlan ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="p-4 bg-primary-900/30 rounded-full mb-6">
                          <Icon icon="lucide:file-text" className="text-6xl text-primary-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Ready to see your workout plan?</h3>
                        <p className="text-gray-300 mb-8 max-w-lg">
                          We have prepared a customized {workoutLevels.find(l => l.id === selectedLevel)?.name.toLowerCase()} 
                          workout plan for you with {workoutLevels.find(l => l.id === selectedLevel)?.daysPerWeek} days 
                          of targeted exercises.
                        </p>
                        <Button
  size="lg"
  onPress={handleShowWorkoutPlan}
  startContent={<Icon icon="lucide:eye" className="w-6 h-6" />}
  className="px-10 py-6 text-lg font-semibold shadow-lg text-white 
             bg-gradient-to-r from-blue-500 to-cyan-500 
             hover:from-blue-600 hover:to-cyan-600 
             flex items-center justify-center gap-4 rounded-full"
  radius="full"
>
  View Your Workout Plan
</Button>

                      </div>
                    ) : (
                      <>
  {/* 🏋️ Weekly Schedule Header */}
  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
    <Icon icon="lucide:calendar-days" className="text-primary-400 text-3xl" />
    Weekly Schedule
  </h3>

  {/* 📅 Weekly Schedule Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {selectedWorkoutPlan.schedule.map((day, index) => (
      <WorkoutScheduleCard key={index} day={day} />
    ))}
  </div>

  <Divider className="my-10 bg-gray-700 opacity-50" />

  {/* 💡 Tips for Success */}
  <div className="mt-10 space-y-8">
    <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
      <Icon icon="lucide:lightbulb" className="text-yellow-400 text-3xl" />
      Tips for Success
    </h3>

    {/* 📝 Tips Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "lucide:dumbbell", color: "success", title: "Perfect Your Form", desc: "Start with lighter weights to master proper technique" },
        { icon: "lucide:trending-up", color: "primary", title: "Progressive Overload", desc: "Gradually increase weight as you get stronger" },
        { icon: "lucide:droplets", color: "warning", title: "Stay Hydrated", desc: "Drink plenty of water and get adequate protein" },
        { icon: "lucide:bed", color: "secondary", title: "Rest Properly", desc: "Allow 48 hours between training the same muscle group" },
        { icon: "lucide:clipboard-list", color: "danger", title: "Track Progress", desc: "Keep a workout journal to stay motivated" },
      ].map((tip, index) => (
        <Card key={index} className={`bg-gray-900 border-${tip.color}-700 border hover:scale-105 transition-transform duration-300`}>
          <CardBody className="flex items-start gap-4">
            <div className={`p-3 bg-${tip.color}-900 rounded-full`}>
              <Icon icon={tip.icon} className={`text-${tip.color}-400 text-2xl`} />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">{tip.title}</p>
              <p className="text-sm text-gray-400">{tip.desc}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>

    {/* 📌 Personalized Guidance Section */}
    <Card className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white mt-10 shadow-xl border-none">
      <CardBody className="p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-4 bg-white/10 rounded-full">
            <Icon icon="lucide:user" className="text-4xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white mb-3">Need personalized guidance?</h4>
            <p className="text-white/80 mb-5">
              Book a session with one of our certified personal trainers for a customized workout plan tailored to your specific goals and needs.
            </p>
            
            <Button 
          color="warning" 
          variant="solid" 
          endContent={<Icon icon="lucide:arrow-right" className="text-lg" />}
          radius="full"
          className="px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          onPress={handleBookTrainer} 
        >
          Book a Trainer
        </Button>


          </div>
        </div>
      </CardBody>
    </Card>
  </div>
</>

                    )}
                  </div>
                ) : (
                  <div className="p-6">
                    <Card className="shadow-md bg-gray-800 border-gray-700">
                      <CardBody className="flex flex-col items-center justify-center py-16">
                        <div className="p-4 bg-warning-900 rounded-full mb-4">
                          <Icon icon="lucide:alert-circle" className="text-5xl text-warning-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">No Workout Plan Selected</h3>
                        <p className="text-gray-400 mb-6 text-center max-w-md">
                          Please complete the assessment first by selecting your experience level
                        </p>
                        <Button 
                          color="primary" 
                          onPress={handleBackToAssessment}
                          size="lg"
                          radius="full"
                          startContent={<Icon icon="lucide:arrow-left" />}
                        >
                          Go to Assessment
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
        
        <footer className="text-center text-gray-500 mt-12 pb-6">
          <p className="text-sm mt-1">Consult with a physician before beginning any exercise program.</p>
        </footer>
      </div>

      {/* Ensure Modal is rendered globally */}
      {isBookTrainerModalOpen && (
  <div className="fixed inset-0 top-10 flex items-center justify-center z-50">
    <BookTrainerModal isOpen={isBookTrainerModalOpen} onOpenChange={setIsBookTrainerModalOpen} />
  </div>
)}


    </div>
  );
}