import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { LangSwitcher } from "@/components/common/LangSwitcher";
import Logo from "@/assets/logo/logo.png";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="flex gap-2 justify-center items-center">
          <img
            src={Logo.src}
            alt="Logo"
            className="w-10 h-10 object-cover transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-2xl font-bold">{t("name")}</h1>
        </span>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex gap-4 rtl:me-4">
            <li>
              <Link href="/#hero" className="hover:text-primary">
                {t("nav.hero")}
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-primary">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-primary">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-primary">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
          <LangSwitcher />
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="hover:text-primary">
                {t("nav.hero")}
              </a>
              <a href="#about" className="hover:text-primary">
                {t("nav.about")}
              </a>
              <a href="#services" className="hover:text-primary">
                {t("nav.services")}
              </a>
              <a href="#contact" className="hover:text-primary">
                {t("nav.contact")}
              </a>
            </nav>
            <div className="mt-4 space-y-4 flex justify-end">
              <LangSwitcher
                trigger={
                  <Button variant="ghost" size="sm">
                    <Globe className="ltr:mr-2 ml-2 h-4 w-4" />
                    {locale === "en"
                      ? "English"
                      : locale === "fr"
                      ? "Français"
                      : "العربية"}
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
