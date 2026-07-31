"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-tightPersian text-ink">
            آرا
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-gold sm:inline-block" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#services"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream transition-transform duration-300 ease-smooth hover:scale-[1.03] hover:bg-gold"
          >
            رزرو نوبت
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="باز کردن منو"
          aria-expanded={isMenuOpen}
        >
          <span className="h-[1.5px] w-6 bg-ink" />
          <span className="h-[1.5px] w-6 bg-ink" />
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-gold-line/60 bg-cream px-6 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-ink-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-block rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream"
              >
                رزرو نوبت
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
