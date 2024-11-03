import Hero from "@/app/[locale]/components/hero";
import About from "@/app/[locale]/components/about";
import Services from "@/app/[locale]/components/services";
import Contact from "@/app/[locale]/components/contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
