export type ServicePricing = {
  title: string;
  rows: { label: string; price: string }[];
  bestValue?: { label: string; note: string };
};

export const servicePricing: Record<string, ServicePricing> = {
  "personal-training": {
    title: "Personal Trainer",
    rows: [
      { label: "Initial Assessment · 60 mins", price: "£90" },
      { label: "Pay as you Go", price: "£85" },
      { label: "5 Session Pack", price: "£410" },
      { label: "10 Session Pack", price: "£795" },
      { label: "25 Session Pack", price: "£1,895" },
    ],
    bestValue: {
      label: "25 Session Pack",
      note: "save up to £230",
    },
  },
};