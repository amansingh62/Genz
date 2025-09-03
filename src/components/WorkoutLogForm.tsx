import React from "react";
import { Card, CardBody, Input, Button, Select, SelectItem, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface WorkoutLogFormProps {
  onSubmit: (data: WorkoutLogData) => void;
}

export interface WorkoutLogData {
  date: string;
  exercise: string;
  weight: string;
  sets: string;
  reps: string;
  notes: string;
}

export function WorkoutLogForm({ onSubmit }: WorkoutLogFormProps) {
  const [formData, setFormData] = React.useState<WorkoutLogData>({
    date: "",
    exercise: "",
    weight: "",
    sets: "",
    reps: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: "",
      exercise: "",
      weight: "",
      sets: "",
      reps: "",
      notes: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExerciseChange = (selected: Set<string>) => {
    const selectedExercise = Array.from(selected)[0] || ""; // ✅ Extract value from Set
    setFormData((prev) => ({
      ...prev,
      exercise: selectedExercise,
    }));
  };

  const exercises = ["Bench Press", "Squats", "Deadlifts", "Pull-ups", "Push-ups", "Shoulder Press"];

  return (
    <Card className="bg-gray-900/70 border border-white/20 shadow-lg backdrop-blur-lg text-white p-8 rounded-xl w-full">
      <CardBody>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Log Your Workout</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workout Date Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm font-medium">Workout Date</label>
            <div className="w-full h-[50px] border-2 border-gray-600 rounded-md flex items-center">
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                isRequired
                className="w-full h-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
          </div>

          {/* Exercise Selection - FIXED */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm font-medium">Select Exercise</label>
            <div className="w-full h-[50px] border-2 border-gray-600 rounded-md flex items-center">
              <Select
                name="exercise"
                selectedKeys={new Set([formData.exercise])} // ✅ Fix: Explicitly set selected value
                onSelectionChange={handleExerciseChange} // ✅ Fix: Ensure state updates correctly
                isRequired
                className="w-full h-full cursor-pointer px-4 py-1 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              >
                {exercises.map((exercise) => (
                  <SelectItem key={exercise} value={exercise}>
                    {exercise}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          {/* Weight Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm font-medium">Weight (kg)</label>
            <div className="w-full h-[50px] border-2 border-gray-600 rounded-md flex items-center">
              <Input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                isRequired
                className="w-full h-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
          </div>

          {/* Sets Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm font-medium">Number of Sets</label>
            <div className="w-full h-[50px] border-2 border-gray-600 rounded-md flex items-center">
              <Input
                type="number"
                name="sets"
                value={formData.sets}
                onChange={handleChange}
                isRequired
                className="w-full h-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
          </div>

          {/* Reps Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm font-medium">Repetitions (Reps)</label>
            <div className="w-full h-[50px] border-2 border-gray-600 rounded-md flex items-center">
              <Input
                type="number"
                name="reps"
                value={formData.reps}
                onChange={handleChange}
                isRequired
                className="w-full h-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
          </div>

          {/* Notes Section */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-gray-400 text-sm font-medium">Workout Notes (Optional)</label>
            <div className="w-full min-h-[100px] border-2 border-gray-600 rounded-md flex items-center">
              <Textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full h-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-8">
  <Button
    type="submit"
    className="py-3 px-6 w-full bg-gradient-to-r from-blue-500 to-cyan-400 
               hover:from-cyan-400 hover:to-blue-500 text-white font-semibold 
               shadow-lg rounded-lg transition-all flex items-center justify-center gap-2"
  >
    <Icon icon="lucide:plus" className="text-xl" />
    <span className="text-lg">Log Workout</span>
  </Button>
</div>

        </form>
      </CardBody>
    </Card>
  );
}
