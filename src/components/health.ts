export interface DietBenefit {
    id: string;
    title: string;
    description: string;
    benefits: string[];
    warnings: string[];
  }
  
  export interface HealthCondition {
    id: string;
    name: string;
    description: string;
    recommendedDiets: string[];
    avoidFoods: string[];
    keyNutrients: string[];
    researchSummary: string;
  }
  
  export interface DietComparison {
    dietType: string;
    benefits: string[];
    risks: string[];
    conditions: string[];
    keyFeatures: string[];
    researchFindings: string;
  }
  