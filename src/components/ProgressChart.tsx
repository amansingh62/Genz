import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ProgressChartProps {
  data: Array<{
    date: string;
    weight: number;
  }>;
  exercise: string;
}

export function ProgressChart({ data, exercise }: ProgressChartProps) {
  return (
    <Card className="w-full h-[450px] bg-gray-900 border border-white/20 shadow-lg rounded-xl">
      <CardHeader className="font-bold text-lg text-white px-6 py-4">
        📈 Progress Chart - <span className="text-blue-400">{exercise}</span>
      </CardHeader>
      <CardBody className="p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
            {/* ✅ Added Grid for better visibility */}
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />

            {/* ✅ Improved Axis Styling */}
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.7)" 
              tick={{ fill: "white" }} 
              tickLine={false} 
              axisLine={{ stroke: "rgba(255,255,255,0.5)" }} 
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)" 
              tick={{ fill: "white" }} 
              tickLine={false} 
              axisLine={{ stroke: "rgba(255,255,255,0.5)" }} 
            />

            {/* ✅ Enhanced Tooltip for better readability */}
            <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.85)", 
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                borderRadius: "8px",
                padding: "10px",
              }}
              labelStyle={{ color: "white", fontWeight: "bold" }}
            />

            {/* ✅ Added a Legend */}
            <Legend wrapperStyle={{ color: "white" }} />

            {/* ✅ Enhanced Line Chart with Gradient */}
            <defs>
              <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00BFFF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#006FEE" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="url(#colorWeight)" 
              strokeWidth={3} 
              dot={{ fill: "#00BFFF", r: 4 }} 
              activeDot={{ r: 6, strokeWidth: 2, stroke: "#FFF" }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
