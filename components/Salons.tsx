"use client";

import { motion } from "framer-motion";
import { SALONS } from "@/lib/constants";

export default function Salons() {
  return (
    <section id="salons" className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <div className="mb-14 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            سالن‌های منتخب
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            جایی برای هر سلیقه‌ای.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SALONS.map((salon, index) => (
            <motion.a
              href="#"
              key={salon.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="group block overflow-hidden rounded-xl2 bg-white shadow-card transition-shadow duration-300 ease-smooth hover:shadow-cardHover"
            >
              <div
                className={`${salon.photo} aspect-[4/3] w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.03]`}
              />
              <div className="p-6">
                <p className="text-xs text-gold">{salon.tag}</p>
                <h3 className="mt-2 text-lg font-medium text-ink">
                  {salon.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{salon.location}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
