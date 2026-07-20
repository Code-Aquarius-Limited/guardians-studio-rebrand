import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import hero from "@/assets/hero-services.jpg";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Foundation",
    label: "Tier 01",
    price: "£35",
    blurb: "Core amenities & services to get you moving. Required for all Personal Training clients.",
    description: {
      heading: "Why a Foundation membership",
      body: [
        "To maintain the exceptional standards that define Guardians Studios, all Personal Training clients will hold a Foundation Membership at £35 per month.",
        "This supports the day-to-day running and upkeep of the studio — fresh towels, refreshments, daily cleaning, maintenance and the overall care of the facility. It ensures every member enjoys a consistently high-quality environment, and the level of service, comfort and attention to detail that sets Guardians apart.",
        "What is also included: 1 Pilates or Yoga class per month.",
      ],
    },
    tint: "bg-[hsl(35,30%,97%)] border-[hsl(35,25%,92%)]",
    tableTint: "bg-[hsl(35,30%,98%)]",
    features: [
      "Gym entry",
      "Custom profile on the Guardians app",
      "Body composition testing",
      "Filtered water supplied daily",
      "Fresh daily towels",
      "General maintenance & admin functions",
      "1 Pilates or Yoga class per month",
    ],
  },
  {
    name: "Bronze",
    label: "Tier 02",
    price: "£80",
    blurb: "Base Membership plus one class per week.",
    tint: "bg-[hsl(25,35%,96.5%)] border-[hsl(25,30%,90%)]",
    tableTint: "bg-[hsl(25,35%,98%)]",
    features: [
      "All core amenities & services",
      "1 × Class per week (any class)",
      "Bookable 48 hours in advance via the Guardians Studios app",
    ],
  },
  {
    name: "Silver",
    label: "Tier 03",
    price: "£135",
    blurb: "Base Membership with weekly classes, priority booking and guest access.",
    tint: "bg-[hsl(210,20%,97%)] border-[hsl(210,18%,91%)]",
    tableTint: "bg-[hsl(210,20%,98.5%)]",
    features: [
      "All core amenities & services",
      "2 × Classes per week",
      "Priority class & wellness booking — up to 7 days ahead",
      "1 Guest Pass per month",
      "1 Wellness room booking per month",
      "All bookable via the Guardians Studios app",
    ],
  },
  {
    name: "Gold",
    label: "Tier 04",
    price: "£225",
    featured: true,
    blurb: "More classes, weekly wellness and member discounts.",
    features: [
      "All core amenities & services",
      "Up to 3 × Classes per week",
      "1 Wellness room booking per week",
      "Priority booking — up to 14 days ahead",
      "5% off Personal Training & 1:1 Reformer packages",
      "2 Guest Passes per month",
    ],
  },
  {
    name: "Platinum",
    label: "Tier 05",
    price: "£275",
    blurb: "Our complete membership with unlimited classes and recovery.",
    tint: "bg-[hsl(260,15%,97.5%)] border-[hsl(260,12%,91%)]",
    tableTint: "bg-[hsl(260,15%,98.5%)]",
    features: [
      "All core amenities & services",
      "Unlimited Sauna / Plunge (once daily)",
      "Unlimited Classes (once daily)",
      "Priority booking — up to 21 days ahead",
      "10% off all private services",
      "Off-peak open gym access (train with no trainer)",
      "1 family member included",
      "Free daily coffee · limited-edition Guardians tee",
    ],
  },
];

const overview: { label: string; values: string[] }[] = [
  { label: "Gym & Showers", values: ["✓", "✓", "✓", "✓", "✓"] },
  { label: "Sauna / Plunge", values: ["—", "—", "1×/mth", "1×/wk", "Unlimited"] },
  { label: "Classes", values: ["—", "1×/wk", "2×/wk", "3×/wk", "Unlimited"] },
  { label: "Priority Booking", values: ["—", "—", "7 days", "14 days", "21 days"] },
  { label: "Member Discount", values: ["—", "—", "—", "5%", "10%"] },
  { label: "Off-Peak Access", values: ["—", "—", "—", "—", "✓"] },
];

const Pricing = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Membership"
        title="Pricing &"
        italic="membership."
        intro="Five tiers built around how you train and recover — from core gym access to unlimited recovery and member perks. Every membership includes our base amenities."
        image={hero}
      />

      {/* Tier cards */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "flex flex-col p-8 rounded-3xl border",
                t.featured
                  ? "bg-foreground text-background border-foreground"
                  : t.tint || "bg-background border-border",
              )}
            >
              <p className={cn("eyebrow", t.featured && "!text-background/60")}>{t.label}</p>
              <h2 className="font-serif text-3xl mt-3">{t.name}</h2>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="display text-5xl">{t.price}</span>
                <span className={cn("text-sm", t.featured ? "text-background/70" : "text-muted-foreground")}>
                  / month
                </span>
              </div>
              <p className={cn("mt-4 text-sm leading-relaxed", t.featured ? "text-background/80" : "text-muted-foreground")}>
                {t.blurb}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed">
                    <Check className={cn("h-4 w-4 mt-0.5 shrink-0", t.featured ? "text-background" : "text-foreground")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-between gap-6 px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] transition",
                  t.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "border border-foreground/20 hover:bg-foreground hover:text-background",
                )}
              >
                Enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Overview table */}
      <section className="container-x py-16 md:py-24 border-t border-border">
        <p className="eyebrow">Compare</p>
        <h2 className="display text-4xl md:text-6xl mt-5 mb-10">Membership overview.</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 font-normal eyebrow">Feature</th>
                {tiers.map((t) => (
                  <th key={t.label} className={cn("py-4 px-4 text-center", t.tableTint)}>
                    <span className="block font-serif text-xl">{t.label}</span>
                    <span className="block text-muted-foreground text-xs mt-1">{t.price} / mo</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {overview.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className={cn("py-4 px-4 text-center text-muted-foreground", tiers[i].tableTint)}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          All add-ons bookable in advance via the Guardians Studios app
        </p>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

export default Pricing;