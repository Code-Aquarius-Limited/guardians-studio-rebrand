import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import hero from "@/assets/hero.jpg";
import { allServices } from "./services/index";

const Services = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Services"
      title="Fitness, recovery and"
      italic="wellbeing."
      intro="A complete suite of tailored services — from one-to-one coaching to specialist recovery and pre & post natal care."
      image={hero}
    />
    <section className="container-x py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {allServices.map((s, i) => (
          <ServiceCard
            key={s.slug}
            eyebrow={String(i + 1).padStart(2, "0")}
            title={s.title}
            to={`/services/${s.slug}`}
            image={s.image}
            description={s.description}
          />
        ))}
      </div>
    </section>
    <FinalCta />
  </SiteLayout>
);

export default Services;
