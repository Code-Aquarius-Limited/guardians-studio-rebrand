import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import studio from "@/assets/studio.jpg";
import recovery from "@/assets/recovery.jpg";
import pilates from "@/assets/pilates.jpg";

const Studio = () => (
  <SiteLayout>
    <PageHero
      eyebrow="The Studio"
      title="The Bakery,"
      italic="Fleet Road."
      intro="A converted bakery in Hampstead — vaulted ceilings, north-facing light, and a community that knows your name."
      image={studio}
    />

    <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-5">
        <p className="eyebrow">Location</p>
        <h2 className="display text-4xl md:text-5xl mt-6">In the heart of <span className="italic-accent">NW3</span>.</h2>
        <address className="not-italic mt-8 text-lg leading-8">
          The Bakery<br />
          Fleet Road<br />
          Hampstead, London NW3
        </address>
      </div>
      <div className="md:col-span-7">
        <iframe
          title="Map"
          className="w-full h-[420px] border-0 grayscale"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1735%2C51.5495%2C-0.1565%2C51.5615&layer=mapnik"
          loading="lazy"
        />
      </div>
    </section>

    <section className="bg-surface py-24 md:py-32">
      <div className="container-x grid md:grid-cols-2 gap-6">
        <img src={recovery} alt="Recovery suite" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <img src={pilates} alt="Pilates studio" loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </div>
    </section>

    <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <p className="eyebrow">Facilities</p>
        <h2 className="display text-4xl md:text-5xl mt-6">A space designed to <span className="italic-accent">return to</span>.</h2>
      </div>
      <ul className="md:col-span-6 md:col-start-7 divide-y divide-border border-y border-border">
        {[
          "Strength & conditioning floor",
          "Reformer pilates studio",
          "Yoga & mobility studio",
          "Red light sauna",
          "Cold plunge",
          "Physiotherapy treatment rooms",
          "Members lounge",
        ].map((f) => (
          <li key={f} className="py-5 font-serif text-2xl">{f}</li>
        ))}
      </ul>
    </section>

    <FinalCta />
  </SiteLayout>
);

export default Studio;
