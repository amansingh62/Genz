"use client"

import type { ReactNode } from "react"

interface AnimatedBorderProps {
  children: ReactNode
}

export function AnimatedBorder({ children }: AnimatedBorderProps) {
  return (
    <div className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-size-200 animate-gradient">
      <div className="bg-black rounded-lg overflow-hidden">{children}</div>
    </div>
  )
}

