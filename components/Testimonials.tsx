"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <div className="mb-14 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            تجربه‌ی واقعی
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            آن‌چه دیگران درباره‌ی آرا می‌گویند.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <blockquote className="text-sm leading-8 text-ink-soft">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/[0.06] pt-4">
                <p className="text-sm font-medium text-ink">{item.name}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
