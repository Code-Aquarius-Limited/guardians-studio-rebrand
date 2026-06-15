import { useEffect, useRef } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero, { FinalCta } from "@/components/PageHero";
import hero from "@/assets/hero-timetable.jpg";

const Timetable = () => {
  const appointmentsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const data = e.data;
      const height = data?.height;
      const type = data?.type;
      const iframe = document.getElementById(
        "lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8",
      ) as HTMLIFrameElement | null;
      const container = appointmentsContainerRef.current;

      if (container && data?.branding && !document.querySelector(".lf-injected")) {
        container.insertAdjacentHTML("beforeend", data.branding);
      }

      if (
        !type ||
        !type.match("lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8") ||
        typeof height !== "number" ||
        !iframe
      ) {
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

      {/* LegitFit appointments embed */}
      <section className="container-x py-16 md:py-24">
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
            style={{ border: "none", display: "block" }}
            scrolling="no"
            id="lf-appointments-iframe-697cd6ad745d15a2ddc8c6a8"
          />
        </div>
      </section>

      
    </SiteLayout>
  );
};

export default Timetable;
