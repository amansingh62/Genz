import { HealthCondition, DietComparison } from '@/components/health';

export const healthConditions: HealthCondition[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    description: "A metabolic disorder affecting blood sugar regulation",
    recommendedDiets: [
      "Low-glycemic diet",
      "Mediterranean diet",
      "Controlled-carb ketogenic diet"
    ],
    avoidFoods: [
      "Refined sugars",
      "Processed carbohydrates",
      "Sugary beverages"
    ],
    keyNutrients: [
      "Fiber",
      "Omega-3 fatty acids",
      "Chromium",
      "Magnesium"
    ],
    researchSummary: "Studies show that low-glycemic diets can improve insulin sensitivity and help manage blood sugar levels effectively."
  },
  {
    id: "hypertension",
    name: "Hypertension",
    description: "High blood pressure condition affecting cardiovascular health",
    recommendedDiets: [
      "DASH diet",
      "Mediterranean diet",
      "Low-sodium plans"
    ],
    avoidFoods: [
      "Excess sodium",
      "Processed foods",
      "Alcohol"
    ],
    keyNutrients: [
      "Potassium",
      "Magnesium",
      "Calcium",
      "Omega-3s"
    ],
    researchSummary: "The DASH diet has been proven to lower blood pressure as effectively as some medications in certain cases."
  },
  {
    id: "pcos",
    name: "PCOS",
    description: "Polycystic ovary syndrome - a hormonal disorder",
    recommendedDiets: [
      "Low-glycemic diet",
      "Anti-inflammatory diet",
      "Mediterranean diet"
    ],
    avoidFoods: [
      "Refined carbohydrates",
      "Sugary foods",
      "Inflammatory foods"
    ],
    keyNutrients: [
      "Vitamin D",
      "Omega-3s",
      "Chromium",
      "Inositol"
    ],
    researchSummary: "Diet and lifestyle modifications can improve hormone balance and reduce PCOS symptoms significantly."
  },
  {
    id: "gut-health",
    name: "Gut Health",
    description: "Digestive system health and microbiome balance",
    recommendedDiets: [
      "High-fiber diet",
      "Probiotic-rich foods",
      "Mediterranean diet"
    ],
    avoidFoods: [
      "Processed foods",
      "Excess sugar",
      "Artificial sweeteners"
    ],
    keyNutrients: [
      "Fiber",
      "Probiotics",
      "Prebiotics",
      "Zinc"
    ],
    researchSummary: "A diverse, fiber-rich diet promotes beneficial gut bacteria and improved digestive health."
  }
];

export const dietComparisons: DietComparison[] = [
  {
    dietType: "Ketogenic",
    benefits: [
      "Rapid weight loss",
      "Blood sugar control",
      "Reduced inflammation",
      "Improved mental clarity"
    ],
    risks: [
      "Nutrient deficiencies",
      "Kidney strain",
      "Initial adaptation period"
    ],
    conditions: [
      "Epilepsy",
      "Type 2 diabetes",
      "Obesity"
    ],
    keyFeatures: [
      "Very low carb (20-50g/day)",
      "High fat (70-80% of calories)",
      "Moderate protein"
    ],
    researchFindings: "Clinical studies show significant benefits for epilepsy management and potential therapeutic applications for various neurological conditions."
  },
  {
    dietType: "Vegan",
    benefits: [
      "Lower heart disease risk",
      "Reduced cancer risk",
      "Environmental sustainability",
      "Lower inflammation"
    ],
    risks: [
      "B12 deficiency",
      "Iron deficiency",
      "Protein planning needed"
    ],
    conditions: [
      "Heart disease",
      "High cholesterol",
      "Some cancers"
    ],
    keyFeatures: [
      "Plant-based only",
      "High in fiber",
      "Rich in antioxidants"
    ],
    researchFindings: "Large-scale studies indicate lower rates of heart disease and certain cancers among vegan populations."
  },
  {
    dietType: "Mediterranean",
    benefits: [
      "Heart health",
      "Brain health",
      "Longevity",
      "Sustainable weight management"
    ],
    risks: [
      "Few risks noted",
      "Higher cost possible",
      "Portion control needed"
    ],
    conditions: [
      "Cardiovascular disease",
      "Diabetes",
      "Cognitive decline"
    ],
    keyFeatures: [
      "Plant-focused",
      "Healthy fats",
      "Moderate wine",
      "Limited red meat"
    ],
    researchFindings: "Extensive research shows benefits for cardiovascular health, cognitive function, and overall longevity."
  }
];
