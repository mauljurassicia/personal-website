"use client";

import React, { JSX } from "react";
import { Dot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react"; // ⬅️ add Motion

type TimelineContent = {
  date: string;
  title: string;
  content: string;
};

const timelineContents: TimelineContent[] = [
  {
    date: "2019",
    title: "High-School Graduate",
    content:
      "Finished high school with no clear direction yet—but an eagerness to find my path.",
  },
  {
    date: "Mid 2019",
    title: "Entered Nutrition Program",
    content:
      "Enrolled at university as a Nutrition student, fascinated by the science of food and health.",
  },
  {
    date: "2020 – 2021",
    title: "The COVID-19 Disruption",
    content:
      "Classes went fully online. While coping with lockdowns, I started tinkering with code and discovered Python tutorials on YouTube.",
  },
  {
    date: "2022",
    title: "Growing Passion for Coding",
    content:
      "Built small Python scripts and toy projects. Realized programming could become both a skill and a livelihood.",
  },
  {
    date: "Early 2023",
    title: "Paused University • Doubled-Down on Tech",
    content:
      "Financial reality forced a study break. I dedicated my time to intensive self-learning—HTML, CSS, JavaScript, and React.",
  },
  {
    date: "October 2023",
    title: "First Developer Role",
    content:
      "Landed my first job as a programmer. Turned late-night coding sessions into a professional career start.",
  },
  {
    date: "2025",
    title: "Back to Campus & Helping UMKM",
    content:
      "Resumed my Nutrition studies while using my coding skills to digitize local UMKM businesses—bridging health knowledge with tech solutions.",
  },
];

export default function Timeline(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen font-sans antialiased text-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight leading-tight">
          My Journey Through Time
        </h2>

        <div className="relative pl-6 sm:pl-10">
          {/* ─── vertical line animates scaleY ─── */}
          <motion.div
            className="absolute left-[11px] sm:left-[21px] top-0 bottom-0 w-[8px]
             bg-[repeating-linear-gradient(135deg,_black_0_8px,_white_8px_16px)]
             animate-[stripeMove_1s_linear_infinite]
             border-2 border-black shadow-[3px_3px_0_#000]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {timelineContents.map((content, index) => (
            <motion.div
              key={index}
              className="mb-10 flex items-start last:mb-0 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {/* dot with pop-in scale */}
              <motion.div
                className="absolute top-0 -translate-x-1/2 left-[11px] sm:left-[21px] z-10"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="w-7 h-7 bg-black border-2 border-white shadow-[4px_4px_0_#000] flex items-center justify-center">
                  <Dot className="w-3 h-3 text-white" />
                </div>
              </motion.div>

              {/* content card */}
              <Card className="flex flex-col ml-8 sm:ml-12 p-5 w-full">
                <span className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider leading-none">
                  {content.date}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {content.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {content.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
