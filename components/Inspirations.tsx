"use client";

import { motion } from "framer-motion";
import { INSPIRATIONS } from "@/lib/constants";

export default function Inspirations() {
  return (
    <section id="inspirations" className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 md:mb-16">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          الهام‌های امروز
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          چیزی که این هفته دوست خواهید داشت.
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INSPIRATIONS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            className="group cursor-pointer overflow-hidden rounded-2xl"
          >
            <div
              className={`${item.photo} aspect-[3/4] w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.04]`}
            />
            <div className="pt-4">
              <p className="text-xs text-gold">{item.tag}</p>
              <p className="mt-1.5 text-sm font-medium leading-6 text-ink">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
