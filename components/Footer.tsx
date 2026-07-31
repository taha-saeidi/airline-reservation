import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-wrap px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="text-2xl font-semibold text-cream">آرا</span>
            <p className="mt-4 max-w-xs text-sm leading-7">
              همراه دائمی سفر زیبایی شما؛ از اولین نوبت تا هر تصمیمی که بعد از
              آن می‌گیرید.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">
              کاوش
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">
              همکاری
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-cream">
                  پیوستن سالن‌ها
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cream">
                  فرصت‌های شغلی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">
              ارتباط
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:hello@ara.beauty" className="hover:text-cream">
                  hello@ara.beauty
                </a>
              </li>
              <li>
                <a href="tel:+982100000000" className="hover:text-cream">
                  ۰۲۱-۰۰۰۰۰۰۰
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} آرا. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream/70">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-cream/70">
              قوانین استفاده
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
