import React from "react";
import { Card, CardBody, CardFooter, Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface DietPlanProps {
  title: string;
  description: string;
  calories: number;
  meals: number;
  type: string;
  index: number;
  onViewPlan: () => void;
}

export function DietPlanCard({
    title,
    description,
    calories,
    meals,
    type,
    index,
    onViewPlan,
  }: DietPlanProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Card className="bg-gradient-to-r from-black to-gray-900 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300">
          <CardBody className="gap-4 p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <Badge color="primary" variant="flat" className="px-4 py-1 rounded-full text-sm">
                {type}
              </Badge>
            </div>
            <p className="text-gray-300 text-sm">{description}</p>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:flame" className="text-orange-400" />
                <span className="text-gray-200">{calories} kcal</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:utensils" className="text-blue-400" />
                <span className="text-gray-200">{meals} meals</span>
              </div>
            </div>
          </CardBody>
          <CardFooter className="p-4">
            <Button
              color="primary"
              variant="ghost"
              endContent={<Icon icon="lucide:arrow-right" />}
              className="w-full py-3 font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-l rounded-2xl hover:text-white transition-colors"
              onPress={onViewPlan}
            >
              View Plan
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }
  
