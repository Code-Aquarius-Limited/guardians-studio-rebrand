import ServicePage from "@/components/ServicePage";
import pt from "@/assets/pt.jpg";
import pilates from "@/assets/pilates.jpg";
import pilatesLight from "@/assets/pilates-light.jpg";
import reformer from "@/assets/reformer.jpg";
import recovery from "@/assets/recovery.jpg";
import physio from "@/assets/physio.jpg";
import physiotherapy from "@/assets/physiotherapy.jpg";
import coldPlunge from "@/assets/cold-plunge.jpg";
import redLightSauna from "@/assets/red-light-sauna.jpg";
import yoga from "@/assets/yoga.jpg";
import prenatal from "@/assets/prenatal.jpg";

export const allServices = [
  { slug: "personal-training", title: "Personal Training", image: pt, description: "One-to-one coaching, programmed for the long term." },
  { slug: "pilates-1-1", title: "Pilates 1:1", image: pilatesLight, description: "Private sessions with senior pilates instructors." },
  { slug: "reformer-pilates", title: "Reformer Pilates", image: reformer, description: "Spring-loaded strength, control and precision." },
  { slug: "mat-pilates", title: "Mat Pilates", image: pilates, description: "Classical mat work for strength and mobility." },
  { slug: "pre-post-natal-pilates", title: "Pre & Post Natal Pilates", image: prenatal, description: "Specialist pilates through every trimester." },
  { slug: "yoga", title: "Yoga", image: yoga, description: "Vinyasa, slow flow and mobility-led classes." },
  { slug: "massage", title: "Massage", image: physio, description: "Sports and deep tissue massage with our therapists." },
  { slug: "physiotherapy", title: "Physiotherapy", image: physiotherapy, description: "Assessment, rehab and clinical care." },
  { slug: "red-light-sauna", title: "Red Light Sauna", image: recovery, description: "Heat, light and stillness for circulation and repair." },
  { slug: "cold-plunge", title: "Cold Plunge Therapy", image: coldPlunge, description: "A daily ritual for recovery, focus and resilience." },
];

const related = (slugs: string[]) =>
  slugs.map((s) => {
    const r = allServices.find((x) => x.slug === s)!;
    return { title: r.title, to: `/services/${r.slug}`, image: r.image };
  });

export const PersonalTraining = () => (
  <ServicePage
    eyebrow="Personal Training"
    title="One-to-one coaching in"
    italic="Hampstead."
    hero={pt}
    intro="Programmed, considered training. Strength, conditioning and mobility — coached one-to-one and built around your life."
    what="Personal training at Guardians is a long-term partnership. You'll be assessed, programmed for and coached by the same person each week — with the rest of our team supporting you when you need recovery, physio or pilates."
    benefits={["Strength that lasts", "Mobility & resilience", "Smarter conditioning", "Confidence in how you move"]}
    whoFor={["Members new to structured training", "Returners after injury or pregnancy", "Athletes seeking sharper programming", "Anyone training for the next forty years"]}
    expect={[
      { t: "Assessment", d: "Movement screen, history and goals." },
      { t: "Programme", d: "A plan you can return to weekly, refined as you grow." },
      { t: "Coaching", d: "1:1 sessions in the studio with your dedicated coach." },
      { t: "Recovery", d: "Integrated with our recovery and physio team." },
    ]}
    related={related(["reformer-pilates", "physiotherapy", "red-light-sauna"])}
  />
);

export const Pilates11 = () => (
  <ServicePage
    eyebrow="Pilates 1:1"
    title="Private pilates,"
    italic="programmed."
    hero={pilatesLight}
    intro="One-to-one pilates with a senior instructor — fully tailored to your body, goals and history."
    what="Pilates 1:1 is the most direct route into the practice. You'll work with the same instructor each week, on reformer or mat, with a programme built and refined entirely around you."
    benefits={["Fully tailored programming", "Faster progression", "Rehab-friendly", "Deep technical coaching"]}
    whoFor={["First-time clients", "Members rehabbing from injury", "Pre and post natal clients", "Anyone who prefers private sessions"]}
    expect={[
      { t: "Consultation", d: "An in-depth chat on goals, history and constraints." },
      { t: "Session", d: "Reformer or mat work, paced to you." },
      { t: "Plan", d: "Notes and a clear plan for next time." },
    ]}
    related={related(["reformer-pilates", "mat-pilates", "pre-post-natal-pilates"])}
  />
);

