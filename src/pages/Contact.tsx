import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import studio from "@/assets/hero-contact.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks — we'll be in touch shortly.");
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Find us, or"
        italic="say hello."
        intro="The Bakery, Fleet Road, Hampstead NW3. Drop in for a tour, or send us a note below."
        image={studio}
      />

      <section className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-3 font-serif text-2xl leading-snug">The Bakery,<br />Fleet Road,<br />Hampstead, NW3</p>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <ul className="mt-3 space-y-1 text-foreground/80">
              <li className="flex justify-between gap-6"><span>Mon – Fri</span><span>06:00 – 21:00</span></li>
              <li className="flex justify-between gap-6"><span>Saturday</span><span>07:00 – 18:00</span></li>
              <li className="flex justify-between gap-6"><span>Sunday</span><span>08:00 – 16:00</span></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <a href="mailto:hello@guardiansstudio.co.uk" className="mt-3 inline-block font-serif text-2xl link-underline">hello@guardiansstudio.co.uk</a>
          </div>
        </div>

        <form onSubmit={handle} className="md:col-span-7 space-y-6 bg-surface p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input required className="mt-2 w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-foreground" />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input required type="email" className="mt-2 w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-foreground" />
            </label>
          </div>
          <label className="block">
            <span className="eyebrow">Interested in</span>
            <select className="mt-2 w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-foreground">
              <option>Personal Training</option>
              <option>Pilates</option>
              <option>Yoga</option>
              <option>Recovery</option>
              <option>Physiotherapy & Massage</option>
              <option>Pre & Post Natal</option>
              <option>Studio Tour</option>
            </select>
          </label>
          <label className="block">
            <span className="eyebrow">Message</span>
            <textarea rows={5} className="mt-2 w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-foreground" />
          </label>
          <button type="submit" disabled={sent} className="bg-foreground text-background px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] hover:bg-foreground/85 transition disabled:opacity-60">
            {sent ? "Sent" : "Send Enquiry"}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;
