import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero-team.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Member = { name: string; role: string; photo?: string };

const bios: Record<string, string> = {
  "Neil Hagerty":
    "Neil is one of the Co-Founders and driving forces behind Guardians Studios. As the Co-Director he has over 16 years of experience in the fitness industry, he has worked with clients from all walks of life, from children preparing for sports day to celebrities training for film roles. He specialises in fat loss and muscle building and says “clients usually ask for both.” His coaching is built on experience, energy and a genuine commitment to helping every client achieve their goals in a way that feels both personal and sustainable.",
  "Sam Jeal":
    "As Co-Founder and Co-Director of Guardians Studios, Sam plays a central role in shaping the vision, standards and culture of the business. Sam specialises in strength and conditioning and with a degree in Sports Science, he brings a strong understanding of performance, movement and effective training principles, with his thourough approach helping clients work towards lasting results in a way that is both intelligent and varied. Sam’s style combines technical knowledge with a genuine passion for helping people feel stronger, move better and perform at their best.",
  "Joe West":
    "Joe is the Head of Personal Training at Guardians Studios, bringing over 15 years of experience in the fitness industry. With a particular strength in strength training, when Joe isn’t lugging round heavy weights or consuming protein, he’s known for finding the right approach for every client, helping each individual build confidence, progress consistently and achieve lasting results. His coaching combines experience, structure and energy, with a focus on helping clients get stronger, move better and train with purpose.",
  "Martina Xuerab":
    "Martina is Head of Wellness at Guardians Studios, with a background in athletics and recovery Martina is known for her abilities in rehabilitation and being a qualified masseuse adds another skill set to her impressive cv. Our longest-serving trainer and a former athlete herself, she brings a deeply performance-led approach to coaching and recovery, working with everyone from everyday clients to athletes. As a strength and conditioning coach, Martina has a strong understanding of what it takes to train, recover and perform at a high level. Her coaching style blends expertise, care and commitment, helping clients feel stronger, move better to perform at their best.",
  "Blair Robertson":
    "Blair is a Level 4 trainer at Guardians Studios with expertise in strength and conditioning, nutrition, and pre and postnatal training. Alongside his work in fitness, Blair is also an accomplished actor and entertainer, bringing a warm, engaging energy to every session, having trained many of his cast members Blair knows how to fuse strength with movement. He is particularly passionate about helping clients train in a way that feels effective, supportive and sustainable, whether they are building strength, improving overall health, or returning to exercise through pregnancy and motherhood.",
  "Kate Read":
    "Kate is a qualified Personal Trainer and Pilates instructor, specialising in both mat and reformer Pilates, with additional qualifications in pre and postnatal training across both PT and Pilates. With a coaching style centred around movement, body balance and alignment, Kate helps clients build strength, control and confidence. Thanks to her broad skill set, she can be found across all floors of Guardians Studios, which means wherever you are training, there is a good chance Kate is not far away. Her approach is calm, knowledgeable and highly adaptable, supporting everyone from new mums to seasoned clients looking to move and feel better.",
  "Dan Sharrock":
    "Dan is an accomplished Personal Trainer at Guardians Studios, known for bringing energy, positivity and a friendly approach to every session. With a background in the entertainment industry, he brings confidence, presence and a great sense of engagement to the gym floor, and can occasionally be spotted testing out a few dance moves along the way. Specialising in fat loss and flexibility, Dan helps clients train in a way that feels effective and enjoyable, building results while keeping movement and confidence at the centre of the process.",
};

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