export const ReformerPilates = () => (
  <ServicePage
    eyebrow="Reformer Pilates"
    title="Reformer Pilates in"
    italic="NW3."
    hero={reformer}
    intro="Spring-loaded strength, control and precision — small group reformer classes with senior instructors."
    what="Our reformer programme is built around precision and progression. Small classes, senior teaching and a careful eye on technique — whatever your starting point."
    benefits={["Core strength & control", "Posture & alignment", "Mobility & joint health", "Long-term resilience"]}
    whoFor={["Beginners and experienced practitioners", "Members rehabbing from injury", "Strength athletes seeking control", "Anyone seeking long-term mobility"]}
    expect={[
      { t: "Welcome", d: "A short orientation if it's your first session." },
      { t: "Class", d: "Reformer flow led by a senior instructor." },
      { t: "Progression", d: "Notes and a path to your next session." },
    ]}
    related={related(["mat-pilates", "pilates-1-1", "personal-training"])}
  />
);

export const MatPilates = () => (
  <ServicePage
    eyebrow="Mat Pilates"
    title="Mat Pilates,"
    italic="classical."
    hero={pilates}
    intro="Bodyweight pilates on the mat — strength, control and breath, with no equipment between you and the work."
    what="Mat pilates is the foundation of the method. Our classes blend classical sequencing with intelligent progressions, taught by senior instructors in small groups."
    benefits={["Core strength", "Mobility & control", "Breath awareness", "A practice you can take anywhere"]}
    whoFor={["All levels welcome", "Members building a daily practice", "Reformer clients adding mat work", "Anyone seeking accessible strength training"]}
    expect={[
      { t: "Arrive", d: "Mats and props provided." },
      { t: "Practice", d: "A 50-minute mat class, senior-led." },
      { t: "Recover", d: "Time in the lounge after class." },
    ]}
    related={related(["reformer-pilates", "yoga", "pilates-1-1"])}
  />
);

export const PrePostNatalPilates = () => (
  <ServicePage
    eyebrow="Pre & Post Natal Pilates"
    title="Specialist care, every"
    italic="trimester."
    hero={prenatal}
    intro="Considered pilates and recovery for pregnancy and the years that follow — led by senior, specialist instructors."
    what="Our pre and post natal programme is led by senior pilates instructors and physiotherapists with specialist training — adapted to each trimester and to the realities of new parenthood."
    benefits={["Strength through pregnancy", "Pelvic floor & core recovery", "Reduced pain & discomfort", "A return to training, gently"]}
    whoFor={["Pregnant members at any stage", "Postpartum members returning to training", "First-time and returning parents"]}
    expect={[
      { t: "Consultation", d: "An in-depth chat with our specialist team." },
      { t: "Programme", d: "Pilates, mobility and gentle strength, paced to you." },
      { t: "Recovery", d: "Optional physio and recovery suite access." },
    ]}
    related={related(["pilates-1-1", "physiotherapy", "yoga"])}
  />
);

export const Yoga = () => (
  <ServicePage
    eyebrow="Yoga"
    title="Yoga,"
    italic="grounded."
    hero={yoga}
    intro="Vinyasa, slow flow and mobility-led classes in a calm, light-filled studio."
    what="Yoga at Guardians is unhurried and intelligent — informed by mobility science but rooted in the practice."
    benefits={["Strength & flexibility", "Breath & nervous system", "Mobility for daily life", "Stillness amid the city"]}
    whoFor={["All levels welcome", "Athletes seeking mobility", "Members managing stress", "Long-time practitioners"]}
    expect={[
      { t: "Arrive", d: "Mats, props and tea provided." },
      { t: "Practice", d: "60–75 minute class led by a senior teacher." },
      { t: "Settle", d: "Time in the lounge after class." },
    ]}
    related={related(["mat-pilates", "red-light-sauna", "personal-training"])}
  />
);

