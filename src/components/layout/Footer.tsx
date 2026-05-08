import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t border-border mt-24">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="block">
              <p className="font-serif text-4xl leading-none">Guardians</p>
              <p className="eyebrow mt-2">Studio · North West London</p>
            </Link>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              A premium fitness, recovery and wellbeing studio in the heart of NW3.
              Built around longevity, performance and community.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Visit</p>
            <address className="not-italic text-sm leading-7 text-foreground/80">
              The Bakery<br />
              Fleet Road<br />
              Hampstead, NW3<br />
              London
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/team" className="link-underline">The Team</Link></li>
              <li><Link to="/studio" className="link-underline">The Studio</Link></li>
              <li><Link to="/timetable" className="link-underline">Timetable</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Connect</p>
            <a href="https://www.instagram.com/guardiansstudios/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm link-underline">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="hairline mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground tracking-wide">
          <p>© {new Date().getFullYear()} Guardians Studio. All rights reserved.</p>
          <p className="eyebrow">Longevity · Performance · Recovery</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
