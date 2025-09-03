"use client"

import { Twitter, Github, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      color: "bg-[#1DA1F2] hover:bg-[#1a94e0]",
      connected: false,
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      color: "bg-[#333] hover:bg-[#24292e]",
      connected: true,
    },
    {
      name: "Discord",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-[#5865F2] hover:bg-[#4a56d6]",
      connected: false,
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="default"
          size="sm"
          className={`${link.color} gap-2 ${link.connected ? "ring-2 ring-green-500 ring-offset-2 ring-offset-black" : ""}`}
        >
          {link.icon}
          <span>{link.connected ? "Connected" : `Connect ${link.name}`}</span>
        </Button>
      ))}
    </div>
  )
}

