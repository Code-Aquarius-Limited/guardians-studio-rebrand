import { Instagram, Heart, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";

const posts = [
  { img: insta1, caption: "Strength is a long game. 1:1 sessions on the floor today.", likes: 412 },
  { img: insta2, caption: "Assessment first — coaching built around how you move.", likes: 538 },
  { img: insta3, caption: "Conditioning on the Assault bike. Honest work.", likes: 327 },
  { img: insta4, caption: "Group session energy — small, considered, in motion.", likes: 624 },
  { img: insta5, caption: "Hands-on coaching cues, every rep.", likes: 289 },
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
