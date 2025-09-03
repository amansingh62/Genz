"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedText({
  text,
  className = "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = text

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        setTypingSpeed(150)
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        setTypingSpeed(75)
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTimeout(() => {}, 500)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, text, typingSpeed])

  return (
    <h1 className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

