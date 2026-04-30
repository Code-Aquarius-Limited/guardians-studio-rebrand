import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import ServiceCard from "@/components/ServiceCard";
import { FinalCta } from "@/components/PageHero";
import InstagramCarousel from "@/components/InstagramCarousel";
import hero from "@/assets/hero.jpg";
import pt from "@/assets/pt.jpg";
import pilates from "@/assets/pilates.jpg";
import yoga from "@/assets/yoga.jpg";
import recovery from "@/assets/recovery.jpg";
import physio from "@/assets/physio.jpg";
import studio from "@/assets/studio.jpg";

const pillars = [
  { n: "01", t: "Longevity", d: "Train for the decades ahead, not just the season." },
  { n: "02", t: "Performance", d: "Coaching designed around how you move and live." },
  { n: "03", t: "Recovery", d: "Sauna, cold plunge and hands-on therapy, integrated." },
  { n: "04", t: "Community", d: "A small, considered space — built around its members." },
];

const testimonials = [
  { q: "Genuinely the best studio I've trained at — the coaching, the recovery space, the people. Everything is considered.", a: "Olivia M.", r: "Member, two years" },
  { q: "I came in for physio after a marathon injury and stayed for the community. My training has never been smarter.", a: "James K.", r: "Member" },
  { q: "Reformer Pilates here changed my relationship with my body during pregnancy and beyond.", a: "Sophie R.", r: "Pre & post natal" },
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="Guardians Studio interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(0,0%,100%,0.2) 0%, hsla(0,0%,100%,0) 30%, hsla(220,14%,8%,0.45) 100%)" }} />

        <div className="relative h-full container-x flex flex-col justify-end pb-24 md:pb-28">
          <p className="eyebrow !text-background/80 mb-6">Hampstead · NW3</p>
          <h1 className="display text-background text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] max-w-[18ch]">
            Longevity, performance <span className="italic-accent">&amp; recovery</span> — redefined.
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/timetable" className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 text-[0.72rem] uppercase tracking-[0.22em] hover:bg-background/90 transition">
              Book a Session <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 border border-background/50 text-background px-7 py-4 text-[0.72rem] uppercase tracking-[0.22em] hover:bg-background/10 transition">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-16 text-background/80 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em]">
          Scroll <ArrowDown className="h-3.5 w-3.5" />
        </div>
      </section>

      {/* POSITIONING */}
      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">A studio, not a gym</p>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Premium fitness, recovery and wellbeing — built around <span className="italic-accent">people</span>, not equipment.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              Guardians Studio is a small, considered space in North West London where coaching, recovery and community
              live under one roof. Our work is rooted in longevity — training, treatment and rituals you can return to
              for the next forty years.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-[0.72rem] uppercase tracking-[0.22em] link-underline">
              Our philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10 hover:bg-surface transition-colors duration-500">
              <p className="eyebrow">{p.n}</p>
              <h3 className="font-serif text-3xl mt-6">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface py-24 md:py-36">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="display text-4xl md:text-6xl mt-6">Tailored to <span className="italic-accent">how</span> you move.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] link-underline self-start md:self-end">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            <ServiceCard eyebrow="01" title="Personal Training" to="/services/personal-training" image={pt} description="One-to-one coaching, programmed for the long term." className="md:col-span-3" aspect="wide" />
            <ServiceCard eyebrow="02" title="Pilates" to="/services/pilates" image={pilates} description="Reformer, mat and 1:1 pilates." className="md:col-span-3" aspect="wide" />
            <ServiceCard eyebrow="03" title="Yoga" to="/services/yoga" image={yoga} className="md:col-span-2" />
            <ServiceCard eyebrow="04" title="Recovery" to="/services/recovery" image={recovery} className="md:col-span-2" />
            <ServiceCard eyebrow="05" title="Physio & Massage" to="/services/physiotherapy" image={physio} className="md:col-span-2" />
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img src={recovery} alt="Recovery suite" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-6">
            <p className="eyebrow">Longevity &amp; Recovery</p>
            <h2 className="display text-4xl md:text-6xl mt-6">
              The work after the <span className="italic-accent">work</span>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80 max-w-xl">
              Recovery is not an extra — it is the foundation. Our suite brings together red light sauna,
              cold plunge and hands-on physiotherapy in one calm, considered space.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                ["Red Light Sauna", "Heat, light and stillness for circulation and repair."],
                ["Cold Plunge", "A daily ritual for recovery, focus and resilience."],
                ["Physiotherapy", "Assessment, rehab and sports massage with our team."],
              ].map(([t, d]) => (
                <li key={t} className="py-5 flex justify-between items-baseline gap-6">
                  <span className="font-serif text-2xl">{t}</span>
                  <span className="text-sm text-muted-foreground text-right max-w-xs">{d}</span>
                </li>
              ))}
            </ul>
            <Link to="/services/recovery" className="inline-flex items-center gap-2 mt-10 text-[0.72rem] uppercase tracking-[0.22em] link-underline">
              Discover Recovery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE STUDIO */}
      <section className="bg-foreground text-background py-24 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="eyebrow !text-background/60">The Studio</p>
            <h2 className="display text-4xl md:text-6xl mt-6">
              The Bakery, <span className="italic-accent">Fleet Road</span>.
            </h2>
            <p className="mt-8 text-background/75 leading-relaxed max-w-md">
              A converted bakery in the heart of Hampstead — vaulted ceilings, north-facing
              light, and a community that knows your name. NW3, London.
            </p>
            <Link to="/studio" className="inline-flex items-center gap-2 mt-10 text-[0.72rem] uppercase tracking-[0.22em] link-underline">
              Visit the Studio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={studio} alt="Guardians Studio interior" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24 md:py-36">
        <p className="eyebrow text-center">Members</p>
        <h2 className="display text-4xl md:text-6xl mt-6 text-center max-w-3xl mx-auto">
          Built by the people who <span className="italic-accent">train</span> here.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
          {testimonials.map((t) => (
            <figure key={t.a} className="bg-background p-10">
              <blockquote className="font-serif text-xl md:text-2xl leading-snug">"{t.q}"</blockquote>
              <figcaption className="mt-8 eyebrow">
                {t.a} <span className="opacity-60">— {t.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <InstagramCarousel />

      <FinalCta />
    </SiteLayout>
  );
};

export default Index;
