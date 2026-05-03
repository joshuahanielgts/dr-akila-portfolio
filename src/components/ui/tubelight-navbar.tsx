"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = items.map(item => {
        if (item.url.startsWith("#")) {
          return document.querySelector(item.url)
        }
        return null
      })

      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentSectionName: string | null = null
      
      sectionElements.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect()
          const absoluteTop = rect.top + window.scrollY
          if (scrollPosition >= absoluteTop) {
            currentSectionName = items[index].name
          }
        }
      })

      setActiveTab(currentSectionName)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeItem = items.find((item) => item.url === `#${entry.target.id}`)
            if (activeItem) {
              setActiveTab(activeItem.name)
            }
          }
        })
      },
      { rootMargin: "-30% 0px -70% 0px" }
    )

    items.forEach((item) => {
      if (item.url.startsWith("#")) {
        const element = document.querySelector(item.url)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className={cn("relative z-50", className)}>
      <div className="flex items-center gap-1 bg-background/5 border border-border/40 backdrop-blur-md py-1 px-1 rounded-full shadow-sm">
        {items.map((item) => {
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-1.5 rounded-full transition-colors",
                "text-foreground/70 hover:text-primary",
                isActive && "text-primary",
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-t-full">
                    <div className="absolute w-8 h-4 bg-primary/20 rounded-full blur-md -top-2 -left-1" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
