import ServicePage from "@/components/ServicePage";
import pt from "@/assets/pt.jpg";
import pilates from "@/assets/pilates.jpg";
import recovery from "@/assets/recovery.jpg";
import physio from "@/assets/physio.jpg";
import yoga from "@/assets/yoga.jpg";
import prenatal from "@/assets/prenatal.jpg";

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
    related={[
      { title: "Pilates", to: "/services/pilates", image: pilates },
      { title: "Recovery", to: "/services/recovery", image: recovery },
      { title: "Physiotherapy", to: "/services/physiotherapy", image: physio },
    ]}
  />
);

export const Pilates = () => (
  <ServicePage
    eyebrow="Pilates"
    title="Reformer Pilates in"
    italic="NW3."
    hero={pilates}
    intro="Reformer, mat and 1:1 pilates with senior instructors — for strength, control and longevity."
    what="Our pilates programme is built around precision and progression. Whether you're new to the reformer or a long-time practitioner, you'll find sessions that meet you where you are."
    benefits={["Core strength & control", "Posture & alignment", "Mobility & joint health", "Pre & post natal support"]}
    whoFor={["Beginners and experienced practitioners", "Members rehabbing from injury", "Pre and post natal clients", "Anyone seeking long-term mobility"]}
    expect={[
      { t: "Welcome", d: "Brief intake on goals and history." },
      { t: "Movement", d: "Reformer, mat or apparatus work." },
      { t: "Progression", d: "Notes and a plan for your next session." },
    ]}
    related={[
      { title: "Personal Training", to: "/services/personal-training", image: pt },
      { title: "Pre & Post Natal", to: "/services/pre-post-natal", image: prenatal },
      { title: "Yoga", to: "/services/yoga", image: yoga },
    ]}
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
    related={[
      { title: "Pilates", to: "/services/pilates", image: pilates },
      { title: "Recovery", to: "/services/recovery", image: recovery },
      { title: "Personal Training", to: "/services/personal-training", image: pt },
    ]}
  />
);

export const Recovery = () => (
  <ServicePage
    eyebrow="Recovery"
    title="Red light, cold plunge"
    italic="& stillness."
    hero={recovery}
    intro="Our recovery suite brings together the most effective rituals for repair, focus and resilience."
    what="Recovery at Guardians is treated with the same intention as training. The suite combines red light sauna, cold plunge and physiotherapy — guided by our team."
    benefits={["Circulation & repair", "Stress & nervous system regulation", "Sleep quality", "Resilience over time"]}
    whoFor={["Members training hard", "Anyone managing stress or sleep", "Athletes in-season", "Curious newcomers"]}
    expect={[
      { t: "Onboarding", d: "A short walk-through of the rituals." },
      { t: "Sauna", d: "Red light sauna sessions, timed and guided." },
      { t: "Plunge", d: "Cold plunge with breathwork support." },
    ]}
    related={[
      { title: "Physiotherapy", to: "/services/physiotherapy", image: physio },
      { title: "Personal Training", to: "/services/personal-training", image: pt },
      { title: "Yoga", to: "/services/yoga", image: yoga },
    ]}
  />
);

export const Physiotherapy = () => (
  <ServicePage
    eyebrow="Physiotherapy & Massage"
    title="Assessment, rehab"
    italic="& sports massage."
    hero={physio}
    intro="Hands-on therapy with senior physiotherapists — for injury recovery, prevention and performance."
    what="Whether you're recovering from injury or want to keep training without one, our physio team integrates assessment, manual therapy and rehab programming with your coach."
    benefits={["Injury recovery", "Pain reduction", "Performance support", "Long-term resilience"]}
    whoFor={["Members managing pain or injury", "Runners and field athletes", "Pre and post natal clients", "Anyone training consistently"]}
    expect={[
      { t: "Assessment", d: "Detailed movement and pain assessment." },
      { t: "Treatment", d: "Manual therapy, massage and dry needling as required." },
      { t: "Programme", d: "A clear rehab plan, integrated with your coach." },
    ]}
    related={[
      { title: "Recovery", to: "/services/recovery", image: recovery },
      { title: "Personal Training", to: "/services/personal-training", image: pt },
      { title: "Pilates", to: "/services/pilates", image: pilates },
    ]}
  />
);

export const PrePostNatal = () => (
  <ServicePage
    eyebrow="Pre & Post Natal"
    title="Specialist care, every"
    italic="trimester."
    hero={prenatal}
    intro="Considered training, pilates and recovery for pregnancy and the years that follow."
    what="Our pre and post natal programme is led by senior pilates instructors and physiotherapists with specialist training — adapted to each trimester and to the realities of new parenthood."
    benefits={["Strength through pregnancy", "Pelvic floor & core recovery", "Reduced pain & discomfort", "A return to training, gently"]}
    whoFor={["Pregnant members at any stage", "Postpartum members returning to training", "First-time and returning parents"]}
    expect={[
      { t: "Consultation", d: "An in-depth chat with our specialist team." },
      { t: "Programme", d: "Pilates, mobility and gentle strength, paced to you." },
      { t: "Recovery", d: "Optional physio and recovery suite access." },
    ]}
    related={[
      { title: "Pilates", to: "/services/pilates", image: pilates },
      { title: "Physiotherapy", to: "/services/physiotherapy", image: physio },
      { title: "Yoga", to: "/services/yoga", image: yoga },
    ]}
  />
);
