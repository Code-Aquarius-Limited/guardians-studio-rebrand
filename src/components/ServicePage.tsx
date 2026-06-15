import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  italic?: string;
  hero: string;
  intro: string;
  what: string;
  benefits: string[];
  whoFor: string[];
  expect: { t: string; d: string }[];
  related: { title: string; to: string; image: string }[];
}

const ServicePage = (p: ServicePageProps) => (
  <SiteLayout>
    {/* Hero */}
    <section className="relative pt-20">
      <div className="grid md:grid-cols-12 min-h-[70vh]">
        <div className="md:col-span-6 bg-surface px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="display text-5xl md:text-7xl mt-6">
            {p.title}{p.italic && <> <span className="italic-accent">{p.italic}</span></>}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80 max-w-lg">{p.intro}</p>
          <div className="mt-10 flex gap-3 flex-wrap">
            <Link to="/timetable" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-foreground/85 transition">
              Book <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-surface-deep transition">
              Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-surface-deep transition">
              Enquire <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 relative min-h-[360px] overflow-hidden">
          <img src={p.hero} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>

    {/* What it is */}
    <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-4">
        <p className="eyebrow">What it is</p>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <p className="font-serif text-3xl md:text-4xl leading-snug">{p.what}</p>
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-surface py-24 md:py-32">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow">Benefits</p>
          <h2 className="display text-4xl md:text-5xl mt-6">Why it <span className="italic-accent">works</span>.</h2>
        </div>
        <ul className="md:col-span-7 md:col-start-6 divide-y divide-border border-y border-border">
          {p.benefits.map((b, i) => (
            <li key={b} className="py-6 flex items-baseline gap-6">
              <span className="eyebrow w-10">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-2xl">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Who & expect */}
    <section className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
      <div>
        <p className="eyebrow">Who it's for</p>
        <h3 className="display text-3xl md:text-4xl mt-6">Designed for <span className="italic-accent">you</span> — wherever you are.</h3>
        <ul className="mt-8 space-y-3 text-foreground/80">
          {p.whoFor.map((w) => <li key={w} className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-px before:bg-foreground">{w}</li>)}
        </ul>
      </div>
      <div>
        <p className="eyebrow">What to expect</p>
        <h3 className="display text-3xl md:text-4xl mt-6">Your <span className="italic-accent">session</span>.</h3>
        <ol className="mt-8 space-y-6">
          {p.expect.map((s, i) => (
            <li key={s.t} className="grid grid-cols-[auto_1fr] gap-5">
              <span className="eyebrow pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-serif text-xl">{s.t}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Related */}
    <section className="bg-surface py-24 md:py-36">
      <div className="container-x">
        <p className="eyebrow">Related</p>
        <h2 className="display text-4xl md:text-5xl mt-6">Continue <span className="italic-accent">exploring</span>.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {p.related.map((r) => (
            <Link key={r.to} to={r.to} className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-background">
                <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="font-serif text-2xl mt-4 flex items-center justify-between">
                {r.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>

  </SiteLayout>
);

export default ServicePage;
