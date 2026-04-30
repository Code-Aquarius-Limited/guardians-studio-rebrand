import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";

const team = [
  { name: "Alex Carter", role: "Head of Coaching", spec: "Strength & longevity" },
  { name: "Mara Lin", role: "Lead Pilates Instructor", spec: "Reformer · pre & post natal" },
  { name: "Daniel Reyes", role: "Physiotherapist", spec: "Sports rehab & manual therapy" },
  { name: "Iris Bennett", role: "Yoga & Mobility", spec: "Vinyasa, breath, mobility" },
];

const About = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="A studio built around"
        italic="people."
        intro="Guardians Studio was founded on a simple idea: training, recovery and care belong together. We are a small team of coaches, therapists and instructors building a space we'd want to train in for the rest of our lives."
        image={hero}
      />

      <section className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="display text-4xl md:text-5xl mt-6">Train for the next <span className="italic-accent">forty</span> years.</h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>We don't believe in punishment, hacks or before-and-afters. We believe in considered work, returned to often, in good company.</p>
          <p>Our coaching is rooted in longevity — strength that lasts, mobility you can rely on, and recovery that lets you keep showing up.</p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-36">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={studio} loading="lazy" className="aspect-[4/3] w-full object-cover" alt="The studio" />
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2 className="display text-4xl md:text-5xl mt-6">Coaching and recovery, <span className="italic-accent">together</span>.</h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Every member starts with an assessment. From there we build a programme that integrates training,
              pilates, mobility and recovery — under one roof, with a team that talks to each other.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-36">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow">The Team</p>
            <h2 className="display text-4xl md:text-5xl mt-6">Meet the <span className="italic-accent">Guardians</span>.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {team.map((m) => (
            <article key={m.name} className="bg-background p-8 md:p-10">
              <div className="aspect-[4/5] bg-surface-deep mb-6" />
              <p className="eyebrow">{m.role}</p>
              <h3 className="font-serif text-3xl mt-3">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{m.spec}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

export default About;
