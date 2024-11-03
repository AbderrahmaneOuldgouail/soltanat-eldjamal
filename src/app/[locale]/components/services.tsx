import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

import AirlineTicket from "@/app/[locale]/services/airline-tickets/assets/logo.png";
import Omra from "@/app/[locale]/services/omra/assets/logo.png";
import Hadj from "@/app/[locale]/services/hadj/assets/logo.png";
import HotelBooking from "@/app/[locale]/services/hotel-reservations/assets/logo.png";
import OrganizedTrip from "@/app/[locale]/services/organized-trips/assets/logo.png";
import Image, { StaticImageData } from "next/image";

const services = [
  {
    slug: "omra",
    img: Omra,
  },
  {
    slug: "hadj",
    img: Hadj,
  },
  {
    slug: "organized-trips",
    img: OrganizedTrip,
  },
  {
    slug: "airline-tickets",
    img: AirlineTicket,
  },
  {
    slug: "hotel-reservations",
    img: HotelBooking,
  },
];

export default function Services() {
  const t = useTranslations();

  return (
    <section id="services" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("servicesTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} slug={service.slug} img={service.img} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ slug, img }: { slug: string; img: StaticImageData }) {
  const m = useTranslations();
  const t = useTranslations(`services.${slug}`);

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
      <Image
        src={img}
        alt={`image ${t("name")}`}
        className="w-full h-52 object-cover object-top"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{t("name")}</h3>
        <p className="text-muted-foreground mb-4">{t("description")}</p>
        <div className="flex justify-center">
          <Link href={`/services/${slug}`} passHref>
            <Button variant="outline">{m("viewService")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
