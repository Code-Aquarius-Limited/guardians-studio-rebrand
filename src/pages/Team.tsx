import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero.jpg";

const groups = [
  {
    n: "01",
    section: "Strength & Performance",
    discipline: "Personal Trainers",
    tiers: [
      { label: "Master Trainers", names: ["Sam Jeal", "Neil Hagerty"] },
      { label: "Senior Trainers", names: ["Joe West", "Martina Xuerab"] },
      { label: "Trainers", names: ["Dan Sharrock", "Blair Robertson", "Kate Read"] },
    ],
  },
  {
    n: "02",
    section: "Reformer & Mat",
    discipline: "Pilates Instructors",
    tiers: [
      { label: "Instructors", names: ["Kate Read", "Verity Wright", "Deniz Kotan", "Merci Cope", "Kandace Smith", "Tom Sutton"] },
    ],
  },
  {
    n: "03",
    section: "Recovery",
    discipline: "Massage Therapists",
    tiers: [
      { label: "Therapists", names: ["Martina Xuerab", "Merci Cope"] },
    ],
  },
  {
    n: "04",
    section: "Clinical",
    discipline: "Physiotherapist",
    tiers: [
      { label: "Physiotherapist", names: ["To be announced"] },
    ],
  },
];

const Team = () => (
  <SiteLayout>
    <PageHero
      eyebrow="The Team"
      title="Meet the people behind"
      italic="Guardians."
      intro="The trainers, instructors and therapists who shape every session at Guardians Studios — Camden, Belsize Park, London."
      image={hero}
    />

    <section className="container-x py-24 md:py-32 space-y-24">
      {groups.map((g) => (
        <div key={g.n} className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="eyebrow">{g.n} — {g.section}</p>
            <h2 className="display text-4xl md:text-5xl mt-6">
              <span className="italic-accent">{g.discipline}</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {g.tiers.map((t) => (
              <div key={t.label}>
                <p className="eyebrow mb-5">{t.label}</p>
                <ul className="divide-y divide-border border-y border-border">
                  {t.names.map((n) => (
                    <li key={n} className="py-5 font-serif text-2xl md:text-3xl">{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

    <FinalCta />
  </SiteLayout>
);

export default Team;
