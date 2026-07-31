"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 md:mb-16">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          سوالات متداول
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          هرچه لازم است بدانید.
        </h2>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-right"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-ink">
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold-line text-gold transition-transform duration-300 ease-smooth ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-8 text-ink-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
