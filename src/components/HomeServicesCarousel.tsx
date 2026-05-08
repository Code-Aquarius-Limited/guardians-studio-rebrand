import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { allServices } from "@/pages/services/index";

const HomeServicesCarousel = () => {
  return (
    <section className="bg-surface py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Tailored to <span className="italic-accent">how</span> you move.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] link-underline self-start md:self-end"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4 md:-ml-6">
            {allServices.map((s, i) => (
              <CarouselItem
                key={s.slug}
                className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 lg:basis-[40%] xl:basis-[34%]"
              >
                <Link to={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-background">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "var(--gradient-overlay)" }}
                    />
                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-background">
                      <span className="eyebrow !text-background/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-1 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-background">
                      <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm text-background/80 max-w-sm">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border" />
          <CarouselNext className="hidden md:flex -right-4 bg-background border-border" />
        </Carousel>
      </div>
    </section>
  );
};

export default HomeServicesCarousel;
