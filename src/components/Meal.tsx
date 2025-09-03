export interface Nutrient {
    protein: number;
    carbs: number;
    fats: number;
  }
  
  export interface Meal {
    id: string;
    name: string;
    description: string;
    calories: number;
    nutrients: Nutrient;
    image: string;
    mealType: "breakfast" | "lunch" | "dinner";
    dietType: "keto" | "vegan" | "paleo";
  }
  
  // Type-safe MealPlan object
  export type MealPlan = Record<"breakfast" | "lunch" | "dinner", Meal>;
  