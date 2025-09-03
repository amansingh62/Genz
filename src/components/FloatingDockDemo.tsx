"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
} from "@tabler/icons-react";
import { Icon } from "@iconify/react"; // ✅ Import Iconify for custom icons
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />, // FORCED WHITE ICON
      href: "/",
    },
    {
      title: "Workouts",
      icon: <Icon icon="lucide:dumbbell" className="h-full w-full text-white" />, // ✅ Updated Workout Icon
      href: "/workout",
    },
    {
      title: "Diet",
      icon: <Icon icon="lucide:leaf" className="h-full w-full text-white" />, // ✅ Added Diet Icon
      href: "/diet",
    },
    {
      title: "AI",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/ai",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-white" />, // FORCED WHITE ICON
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />, // FORCED WHITE ICON
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />, // FORCED WHITE ICON
      href: "#",
    },
    {
      title: "Profile",
      icon: <Icon icon="lucide:user-circle" className="h-full w-full text-white" />, // ✅ Added Profile Icon
      href: "/profile",
    },
  ];

  return (
    <div className="top-0 left-0 w-full bg-black text-white shadow-md flex items-center justify-center h-16 z-50">
      <FloatingDock mobileClassName="translate-y-0" items={links} />
    </div>
  );
}
