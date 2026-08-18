export type ServicePricing = {
  title: string;
  eyebrow?: string;
  rows: { label: string; price: string }[];
  bestValue?: { label: string; note: string };
  note?: string;
};

const flowPack: ServicePricing = {
  title: "Flow Pack",
  eyebrow: "Mat Pilates & Yoga",
  rows: [
    { label: "5 Session Pack", price: "£120" },
    { label: "10 Session Pack", price: "£220" },
  ],
  note: "Use across any Mat Pilates or Yoga class.",
};

const studioPack: ServicePricing = {
  title: "Studio Pack",
  eyebrow: "Reformer Pilates & Small Group PT",
  rows: [
    { label: "5 Session Pack", price: "£165" },
    { label: "10 Session Pack", price: "£285" },
  ],
  note: "Use across any Reformer Pilates or Small Group PT session.",
};

export const servicePricing: Record<string, ServicePricing[]> = {
  "personal-training": [
    {
      title: "Personal Trainer",
      eyebrow: "One on One · Personal Training",
      rows: [
        { label: "Initial Assessment · 60 mins", price: "£90" },
        { label: "Pay as you Go", price: "£85" },
        { label: "5 Session Pack", price: "£410" },
        { label: "10 Session Pack", price: "£795" },
        { label: "25 Session Pack", price: "£1,895" },
      ],
      bestValue: { label: "25 Session Pack", note: "save up to £230" },
    },
    {
      title: "Senior Trainer",
      eyebrow: "One on One · PT + Private Reformer",
      rows: [
        { label: "Initial Assessment · 60 mins", price: "£90" },
        { label: "Pay as you Go", price: "£90" },
        { label: "5 Session Pack", price: "£435" },
        { label: "10 Session Pack", price: "£845" },
        { label: "25 Session Pack", price: "£1,985" },
      ],
      bestValue: { label: "25 Session Pack", note: "save up to £325" },
    },
    {
      title: "Train Together",
      eyebrow: "Couples · PT + Couple Reformer",
      rows: [
        { label: "Pay as you Go", price: "£120" },
        { label: "5 Session Pack", price: "£550" },
        { label: "10 Session Pack", price: "£1,050" },
        { label: "25 Session Pack", price: "£2,375" },
      ],
      bestValue: { label: "25 Session Pack", note: "save up to £625" },
    },
  ],
  "pilates-1-1": [
    {
      title: "Pilates 1:1",
      eyebrow: "Private · By Enquiry",
      rows: [{ label: "1 Hour", price: "£90" }],
      note: "Bookable by enquiry only.",
    },
  ],
  "reformer-pilates": [
    {
      title: "Reformer Pilates",
      eyebrow: "Small Group · 4 – 6 Persons",
      rows: [{ label: "Pay as you Go", price: "£35" }],
    },
    studioPack,
  ],
  "mat-pilates": [
    {
      title: "Mat Pilates",
      eyebrow: "Up to 15 Persons",
      rows: [{ label: "Pay as you Go", price: "£25" }],
    },
    flowPack,
  ],
  yoga: [
    {
      title: "Yoga",
      eyebrow: "10 – 15 Persons",
      rows: [{ label: "Pay as you Go", price: "£25" }],
    },
    {
      title: "Small Group Yoga",
      eyebrow: "Up to 6 Persons",
      rows: [{ label: "Pay as you Go", price: "£35" }],
    },
    flowPack,
  ],
  "small-group-pt": [
    {
      title: "Group Training",
      eyebrow: "Up to 6 Persons",
      rows: [{ label: "Pay as you Go", price: "£35" }],
    },
    studioPack,
    {
      title: "Kids / Teens Lift Club",
      eyebrow: "Up to 6 Persons",
      rows: [
        { label: "Pay as you Go", price: "£25" },
        { label: "5 Session Pack", price: "£100" },
        { label: "10 Session Pack", price: "£185" },
      ],
    },
  ],
  massage: [
    {
      title: "Deep Tissue Massage",
      eyebrow: "By Appointment",
      rows: [
        { label: "1 Hour", price: "£85" },
        { label: "90 Minutes", price: "£125" },
      ],
    },
    {
      title: "Sports Massage",
      eyebrow: "By Appointment",
      rows: [
        { label: "1 Hour", price: "£110" },
        { label: "90 Minutes", price: "£140" },
      ],
    },
  ],
};
