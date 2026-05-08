import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  to: string;
  image: string;
  description?: string;
  className?: string;
  aspect?: "tall" | "wide" | "square";
}

const ServiceCard = ({ eyebrow, title, to, image, description, className, aspect = "tall" }: Props) => {
  const aspectClass = aspect === "tall" ? "aspect-[4/5]" : aspect === "wide" ? "aspect-[16/10]" : "aspect-square";
  return (
    <Link to={to} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden rounded-3xl bg-surface", aspectClass)}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-background">
          {eyebrow && <span className="eyebrow !text-background/80">{eyebrow}</span>}
          <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-1 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h3>
          {description && <p className="mt-2 text-sm text-background/80 max-w-sm">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
