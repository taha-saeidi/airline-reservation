"use client";

import { motion } from "framer-motion";
import { TRUST_POINTS, TRUST_STATS } from "@/lib/constants";

export default function Trust() {
  return (
    <section className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold leading-snug text-ink md:text-4xl">
            هر نوبت، پشت یک بررسی دقیق است.
          </h2>
          <p className="mt-5 max-w-md leading-8 text-ink-muted">
            آرا هر سالن و متخصص را پیش از پیوستن بررسی می‌کند؛ چون اعتماد شما
            چیزی نیست که بشود با تخفیف یا تبلیغ جایگزینش کرد.
          </p>

          <div className="mt-10 space-y-7">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="border-r-2 border-gold-line pr-5">
                <h3 className="font-medium text-ink">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-muted">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-5 self-start rounded-xl2 bg-cream-deep p-8 md:p-10"
        >
          {TRUST_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
