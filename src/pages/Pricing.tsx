import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import hero from "@/assets/hero-services.jpg";
import { cn } from "@/lib/utils";
import { servicePricing } from "@/data/servicePricing";

const tiers = [
  {
    name: "Foundation",
    label: "Tier 01",
    price: "£35",
    
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
    
    tint: "bg-[hsl(25,35%,96.5%)] border-[hsl(25,30%,90%)]",
    tableTint: "bg-[hsl(25,35%,98%)]",
    includes: ["Base Membership — all core amenities"],
    benefits: [
      "1 × Class per week (any class)",
      "Bookable 48 hours in advance",
    ],
  },
  {
    name: "Silver",
    label: "Tier 03",
    price: "£135",
    
    tint: "bg-[hsl(210,20%,97%)] border-[hsl(210,18%,91%)]",
    tableTint: "bg-[hsl(210,20%,98.5%)]",
    includes: ["Base Membership — all core amenities"],
    benefits: [
      "2 × Class per week",
      "Priority class & wellness booking — up to 7 days ahead",
      "1 Guest Pass per month",
      "1 wellness room booking per month",
      "All bookable via the Guardians Studios app",
    ],
  },
  {
    name: "Gold",
    label: "Tier 04",
    price: "£225",
    featured: true,
    
    includes: ["Base Membership — all core amenities"],
    benefits: [
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
    
    tint: "bg-[hsl(260,15%,97.5%)] border-[hsl(260,12%,91%)]",
    tableTint: "bg-[hsl(260,15%,98.5%)]",
    includes: ["Base Membership — all core amenities"],
    benefits: [
      "Unlimited Sauna / Plunge (once daily)",
      "Unlimited Classes per week (once daily)",
      "Priority booking — up to 21 days ahead",
      "10% off all private services",
      "Off-peak open gym access (train with no trainer)",
      "1 family member included",
    ],
    footnote: "Free daily coffee · limited-edition Guardians tee",
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
  const [params] = useSearchParams();
  const serviceSlug = params.get("service");
  const service = serviceSlug ? servicePricing[serviceSlug] : null;
  const visibleTiers = service ? tiers.filter((t) => t.name === "Foundation") : tiers;
  return (
    <SiteLayout>
      <PageHero
        eyebrow={service ? service.title : "Membership"}
        title={service ? `${service.title} —` : "Pricing &"}
        italic={service ? "pricing." : "membership."}
        intro={service ? "Session rates and packs for " + service.title.toLowerCase() + ". All Personal Training clients hold a Foundation Membership — details below." : "Five tiers built around how you train and recover — from core gym access to unlimited recovery and member perks. Every membership includes our base amenities."}
        image={hero}
      />

      {service && (
        <section className="container-x pt-16 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <p className="eyebrow">Rates</p>
              <h2 className="display text-4xl md:text-5xl mt-5">{service.title}.</h2>
              {service.bestValue && (
                <div className="mt-8 inline-flex flex-col gap-3">
                  <span className="inline-block bg-foreground text-background text-[0.72rem] uppercase tracking-[0.22em] px-4 py-2 rounded-full self-start">Best Value</span>
                  <p className="italic text-muted-foreground">{service.bestValue.label} — {service.bestValue.note}</p>
                </div>
              )}
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="divide-y divide-border border-y border-border">
                {service.rows.map((r) => (
                  <li key={r.label} className="py-5 flex items-baseline justify-between gap-6">
                    <span className="font-serif text-lg md:text-xl">{r.label}</span>
                    <span className="display text-2xl md:text-3xl">{r.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Tier cards */}
      <section className="container-x py-16 md:py-24">
        {service && (
          <div className="mb-10">
            <p className="eyebrow">Membership</p>
            <h2 className="display text-4xl md:text-5xl mt-5">Required <span className="italic-accent">Foundation</span>.</h2>
          </div>
        )}
        <div className={cn("grid gap-6", service ? "md:grid-cols-1 max-w-2xl" : "md:grid-cols-2 lg:grid-cols-3")}>
          {visibleTiers.map((t) => (
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
              {t.description && (
                <div className={cn("mt-5", t.featured ? "text-background/80" : "text-muted-foreground")}>
                  <p className={cn("eyebrow text-xs", t.featured && "!text-background/60")}>{t.description.heading}</p>
                  {t.description.body.map((p, i) => (
                    <p key={i} className="mt-2 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
              {(t.includes || t.benefits || t.features) && (
                <div className="mt-6 space-y-5 flex-1">
                  {t.includes && (
                    <div>
                      <p className={cn("eyebrow text-xs mb-3", t.featured && "!text-background/60")}>Includes</p>
                      <ul className="space-y-3">
                        {t.includes.map((f) => (
                          <li key={f} className="text-sm leading-relaxed">
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {t.benefits && (
                    <div>
                      <p className={cn("eyebrow text-xs mb-3", t.featured && "!text-background/60")}>Benefits</p>
                      <ul className="space-y-3">
                        {t.benefits.map((f) => (
                          <li key={f} className="flex gap-3 text-sm leading-relaxed">
                            <Check className={cn("h-4 w-4 mt-0.5 shrink-0", t.featured ? "text-background" : "text-foreground")} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {t.features && !t.includes && !t.benefits && (
                    <ul className="space-y-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm leading-relaxed">
                          <Check className={cn("h-4 w-4 mt-0.5 shrink-0", t.featured ? "text-background" : "text-foreground")} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {t.footnote && (
                    <p className={cn("italic text-sm leading-relaxed", t.featured ? "text-background/80" : "text-muted-foreground")}>
                      {t.footnote}
                    </p>
                  )}
                </div>
              )}
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
      {!service && (
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
                    <span className="block font-serif text-xl">{t.name}</span>
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
      )}

      {service && (
        <section className="container-x pb-16 md:pb-24 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition"
          >
            View all memberships <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      )}

      <FinalCta />
    </SiteLayout>
  );
};

export default Pricing;