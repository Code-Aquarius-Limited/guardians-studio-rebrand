import { Instagram, Heart, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pt from "@/assets/pt.jpg";
import pilates from "@/assets/pilates.jpg";
import yoga from "@/assets/yoga.jpg";
import recovery from "@/assets/recovery.jpg";
import physio from "@/assets/physio.jpg";
import studio from "@/assets/studio.jpg";
import prenatal from "@/assets/prenatal.jpg";
import hero from "@/assets/hero.jpg";

const posts = [
  { img: pt, caption: "Strength is a long game. 1:1 sessions on the floor today.", likes: 412 },
  { img: pilates, caption: "Reformer flow — control, breath, repeat.", likes: 538 },
  { img: yoga, caption: "Sunday slow flow with Anya. Booking open.", likes: 327 },
  { img: recovery, caption: "Heat. Cold. Stillness. The recovery ritual.", likes: 624 },
  { img: physio, caption: "Sports massage with the team this week.", likes: 289 },
  { img: studio, caption: "The Bakery, Fleet Road — north light at its best.", likes: 712 },
  { img: prenatal, caption: "Pre & post natal classes — for every stage.", likes: 401 },
  { img: hero, caption: "Welcome in. NW3.", likes: 855 },
];

const InstagramCarousel = () => {
  return (
    <section className="bg-surface py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">@guardians.studio</p>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Inside the <span className="italic-accent">studio</span>.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/guardiansstudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] link-underline self-start md:self-end"
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4 md:-ml-6">
            {posts.map((p, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:pl-6 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <a href="https://www.instagram.com/guardiansstudios/" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-background">
                    <img
                      src={p.img}
                      alt={p.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-5 text-background text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <Heart className="h-4 w-4 fill-current" /> {p.likes}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MessageCircle className="h-4 w-4" /> {Math.round(p.likes / 12)}
                        </span>
                      </div>
                    </div>
                    <Instagram className="absolute top-3 right-3 h-4 w-4 text-background/90 drop-shadow" />
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {p.caption}
                  </p>
                </a>
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

export default InstagramCarousel;
