import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations();

  return (
    <section id="hero" className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-2/3">
          <h2 className="text-4xl font-extrabold mb-2">{t("name")}</h2>
          <p className="text-xl text-muted-foreground mb-4">{t("tagline")}</p>
          <p className="text-lg mb-4">{t("intro")}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              className="transition-transform duration-300 hover:scale-95 cursor-default"
              variant={"secondary"}
            >
              {t("organized trips")}
            </Badge>
            <Badge
              className="transition-transform duration-300 hover:scale-95 cursor-default"
              variant={"secondary"}
            >
              {t("omra")}
            </Badge>
            <Badge
              className="transition-transform duration-300 hover:scale-95 cursor-default"
              variant={"secondary"}
            >
              {t("hadj")}
            </Badge>
            <Badge
              className="transition-transform duration-300 hover:scale-95 cursor-default"
              variant={"secondary"}
            >
              {t("airline tickets")}
            </Badge>
            <Badge
              className="transition-transform duration-300 hover:scale-95 cursor-default"
              variant={"secondary"}
            >
              {t("hotel reservations")}
            </Badge>
          </div>
          <div className="flex items-center gap-2 mt-16">
            <Link href="/#contact">
              <Button className="transition-transform duration-300 hover:scale-125">
                <Mail className="mr-2 h-4 w-4" /> {t("callToAction")}
              </Button>
            </Link>
          </div>
        </div>
        <img
          src={Logo.src}
          alt="Logo"
          className="w-64 h-64 md:w-96 md:h-96 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
}
