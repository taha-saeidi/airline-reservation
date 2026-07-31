"use client";

import { motion } from "framer-motion";

export default function BeautyPassport() {
  return (
    <section id="passport" className="mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            پاسپورت زیبایی
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-snug text-ink md:text-4xl">
            یک حافظه‌ی شخصی، برای هر تصمیم زیبایی.
          </h2>
          <p className="mt-5 max-w-md leading-8 text-ink-muted">
            هر رنگی که زده‌اید، هر محصولی که روی پوستتان امتحان شده، در
            پاسپورت زیبایی شما ثبت می‌ماند؛ تا هر متخصص جدید هم دقیقاً بداند
            از کجا شروع کند.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-sm leading-7 text-ink-soft">
                تاریخچه‌ی کامل خدمات و محصولات استفاده‌شده
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-sm leading-7 text-ink-soft">
                پیشنهادهای هوشمند بر اساس سلیقه و سابقه‌ی شما
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-sm leading-7 text-ink-soft">
                همراه شما در هر سالن، نه فقط یک مکان
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Signature: passport pass card, inspired by Apple Wallet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-[1.5rem] bg-ink shadow-cardHover">
            <div className="foil-edge h-1.5 w-full" />
            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-cream/60">
                  ARA PASSPORT
                </span>
                <span className="h-2 w-2 rounded-full bg-gold-soft" />
              </div>

              <p className="mt-8 text-lg font-medium text-cream">
                نگار احمدی
              </p>
              <p className="mt-1 text-xs text-cream/50">عضو از فروردین ۱۴۰۳</p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-cream/10 pt-6">
                <div>
                  <p className="text-xs text-cream/50">آخرین خدمت</p>
                  <p className="mt-1 text-sm text-cream">بالیاژ گرم</p>
                </div>
                <div>
                  <p className="text-xs text-cream/50">سالن ثابت</p>
                  <p className="mt-1 text-sm text-cream">استودیو لومیر</p>
                </div>
                <div>
                  <p className="text-xs text-cream/50">تعداد خدمات</p>
                  <p className="mt-1 text-sm text-cream">۱۴ مورد</p>
                </div>
                <div>
                  <p className="text-xs text-cream/50">سطح</p>
                  <p className="mt-1 text-sm text-gold-soft">طلایی</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
