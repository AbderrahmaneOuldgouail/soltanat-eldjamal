import "../globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { useLocale } from "next-intl";
import Navbar from "@/app/[locale]/components/navbar";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL(process.env.SITE_URL!),
    title: t("title"),
    description: t("description"),
    keywords:
      "وكالة سفر, باقات السفر, أفضل عروض السفر, احجز رحلتك, السفر والسياحة, سفر بأسعار معقولة, سفر مخصص, باقات العطلات, استكشف العالم, خبراء السفر, باقات الحج, خدمات الحج والعمرة, السفر إلى المملكة العربية السعودية, وكالة سفر موثوقة, Agence de Voyage, Forfaits Voyage,Meilleures Offres de Voyage,Réservez Votre Voyage,Voyage et Tourisme,Voyage Abordable,Voyage Personnalisé,Forfaits Vacances,Explorez le Monde,Experts en Voyage,Forfaits Hajj,Forfaits Umrah,Agence de Voyage Hajj et Umrah,Réservez le Voyage pour le Hajj,Réservez le Voyage pour l'Umrah,Services Hajj et Umrah,Voyage de Pèlerinage,Forfaits Voyage Spirituels,Réservation d'Hôtel,Réservation de Vol,Billets d'Avion,Vols Abordables,Réservation d'Hébergement,Services d'Assistance Voyage,Planification de Vacances,Voyage Mondial,Voyage au Moyen-Orient,Pèlerinage Musulman,Voyage en Arabie Saoudite,Contactez-Nous,Explorez Nos Services,Agence de Voyage Fiable,Assistance Professionnelle en Voyage,Réservation Sereine",
    applicationName: "Travel agency website",
    authors: {
      name: "Soltanat El Djamal",
      url: "https://soltanat-eldjamal.vercel.app",
    },
    generator: "Next.js",
    creator: "Duobix",
    robots: "index, follow",
    openGraph: {
      siteName: "Soltanat El Djamal",
      title: t("title"),
      description: t("og-description"),
      type: "website",
      url: "https://soltanat-eldjamal.vercel.app",
      images: t("preview-image"),
    },
    alternates: {
      canonical: "https://soltanat-eldjamal.vercel.app",
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta
          name="google-site-verification"
          content="yOZjx0tfJnSMoBstTi-z9hjnbeuy3EwSmWCT--g5Axg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
