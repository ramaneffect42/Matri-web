"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { IPhoneMockup } from "@/components/iphone-mockup"
import { ChevronLeft, ChevronRight } from "lucide-react"

const devices = [
  { id: "stages", variant: "stages" as const },
  { id: "dashboard", variant: "dashboard" as const },
  { id: "therapy", variant: "therapy" as const },
]

export function DeviceCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)
  const total = devices.length

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + total) % total)
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % total)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [total])

  return (
    <div className="w-full">
      <div className="relative mx-auto h-[610px] w-full max-w-[780px] overflow-hidden">
        {devices.map((device, index) => {
          const offset = index - activeIndex
          const isActive = offset === 0
          const xOffset = offset * 210

          return (
            <motion.button
              key={device.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-0 p-0"
              animate={{
                x: xOffset,
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <IPhoneMockup
                variant={device.variant}
                className={isActive ? "shadow-2xl shadow-primary/30" : "shadow-none"}
              />
            </motion.button>
          )
        })}

        <button
          type="button"
          onClick={goPrev}
          aria-label="Show previous phone screen"
          className="absolute left-1 top-1/2 z-30 h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-background/85 text-foreground shadow-md backdrop-blur-sm hover:bg-background md:left-10"
        >
          <ChevronLeft className="mx-auto h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Show next phone screen"
          className="absolute right-1 top-1/2 z-30 h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-background/85 text-foreground shadow-md backdrop-blur-sm hover:bg-background md:right-10"
        >
          <ChevronRight className="mx-auto h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
