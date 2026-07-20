export type ServicePricing = {
  title: string;
  eyebrow?: string;
  rows: { label: string; price: string }[];
  bestValue?: { label: string; note: string };
  note?: string;
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
      title: "Master Trainer",
      eyebrow: "One on One · Personal Training",
      rows: [
        { label: "Initial Assessment · 60 mins", price: "£90" },
        { label: "Pay as you Go", price: "Enquire Within" },
        { label: "5 Session Pack", price: "Enquire Within" },
        { label: "10 Session Pack", price: "Enquire Within" },
        { label: "25 Session Pack", price: "Enquire Within" },
      ],
      note: "On Request*",
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
  "reformer-pilates": [
    {
      title: "Reformer Pilates",
      eyebrow: "4 – 6 Persons",
      rows: [
        { label: "Single", price: "£35" },
        { label: "5 Session Pack", price: "£150" },
        { label: "10 Session Pack", price: "£285" },
        { label: "25 Session Pack", price: "£625" },
      ],
    },
  ],
  "mat-pilates": [
    {
      title: "Mat Pilates",
      eyebrow: "Up to 15 Persons",
      rows: [
        { label: "Single", price: "£30" },
        { label: "5 Session Pack", price: "£135" },
        { label: "10 Session Pack", price: "£210" },
        { label: "25 Session Pack", price: "£495" },
      ],
    },
  ],
};