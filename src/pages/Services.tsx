import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import hero from "@/assets/hero.jpg";
import pt from "@/assets/pt.jpg";
import pilates from "@/assets/pilates.jpg";
import yoga from "@/assets/yoga.jpg";
import recovery from "@/assets/recovery.jpg";
import physio from "@/assets/physio.jpg";
import prenatal from "@/assets/prenatal.jpg";

const items = [
  { eyebrow: "01", title: "Personal Training", to: "/services/personal-training", image: pt, description: "One-to-one coaching, programmed for the long term." },
  { eyebrow: "02", title: "Pilates", to: "/services/pilates", image: pilates, description: "Reformer, mat and 1:1 sessions." },
  { eyebrow: "03", title: "Yoga", to: "/services/yoga", image: yoga, description: "Vinyasa, slow flow and mobility." },
  { eyebrow: "04", title: "Recovery", to: "/services/recovery", image: recovery, description: "Red light sauna, cold plunge and rituals." },
  { eyebrow: "05", title: "Physiotherapy & Massage", to: "/services/physiotherapy", image: physio, description: "Assessment, rehab and sports massage." },
  { eyebrow: "06", title: "Pre & Post Natal", to: "/services/pre-post-natal", image: prenatal, description: "Specialist care through every trimester." },
];

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
        {items.map((i) => <ServiceCard key={i.to} {...i} />)}
      </div>
    </section>
    <FinalCta />
  </SiteLayout>
);

export default Services;
