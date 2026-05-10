import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero-team.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Member = { name: string; role: string; photo?: string };

const groups: { n: string; section: string; discipline: string; members: Member[] }[] = [
  {
    n: "01",
    section: "Strength & Performance",
    discipline: "Personal Trainers",
    members: [
      { name: "Sam Jeal", role: "Master Trainer" },
      { name: "Neil Hagerty", role: "Master Trainer" },
      { name: "Joe West", role: "Senior Trainer" },
      { name: "Martina Xuerab", role: "Senior Trainer" },
      { name: "Dan Sharrock", role: "Trainer" },
      { name: "Blair Robertson", role: "Trainer" },
      { name: "Kate Read", role: "Trainer" },
    ],
  },
  {
    n: "02",
    section: "Reformer & Mat",
    discipline: "Pilates Instructors",
    members: [
      { name: "Kate Read", role: "Instructor" },
      { name: "Verity Wright", role: "Instructor" },
      { name: "Deniz Kotan", role: "Instructor" },
      { name: "Merci Cope", role: "Instructor" },
      { name: "Kandace Smith", role: "Instructor" },
      { name: "Tom Sutton", role: "Instructor" },
    ],
  },
  {
    n: "03",
    section: "Recovery",
    discipline: "Massage Therapists",
    members: [
      { name: "Martina Xuerab", role: "Therapist" },
      { name: "Merci Cope", role: "Therapist" },
    ],
  },
  {
    n: "04",
    section: "Clinical",
    discipline: "Physiotherapist",
    members: [
      { name: "To be announced", role: "Physiotherapist" },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
        <div key={g.n} className="space-y-10">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">{g.n} — {g.section}</p>
              <h2 className="display text-4xl md:text-5xl mt-6">
                <span className="italic-accent">{g.discipline}</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {g.members.map((m) => (
              <article
                key={m.name + m.role}
                className="group border border-border bg-card overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <Avatar className="h-full w-full rounded-none">
                    {m.photo && <AvatarImage src={m.photo} alt={m.name} className="object-cover" />}
                    <AvatarFallback className="rounded-none h-full w-full text-3xl font-serif text-muted-foreground bg-muted">
                      {initials(m.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="p-5">
                  <p className="eyebrow text-xs">{m.role}</p>
                  <h3 className="font-serif text-xl md:text-2xl mt-2">{m.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>

    <FinalCta />
  </SiteLayout>
);

export default Team;
