import FAQSection from "@/components/FAQSection";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkoutAssessment from "@/components/WorkoutAssessment";
import { WorkoutDashboard } from "@/components/WorkoutDashboard";
import WorkoutTitle from "@/components/WorkoutTitle";
 // Import the component

export default function Workout() {
  return (
    <>
    <WorkoutTitle />
    <WorkoutAssessment />
    <WorkoutDashboard />
    <WhyChooseUs />
    <SuccessStories />
    <FAQSection />
    </>
  ) 
}
