import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface DietPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    title: string;
    description: string;
    calories: number;
    meals: number;
    type: string;
    mealPlan?: {
      time: string;
      meal: string;
      calories: number;
    }[]; 
  };
}

export function DietPlanModal({ isOpen, onClose, plan }: DietPlanModalProps) {
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    goals: ""
  });

  // Default meal plan if none exists in the 'plan' prop
  const defaultMealPlan = [
    { time: "8:00 AM", meal: "Breakfast", calories: Math.round(plan.calories * 0.25) },
    { time: "11:00 AM", meal: "Snack", calories: Math.round(plan.calories * 0.15) },
    { time: "1:00 PM", meal: "Lunch", calories: Math.round(plan.calories * 0.3) },
    { time: "4:00 PM", meal: "Pre-workout", calories: Math.round(plan.calories * 0.1) },
    { time: "7:00 PM", meal: "Dinner", calories: Math.round(plan.calories * 0.2) },
  ];

  const mealPlan = plan.mealPlan || defaultMealPlan;

  // Handle the click for getting the full plan (opens the form)
  const handleGetFullPlan = () => {
    setShowForm(true); // This will show the form
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted form data:", formData);
    alert("Thank you! Your personalized plan will be sent to your email.");
    setShowForm(false); // Close the form
    onClose(); // Close the modal
  };

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle textarea change for the fitness goals input
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form when modal is closed
  const handleModalClose = () => {
    setShowForm(false); // Reset form state when modal is closed
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} size="2xl" scrollBehavior="inside">
    <ModalContent className="bg-gray-900 text-white transition-all duration-300 ease-in-out">
      {showForm ? (
        <>
          {/* Show the form when the user clicks "Get Full Plan" */}
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-gray-200">Get Your Personalized Plan</h2>
            <p className="text-sm text-gray-400">Fill in your details to receive your customized {plan.title} plan</p>
          </ModalHeader>
          <Divider />
          <ModalBody className="gap-6 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-400 text-sm">Full Name</label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800 text-white placeholder-gray-500 border-gray-700 p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800 text-white placeholder-gray-500 border-gray-700 p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-gray-400 text-sm">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-800 text-white placeholder-gray-500 border-gray-700 p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="goals" className="text-gray-400 text-sm">Your Fitness Goals</label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your fitness goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleTextareaChange}
                  className="bg-gray-800 text-white placeholder-gray-500 border-gray-700 p-3 rounded-lg"
                />
              </div>
            </div>
          </ModalBody>
          <Divider />
          <ModalFooter className="space-x-4">
            <Button
              color="light"
              variant="outline"
              onPress={() => setShowForm(false)}
              className="border-2 border-gray-700 text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-700 transition-all duration-300 px-6 py-2 rounded-lg"
            >
              Back
            </Button>
  
            <Button
              color="primary"
              onPress={handleSubmit}
              className="border-2 border-blue-500 text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 px-6 py-2 rounded-lg"
            >
              Submit
            </Button>
          </ModalFooter>
        </>
      ) : (
        <>
          {/* Show the diet plan details when the form is not active */}
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-gray-200">{plan.title}</h2>
            <p className="text-sm text-gray-400">{plan.description}</p>
          </ModalHeader>
          <Divider />
          <ModalBody>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:flame" className="text-orange-500" />
                  <span className="text-gray-200">Daily Calories: {plan.calories}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:utensils" className="text-blue-500" />
                  <span className="text-gray-200">Meals per Day: {plan.meals}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">Daily Meal Schedule</h3>
                {mealPlan.map((meal, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-150">
                    <div>
                      <p className="font-medium text-gray-200">{meal.time}</p>
                      <p className="text-sm text-gray-400">{meal.meal}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:flame" className="text-orange-500" />
                      <span>{meal.calories} kcal</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ModalBody>
          <Divider />
          <ModalFooter className="space-x-4">
            <Button
              color="light"
              variant="outline"
              onPress={handleModalClose}
              className="border-2 border-gray-700 text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-700 transition-all duration-300 px-6 py-2 rounded-lg"
            >
              Close
            </Button>
  
            <Button
              color="primary"
              onPress={handleGetFullPlan}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:bg-gradient-to-l transition duration-200 rounded-lg"
            >
              Get Full Plan
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  
  );
}
