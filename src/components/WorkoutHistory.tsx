import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { WorkoutLogData } from "@/components/WorkoutLogForm";

interface WorkoutHistoryProps {
  logs: WorkoutLogData[];
}

export function WorkoutHistory({ logs }: WorkoutHistoryProps) {
  return (
    <div className="w-full overflow-x-auto">
      <Table
        aria-label="Workout history"
        classNames={{
          base: "bg-gray-900/80 border border-white/20 shadow-lg rounded-lg backdrop-blur-lg",
          th: "text-white/70 text-sm uppercase tracking-wide bg-gray-800/40 px-4 py-3",
          td: "text-white px-4 py-3",
        }}
      >
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Exercise</TableColumn>
          <TableColumn>Weight</TableColumn>
          <TableColumn>Sets</TableColumn>
          <TableColumn>Reps</TableColumn>
          <TableColumn>Notes</TableColumn>
        </TableHeader>

        <TableBody>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <TableRow key={index} className="hover:bg-gray-800/50 transition-all">
                <TableCell className="text-white/80 font-medium">{log.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:dumbbell" className="text-blue-400 text-lg" />
                    <span className="text-white/90">{log.exercise}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Chip color="primary" variant="flat" className="px-3 py-1 text-white/90">
                    {log.weight} kg
                  </Chip>
                </TableCell>
                <TableCell className="text-white/80 font-medium">{log.sets}</TableCell>
                <TableCell className="text-white/80 font-medium">{log.reps}</TableCell>
                <TableCell className="text-white/60 italic">{log.notes || "—"}</TableCell>
              </TableRow>
            ))
          ) : (
            /** ✅ Fix: Now using 6 separate TableCell elements */
            <TableRow>
              <TableCell className="text-center text-white/60 py-4">—</TableCell>
              <TableCell className="text-center text-white/60 py-4">—</TableCell>
              <TableCell className="text-center text-white/60 py-4">No workouts logged</TableCell>
              <TableCell className="text-center text-white/60 py-4">—</TableCell>
              <TableCell className="text-center text-white/60 py-4">—</TableCell>
              <TableCell className="text-center text-white/60 py-4">—</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
