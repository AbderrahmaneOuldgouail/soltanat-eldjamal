import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en",
          fr: process.env.SITE_URL + "/fr",
          ar: process.env.SITE_URL + "/ar",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/omra",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/omra",
          fr: process.env.SITE_URL + "/fr/omra",
          ar: process.env.SITE_URL + "/ar/omra",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/hadj",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/hadj",
          fr: process.env.SITE_URL + "/fr/hadj",
          ar: process.env.SITE_URL + "/ar/hadj",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/organized-trips",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/organized-trips",
          fr: process.env.SITE_URL + "/fr/organized-trips",
          ar: process.env.SITE_URL + "/ar/organized-trips",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/airline-tickets",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/airline-tickets",
          fr: process.env.SITE_URL + "/fr/airline-tickets",
          ar: process.env.SITE_URL + "/ar/airline-tickets",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/hotel-reservations",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/hotel-reservations",
          fr: process.env.SITE_URL + "/fr/hotel-reservations",
          ar: process.env.SITE_URL + "/ar/hotel-reservations",
        },
      },
    },
  ];
}
