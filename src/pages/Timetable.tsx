import { useState, useEffect, useRef } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero-timetable.jpg";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const filters = ["All", "Pilates", "Yoga", "Strength", "Recovery"];

const schedule: Record<string, { time: string; class: string; coach: string; type: string }[]> = {
  Mon: [
    { time: "06:30", class: "Reformer Pilates", coach: "Kate Read", type: "Pilates" },
    { time: "08:00", class: "Strength & Conditioning", coach: "Sam Jeal", type: "Strength" },
    { time: "12:30", class: "Slow Flow Yoga", coach: "Merci Cope", type: "Yoga" },
    { time: "18:00", class: "Mat Pilates", coach: "Verity Wright", type: "Pilates" },
    { time: "19:30", class: "Recovery Ritual", coach: "Martina Xuerab", type: "Recovery" },
  ],
  Tue: [
    { time: "07:00", class: "Vinyasa Yoga", coach: "Tom Sutton", type: "Yoga" },
    { time: "09:00", class: "Reformer Pilates", coach: "Deniz Kotan", type: "Pilates" },
    { time: "17:30", class: "Strength Circuit", coach: "Neil Hagerty", type: "Strength" },
  ],
  Wed: [
    { time: "06:30", class: "Mat Pilates", coach: "Kandace Smith", type: "Pilates" },
    { time: "12:00", class: "Mobility & Breath", coach: "Merci Cope", type: "Yoga" },
    { time: "18:30", class: "Reformer Pilates", coach: "Kate Read", type: "Pilates" },
  ],
  Thu: [
    { time: "07:00", class: "Strength & Conditioning", coach: "Joe West", type: "Strength" },
    { time: "10:00", class: "Pre & Post Natal Pilates", coach: "Verity Wright", type: "Pilates" },
    { time: "19:00", class: "Slow Flow Yoga", coach: "Tom Sutton", type: "Yoga" },
  ],
  Fri: [
    { time: "06:30", class: "Reformer Pilates", coach: "Deniz Kotan", type: "Pilates" },
    { time: "12:30", class: "Recovery Ritual", coach: "Martina Xuerab", type: "Recovery" },
    { time: "17:30", class: "Strength Circuit", coach: "Dan Sharrock", type: "Strength" },
  ],
  Sat: [
    { time: "08:00", class: "Vinyasa Yoga", coach: "Merci Cope", type: "Yoga" },
    { time: "09:30", class: "Reformer Pilates", coach: "Kandace Smith", type: "Pilates" },
    { time: "11:00", class: "Strength & Conditioning", coach: "Blair Robertson", type: "Strength" },
  ],
  Sun: [
    { time: "09:00", class: "Slow Flow Yoga", coach: "Tom Sutton", type: "Yoga" },
    { time: "10:30", class: "Recovery Ritual", coach: "Martina Xuerab", type: "Recovery" },
  ],
};

const Timetable = () => {
  const [day, setDay] = useState("Mon");
  const [filter, setFilter] = useState("All");
  const list = schedule[day].filter((c) => filter === "All" || c.type === filter);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const appointmentsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const data = e.data;
      const height = data?.height;
      const type = data?.type;
      const iframe = document.getElementById("lf-iframe-697cd6ad745d15a2ddc8c6a8") as HTMLIFrameElement | null;
      const container = iframeContainerRef.current;
      
      if (container && data?.branding && !document.querySelector(".lf-injected")) {
        container.insertAdjacentHTML('beforeend', data.branding);
      }
      
      if (!type || !type.match("lf-iframe-697cd6ad745d15a2ddc8c6a8") || typeof height !== 'number' || !iframe) {
        return;
      }
      
      Object.entries(data).forEach(([key, value]) => {
        (iframe as any)[key] = value;
      });
    };

    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage, false);
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const data = e.data;
      const height = data?.height;
      const type = data?.type;
      const iframe = document.getElementById("lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8") as HTMLIFrameElement | null;
      const container = appointmentsContainerRef.current;
      
      if (container && data?.branding && !document.querySelector(".lf-injected")) {
        container.insertAdjacentHTML('beforeend', data.branding);
      }
      
      if (!type || !type.match("lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8") || typeof height !== 'number' || !iframe) {
        return;
      }
      
      Object.entries(data).forEach(([key, value]) => {
        (iframe as any)[key] = value;
      });
    };

    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage, false);
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Timetable"
        title="Classes &"
        italic="bookings."
        intro="Browse the week, filter by discipline, and book your spot. 1:1 sessions can be requested via the contact page."
        image={hero}
      />

      <section className="container-x py-16 md:py-24">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="eyebrow mr-2">Filter</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] border transition-colors",
                filter === f ? "bg-foreground text-background border-foreground" : "border-border hover:bg-surface"
              )}
            >{f}</button>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 border border-border">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={cn(
                "py-4 text-[0.72rem] uppercase tracking-[0.2em] border-r last:border-r-0 border-border transition-colors",
                day === d ? "bg-foreground text-background" : "bg-background hover:bg-surface"
              )}
            >{d}</button>
          ))}
        </div>

        {/* Schedule */}
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {list.length === 0 && (
            <li className="py-10 text-center text-muted-foreground">No classes match this filter.</li>
          )}
          {list.map((c, i) => (
            <li key={i} className="grid grid-cols-12 gap-4 py-6 items-center">
              <div className="col-span-3 md:col-span-2 font-serif text-3xl">{c.time}</div>
              <div className="col-span-9 md:col-span-5">
                <p className="font-serif text-2xl">{c.class}</p>
                <p className="eyebrow mt-1">{c.type}</p>
              </div>
              <div className="col-span-7 md:col-span-3 text-sm text-muted-foreground">{c.coach}</div>
              <div className="col-span-5 md:col-span-2 text-right">
                <button className="text-[0.72rem] uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors">
                  Book
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* LegitFit timetable embed */}
      <section className="container-x py-16 md:py-24 border-t border-border">
        <div 
          id="lf-iframe-container-697cd6ad745d15a2ddc8c6a8" 
          ref={iframeContainerRef}
          className="border border-border rounded overflow-hidden mx-auto"
          style={{ maxWidth: '1000px' }}
        >
          <iframe 
            src="https://www.legitfit.com/p/timetable/697cd6ad745d15a2ddc8c6a8?isIframe=true" 
            title="Schedule for Guardians Studios" 
            width="100%" 
            height="800" 
            style={{ border: 'none', display: 'block' }}
            scrolling="no" 
            id="lf-iframe-697cd6ad745d15a2ddc8c6a8" 
          />
        </div>
      </section>

      {/* LegitFit appointments embed */}
      <section className="container-x py-16 md:py-24 border-t border-border">
        <div 
          id="lf-appointments-iframe-container-697cd6ad745d15a2ddc8c6a8" 
          ref={appointmentsContainerRef}
          className="w-full border border-border rounded overflow-hidden"
        >
          <iframe 
            src="https://www.legitfit.com/p/appointments/select/697cd6ad745d15a2ddc8c6a8?isIframe=true" 
            title="Schedule for Guardians Studios" 
            width="100%" 
            height="800" 
            style={{ border: 'none', display: 'block' }}
            scrolling="no" 
            id="lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8" 
          />
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

export default Timetable;
