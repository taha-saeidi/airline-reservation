"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-wrap items-center gap-14 px-6 md:grid-cols-2 md:gap-10 md:px-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-gold-line bg-cream-deep px-4 py-1.5 text-xs text-ink-soft">
            یک شروع تازه برای زیبایی
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.3] tracking-tightPersian text-ink md:text-[3.4rem] md:leading-[1.25]">
            زیبایی شما، یک سفر است.
            <br />
            <span className="text-gold">آرا</span> همراه همیشگی آن.
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-ink-muted md:text-lg">
            رزرو نوبت از بهترین سالن‌ها و کلینیک‌های زیبایی، حالا با حافظه‌ای
            که هیچ‌وقت فراموش نمی‌کند چه چیزی به شما می‌آید.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-transform duration-300 ease-smooth hover:scale-[1.03] hover:bg-gold"
            >
              همین حالا نوبت بگیرید
            </a>
            <a
              href="#passport"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              آشنایی با پاسپورت زیبایی
            </a>
          </div>
        </motion.div>

        {/* Photography + passport preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="photo-hero relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-card md:aspect-[3/4]">
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-cream/85 p-4 backdrop-blur-sm md:inset-x-8 md:bottom-8">
              <p className="text-xs text-ink-muted">نوبت بعدی شما</p>
              <p className="mt-1 text-sm font-medium text-ink">
                رنگ و بالیاژ · استودیو لومیر
              </p>
            </div>
          </div>

          {/* Small Beauty Passport teaser card — intentionally modest in scale */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="absolute -bottom-8 -right-4 w-52 rounded-2xl border border-gold-line/70 bg-cream p-4 shadow-cardHover md:-right-8 md:w-60"
          >
            <div className="foil-edge h-1 w-10 rounded-full" />
            <p className="mt-3 text-[0.7rem] text-ink-muted">پاسپورت زیبایی</p>
            <p className="mt-1 text-sm font-medium text-ink">نگار احمدی</p>
            <p className="mt-2 text-[0.7rem] text-ink-muted">
              ۱۴ خدمت ثبت‌شده · از ۲۰۲۴
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
