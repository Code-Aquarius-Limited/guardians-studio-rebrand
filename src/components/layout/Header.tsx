import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Personal Training", to: "/services/personal-training" },
  { label: "Pilates", to: "/services/pilates" },
  { label: "Yoga", to: "/services/yoga" },
  { label: "Recovery", to: "/services/recovery" },
  { label: "Physiotherapy & Massage", to: "/services/physiotherapy" },
  { label: "Pre & Post Natal", to: "/services/pre-post-natal" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-background/0"
      )}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight">Guardians</span>
          <span className="eyebrow text-[0.6rem] mt-0.5">Studio · NW3</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-[0.78rem] uppercase tracking-[0.18em] font-medium">
          <NavLink to="/" className={({ isActive }) => cn("link-underline", isActive && "opacity-60")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => cn("link-underline", isActive && "opacity-60")}>About</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink to="/services" className={({ isActive }) => cn("link-underline inline-flex items-center gap-1.5", isActive && "opacity-60")}>
              Services <ChevronDown className="h-3 w-3" />
            </NavLink>
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300",
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              )}
            >
              <div className="bg-background border border-border shadow-[var(--shadow-lift)] min-w-[260px] py-2">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] hover:bg-surface transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/studio" className={({ isActive }) => cn("link-underline", isActive && "opacity-60")}>The Studio</NavLink>
          <NavLink to="/timetable" className={({ isActive }) => cn("link-underline", isActive && "opacity-60")}>Timetable</NavLink>
          <NavLink to="/contact" className={({ isActive }) => cn("link-underline", isActive && "opacity-60")}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/timetable"
            className="hidden md:inline-flex items-center text-[0.72rem] uppercase tracking-[0.2em] bg-foreground text-background px-5 py-3 hover:bg-foreground/85 transition-colors"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-500 border-t border-border",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="container-x py-6 flex flex-col gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/studio", label: "The Studio" },
            { to: "/timetable", label: "Timetable" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="py-3 font-serif text-2xl border-b border-border">
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <p className="eyebrow mb-3">Services</p>
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="block py-2 text-sm">{s.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
