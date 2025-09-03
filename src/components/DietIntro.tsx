import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function DietIntro() {
  const scrollToPlans = () => {
    document.getElementById('diet-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation Circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '10%', left: '20%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: '10%', right: '20%' }}
      />

      <Card className="bg-black/40 border-none shadow-xl backdrop-blur-sm max-w-4xl relative z-10">
        <CardBody className="text-center space-y-8 p-8 md:p-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Transform Your Body
              <br />
              Transform Your Life
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Discover personalized nutrition plans designed to help you achieve your fitness goals.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-800 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm"
            >
              <Icon icon="lucide:target" className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Customized Plans</h3>
              <p className="text-gray-400">Nutrition plans tailored to your body type and goals</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-800 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm"
            >
              <Icon icon="lucide:activity" className="text-5xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Science-Backed</h3>
              <p className="text-gray-400">Research-based nutrition strategies for optimal results</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-800 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm"
            >
              <Icon icon="lucide:refresh-ccw" className="text-5xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Approach</h3>
              <p className="text-gray-400">Sustainable meal plans that adapt to your lifestyle</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center mt-12"
          >
            <Button 
              size="lg"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              onPress={scrollToPlans}
              className="text-lg"
            >
              Explore Diet Plans
            </Button>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
}