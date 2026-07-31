"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            خدمات
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            هرچه لازم دارید، در یک سقف.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-ink-muted">
          از رنگ مو تا مراقبت پوست؛ هر خدمت را از میان متخصصانی انتخاب کنید
          که آرا آن‌ها را بررسی کرده است.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            className="group rounded-2xl border border-ink/[0.06] bg-white/60 p-7 shadow-card transition-shadow duration-300 ease-smooth hover:shadow-cardHover"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-deep transition-colors duration-300 group-hover:bg-gold/15">
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
