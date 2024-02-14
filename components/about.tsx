"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a computer science student who is deeply passionate about exploring the intersection of technology and global
problem-solving. My primary interests lie in artificial intelligence that address real-world challenges and contribute to
achieving Sustainable Development Goals (SDGs). To further enrich my knowledge and broaden my horizons, I love to
collaborate with fellow innovative minds, exchange ideas, and hone both my problem solving and communication skills in
global scale.
      </p>
    </motion.section>
  );
}
