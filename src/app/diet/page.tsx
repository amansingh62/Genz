import DietHealthInsights from "@/components/DietHealthInsights";
import { DietPlans } from "@/components/DietPlans";
import DietTitle from "@/components/DietTitle";
import MealPlan from "@/components/MealPlan";
import Myths from "@/components/Myths";

export default function Diet() {
  return (
   <>
    <DietTitle />
    <DietPlans />
    <DietHealthInsights />
    <MealPlan />
    <Myths />
   </>
  ) 
}