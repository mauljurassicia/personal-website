"use client";

import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
} as const;

export default function HeroDetail() {
  return (
    <motion.section
      className="px-[5%]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={cardVariants}>
        <Card className="w-full max-w-6xl mx-auto p-8">
          {/* flex column on mobile → row on sm+ */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* square photo on the left */}
            <img
              src="/my-photo.jpg"          /* replace with actual path */
              alt="My photo"
              className="w-40 h-40 object-cover border-4 border-black"
            />

            {/* text block on the right */}
            <div className="text-center sm:text-left space-y-4 flex-1">
              <h2 className="text-4xl font-bold tracking-tight">
                Hi, I'm a Nutrient&nbsp;Tech&nbsp;Explorer
              </h2>
              <p className="text-muted-foreground w-full">
                I'm a nutrition student working hard to meet life’s demands. I chose coding as a way to
                earn and grow — and now I’m exploring how technology can elevate health and nutrition. My
                mission: combine the science of nourishment with the power of code.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
}