export const Massage = () => (
  <ServicePage
    eyebrow="Massage"
    title="Sports & deep tissue"
    italic="massage."
    hero={physio}
    intro="Hands-on therapy with experienced massage therapists — for recovery, performance and stress relief."
    what="Massage at Guardians is treated as part of training. Whether you're in season, in pain, or simply need to switch off, our therapists tailor each session to where you are."
    benefits={["Muscle recovery", "Pain & tension release", "Stress regulation", "Performance support"]}
    whoFor={["Members training hard", "Athletes in-season", "Anyone managing stress or tension", "Newcomers to bodywork"]}
    expect={[
      { t: "Consult", d: "A short intake on history, focus and pressure." },
      { t: "Treatment", d: "60 or 90 minute hands-on session." },
      { t: "Aftercare", d: "Notes and a plan for next time." },
    ]}
    related={related(["physiotherapy", "red-light-sauna", "cold-plunge"])}
  />
);

export const Physiotherapy = () => (
  <ServicePage
    eyebrow="Physiotherapy"
    title="Assessment, rehab"
    italic="& clinical care."
    hero={physiotherapy}
    intro="Hands-on therapy with senior physiotherapists — for injury recovery, prevention and performance."
    what="Whether you're recovering from injury or want to keep training without one, our physio team integrates assessment, manual therapy and rehab programming with your coach."
    benefits={["Injury recovery", "Pain reduction", "Performance support", "Long-term resilience"]}
    whoFor={["Members managing pain or injury", "Runners and field athletes", "Pre and post natal clients", "Anyone training consistently"]}
    expect={[
      { t: "Assessment", d: "Detailed movement and pain assessment." },
      { t: "Treatment", d: "Manual therapy, dry needling and rehab as required." },
      { t: "Programme", d: "A clear rehab plan, integrated with your coach." },
    ]}
    related={related(["massage", "personal-training", "pilates-1-1"])}
  />
);

export const RedLightSauna = () => (
  <ServicePage
    eyebrow="Red Light Sauna"
    title="Heat, light"
    italic="& stillness."
    hero={redLightSauna}
    intro="Red light sauna sessions — for circulation, repair and a moment of stillness in the day."
    what="Our red light sauna combines targeted infrared and visible red light with traditional heat — supporting circulation, skin and recovery, in a calm private setting."
    benefits={["Circulation & repair", "Skin & cellular health", "Sleep quality", "Nervous system regulation"]}
    whoFor={["Members training hard", "Anyone managing stress or sleep", "Athletes in-season", "Curious newcomers"]}
    expect={[
      { t: "Onboarding", d: "A short walk-through of the protocol." },
      { t: "Session", d: "Timed red light sauna, private and calm." },
      { t: "Cool down", d: "Optional cold plunge to finish." },
    ]}
    related={related(["cold-plunge", "massage", "physiotherapy"])}
  />
);

export const ColdPlunge = () => (
  <ServicePage
    eyebrow="Cold Plunge Therapy"
    title="Cold plunge,"
    italic="daily ritual."
    hero={recovery}
    intro="A guided cold plunge practice — for recovery, focus and resilience."
    what="The plunge is short, sharp and transformative. We support each session with breathwork and protocol guidance — so the work is safe, intentional and repeatable."
    benefits={["Recovery & repair", "Mood & focus", "Stress resilience", "A daily reset"]}
    whoFor={["Members new to cold exposure", "Athletes managing load", "Anyone seeking nervous system reset", "Daily practitioners"]}
    expect={[
      { t: "Brief", d: "Protocol, safety and breathwork." },
      { t: "Plunge", d: "Timed, guided immersion." },
      { t: "Settle", d: "Quiet recovery in the lounge." },
    ]}
    related={related(["red-light-sauna", "massage", "yoga"])}
  />
);
