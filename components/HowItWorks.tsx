"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 md:mb-16">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          مسیر ساده
        </span>
        <h2 className="mt-3 max-w-lg text-3xl font-semibold text-ink md:text-4xl">
          از جست‌وجو تا نتیجه، چهار قدم ساده.
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {HOW_IT_WORKS.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="relative"
          >
            <span className="text-sm font-medium text-gold">
              {String(index + 1).padStart(2, "۰")}
            </span>
            <h3 className="mt-4 text-base font-medium text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              {step.description}
            </p>
            {index < HOW_IT_WORKS.length - 1 && (
              <div className="hairline mt-8 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
