import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import hkLogo from "@/assets/hk-logo.webp";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleContactClick = () => {
    setMobileOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const isCategory = location.pathname === "/lights" || location.pathname === "/furniture";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-display text-2xl font-semibold tracking-wider text-foreground">
          <img src={hkLogo} alt="HyperKryptic Logo" width={40} height={40} className="rounded-sm" />
          HYPER<span className="text-gradient-gold">KRYPTIC</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className={`flex items-center gap-1 font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                isCategory ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Categories <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-card border border-border min-w-[180px] py-2 shadow-lg">
                <Link
                  to="/lights"
                  onClick={() => setCatOpen(false)}
                  className={`block px-5 py-3 font-body text-sm tracking-wider transition-colors ${
                    location.pathname === "/lights" ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Interior Lights
                </Link>
                <Link
                  to="/furniture"
                  onClick={() => setCatOpen(false)}
                  className={`block px-5 py-3 font-body text-sm tracking-wider transition-colors ${
                    location.pathname === "/furniture" ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Furniture
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={handleContactClick}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 space-y-2">
          <Link to="/" onClick={() => setMobileOpen(false)}
            className={`block font-body text-sm tracking-widest uppercase py-2 ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`}>
            Home
          </Link>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/50 pt-2">Categories</p>
          <Link to="/lights" onClick={() => setMobileOpen(false)}
            className={`block font-body text-sm tracking-widest uppercase py-2 pl-4 ${location.pathname === "/lights" ? "text-primary" : "text-muted-foreground"}`}>
            Interior Lights
          </Link>
          <Link to="/furniture" onClick={() => setMobileOpen(false)}
            className={`block font-body text-sm tracking-widest uppercase py-2 pl-4 ${location.pathname === "/furniture" ? "text-primary" : "text-muted-foreground"}`}>
            Furniture
          </Link>
          <button onClick={handleContactClick}
            className="block font-body text-sm tracking-widest uppercase py-2 text-muted-foreground">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
