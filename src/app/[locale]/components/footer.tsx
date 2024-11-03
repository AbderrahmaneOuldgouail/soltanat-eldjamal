import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-muted">
      <div className="container flex justify-between mx-auto px-4 py-8 text-center">
        <a href="https://duobix.com" target="_blank" className="text-muted-foreground hover:text-primary">By Duobix Software</a>
        <p>
          &copy; {new Date().getFullYear()} {t("name")}. {t("footer")}
        </p>
      </div>
    </footer>
  );
}
