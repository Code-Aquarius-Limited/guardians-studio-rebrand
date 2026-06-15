import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHero = ({
  eyebrow,
  title,
  italic,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
  image: string;
}) => {
  return (
    <section className="relative pt-20">
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="container-x">
        <div className="pt-10 md:pt-14 max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-6">
            {title}
            {italic && <> <span className="italic-accent">{italic}</span></>}
          </h1>
          {intro && <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
      </div>
    </section>
  );
};

export const FinalCta = () => (
  <section className="container-x py-24 md:py-36">
    <div className="bg-foreground text-background p-10 md:p-20 rounded-3xl">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="eyebrow !text-background/60">Begin</p>
          <h2 className="display text-5xl md:text-7xl mt-5">
            Start your <span className="italic-accent">journey</span> today.
          </h2>
        </div>
        <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
          <Link to="/timetable" className="inline-flex items-center justify-between gap-6 bg-background text-foreground px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-background/90 transition w-full md:w-auto">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center justify-between gap-6 bg-background/10 text-background px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-background/20 transition w-full md:w-auto">
            Pricing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-between gap-6 border border-background/30 px-6 py-4 rounded-full text-[0.72rem] uppercase tracking-[0.22em] hover:bg-background/10 transition w-full md:w-auto">
            Enquire <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
