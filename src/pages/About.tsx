import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero-about.jpg";
import studio from "@/assets/studio.jpg";
import samJeal from "@/assets/sam-jeal.jpg";
import neilHagerty from "@/assets/neil-hagerty.jpg";

const founders: { name: string; role: string; photo?: string }[] = [
  { name: "Sam Jeal", role: "Founder", photo: samJeal },
  { name: "Neil Hagerty", role: "Founder", photo: neilHagerty },
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
          <img src={studio} loading="lazy" className="aspect-[4/3] w-full object-cover rounded-3xl" alt="The studio" />
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
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">The Founders</p>
          <h2 className="display text-4xl md:text-5xl mt-6">Meet the <span className="italic-accent">Founders</span>.</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Sam and Neil met in 2012, working side by side at the same personal training company. A shared
              philosophy — and a stubborn belief in the long game — turned a friendship into a partnership.
            </p>
            <p>
              Their first business, Guardians PT, opened over eight years ago. More than 85% of those original
              clients still train with them today. For Sam and Neil, coaching has always been a long-term
              commitment — a journey shared with the people who walk through the door.
            </p>
            <p>
              Guardians Studio is the next chapter: a space where considered personal training meets the
              energy of a community, with a hand-picked team of coaches and therapists who share the same
              standards.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl">
          {founders.map((m) => (
            <article key={m.name} className="flex items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-surface-deep rounded-2xl overflow-hidden">
                {m.photo && (
                  <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover object-top" />
                )}
              </div>
              <div>
                <p className="eyebrow">{m.role}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">{m.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

export default About;
