export interface WorkoutLevel {
    id: string;
    name: string;
    description: string;
    icon: string;
    daysPerWeek: number;
  }
  
  export interface Exercise {
    name: string;
    sets: number;
    reps: string;
    rest: string;
  }
  
  export interface WorkoutDay {
    day: string;
    focus: string;
    exercises: Exercise[];
  }
  
  export interface WorkoutPlan {
    levelId: string;
    schedule: WorkoutDay[];
  }
  
  export const workoutLevels: WorkoutLevel[] = [
    {
      id: "beginner",
      name: "Beginner",
      description: "Perfect for those new to fitness or returning after a long break. Focus on form and building basic strength.",
      icon: "lucide:baby",
      daysPerWeek: 3,
    },
    {
      id: "intermediate",
      name: "Intermediate",
      description: "For those with some training experience. More volume and intensity to build strength and muscle.",
      icon: "lucide:user",
      daysPerWeek: 4,
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "For experienced lifters. High volume, intensity, and exercise variety for maximum results.",
      icon: "lucide:dumbbell",
      daysPerWeek: 5,
    },
  ];
  
  export const workoutPlans: Record<string, WorkoutPlan> = {
    beginner: {
      levelId: "beginner",
      schedule: [
        {
          day: "Monday",
          focus: "Full Body",
          exercises: [
            {
              name: "Bodyweight Squats",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Push-ups (or Knee Push-ups)",
              sets: 3,
              reps: "8-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Dumbbell Rows",
              sets: 3,
              reps: "10-12 reps per arm",
              rest: "60 seconds",
            },
            {
              name: "Plank",
              sets: 3,
              reps: "20-30 seconds",
              rest: "45 seconds",
            },
          ],
        },
        {
          day: "Wednesday",
          focus: "Full Body",
          exercises: [
            {
              name: "Dumbbell Lunges",
              sets: 3,
              reps: "10 reps per leg",
              rest: "60 seconds",
            },
            {
              name: "Dumbbell Shoulder Press",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Assisted Pull-ups or Lat Pulldowns",
              sets: 3,
              reps: "8-10 reps",
              rest: "60 seconds",
            },
            {
              name: "Bicycle Crunches",
              sets: 3,
              reps: "12-15 reps per side",
              rest: "45 seconds",
            },
          ],
        },
        {
          day: "Friday",
          focus: "Full Body",
          exercises: [
            {
              name: "Goblet Squats",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Incline Dumbbell Press",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Dumbbell Deadlifts",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Russian Twists",
              sets: 3,
              reps: "12-15 reps per side",
              rest: "45 seconds",
            },
          ],
        },
      ],
    },
    intermediate: {
      levelId: "intermediate",
      schedule: [
        {
          day: "Monday",
          focus: "Chest & Triceps",
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Incline Dumbbell Press",
              sets: 3,
              reps: "10-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Cable Flyes",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Tricep Dips",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Tricep Pushdowns",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Tuesday",
          focus: "Back & Biceps",
          exercises: [
            {
              name: "Pull-ups",
              sets: 4,
              reps: "6-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Bent Over Barbell Rows",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Seated Cable Rows",
              sets: 3,
              reps: "10-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Barbell Curls",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
            {
              name: "Hammer Curls",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Thursday",
          focus: "Legs",
          exercises: [
            {
              name: "Barbell Squats",
              sets: 4,
              reps: "8-10 reps",
              rest: "120 seconds",
            },
            {
              name: "Romanian Deadlifts",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Leg Press",
              sets: 3,
              reps: "10-12 reps",
              rest: "90 seconds",
            },
            {
              name: "Walking Lunges",
              sets: 3,
              reps: "12 reps per leg",
              rest: "75 seconds",
            },
            {
              name: "Calf Raises",
              sets: 4,
              reps: "15-20 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Friday",
          focus: "Shoulders & Core",
          exercises: [
            {
              name: "Overhead Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Lateral Raises",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Face Pulls",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Hanging Leg Raises",
              sets: 3,
              reps: "10-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Plank Variations",
              sets: 3,
              reps: "45-60 seconds",
              rest: "45 seconds",
            },
          ],
        },
      ],
    },
    advanced: {
      levelId: "advanced",
      schedule: [
        {
          day: "Monday",
          focus: "Chest & Triceps",
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: 5,
              reps: "5-8 reps",
              rest: "120 seconds",
            },
            {
              name: "Incline Dumbbell Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Weighted Dips",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Cable Flyes",
              sets: 3,
              reps: "10-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Skull Crushers",
              sets: 4,
              reps: "8-10 reps",
              rest: "75 seconds",
            },
            {
              name: "Tricep Pushdowns (Drop Sets)",
              sets: 3,
              reps: "12-15-20 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Tuesday",
          focus: "Back & Biceps",
          exercises: [
            {
              name: "Weighted Pull-ups",
              sets: 5,
              reps: "5-8 reps",
              rest: "120 seconds",
            },
            {
              name: "Deadlifts",
              sets: 5,
              reps: "5-8 reps",
              rest: "180 seconds",
            },
            {
              name: "Barbell Rows",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Single-Arm Dumbbell Rows",
              sets: 3,
              reps: "10-12 reps per arm",
              rest: "75 seconds",
            },
            {
              name: "Barbell Curls",
              sets: 4,
              reps: "8-10 reps",
              rest: "75 seconds",
            },
            {
              name: "Incline Dumbbell Curls",
              sets: 3,
              reps: "10-12 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Wednesday",
          focus: "Legs",
          exercises: [
            {
              name: "Barbell Squats",
              sets: 5,
              reps: "5-8 reps",
              rest: "180 seconds",
            },
            {
              name: "Leg Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "120 seconds",
            },
            {
              name: "Romanian Deadlifts",
              sets: 4,
              reps: "8-10 reps",
              rest: "120 seconds",
            },
            {
              name: "Walking Lunges with Weights",
              sets: 3,
              reps: "12 reps per leg",
              rest: "90 seconds",
            },
            {
              name: "Leg Extensions",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Seated Calf Raises",
              sets: 4,
              reps: "15-20 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Thursday",
          focus: "Shoulders & Abs",
          exercises: [
            {
              name: "Overhead Press",
              sets: 5,
              reps: "5-8 reps",
              rest: "120 seconds",
            },
            {
              name: "Seated Dumbbell Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Lateral Raises",
              sets: 4,
              reps: "10-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Face Pulls",
              sets: 3,
              reps: "12-15 reps",
              rest: "75 seconds",
            },
            {
              name: "Weighted Hanging Leg Raises",
              sets: 4,
              reps: "10-15 reps",
              rest: "75 seconds",
            },
            {
              name: "Cable Crunches",
              sets: 4,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
          ],
        },
        {
          day: "Friday",
          focus: "Arms & Weakpoints",
          exercises: [
            {
              name: "Close-Grip Bench Press",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "EZ Bar Curls",
              sets: 4,
              reps: "8-10 reps",
              rest: "90 seconds",
            },
            {
              name: "Dips",
              sets: 4,
              reps: "8-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Preacher Curls",
              sets: 3,
              reps: "10-12 reps",
              rest: "75 seconds",
            },
            {
              name: "Tricep Overhead Extensions",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
            {
              name: "Concentration Curls",
              sets: 3,
              reps: "12-15 reps",
              rest: "60 seconds",
            },
          ],
        },
      ],
    },
  };
  