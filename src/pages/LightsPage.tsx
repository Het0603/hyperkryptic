import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroLights from "@/assets/hero-lights.jpg";
import showroom1 from "@/assets/lights-showroom-1.png";
import showroom2 from "@/assets/lights-showroom-2.png";
import ms30UltraThinCover from "@/assets/ms30-ultra-thin-cover.jpg";
import ms30LightModules from "@/assets/ms30-light-modules.jpg";
import beltLinkHomeScene from "@/assets/beltlink-home-scene.jpg";
import beltLinkLightModules from "@/assets/beltlink-light-modules.jpg";
import { Zap, Settings, Palette, Shield } from "lucide-react";

const products = [
  {
    image: ms30UltraThinCover,
    name: "MS30 Ultra Thin Magnetic Track",
    desc: "5mm ultra-thin magnetic track system from the MS30 catalog, designed for hard-surface installation without false ceiling requirements.",
  },
  {
    image: ms30LightModules,
    name: "MS30 Track Light Modules",
    desc: "Modular MS30 lineup including linear DF modules, TL spotlights, and LB series options to shape clean architectural lighting.",
  },
  {
    image: beltLinkHomeScene,
    name: "Belt Link Rope Light Applications",
    desc: "Rope-light style decorative system for living rooms, bedrooms, and dining spaces with flexible routing for artistic lighting compositions.",
  },
  {
    image: beltLinkLightModules,
    name: "Belt Link Rope Light Modules",
    desc: "BT30 module family from the 2026 catalog, featuring suspended, dome, and linear options for elegant rope-light installations.",
  },
];

const expertise = [
  { icon: Zap, title: "Energy Efficient", desc: "All our lighting solutions use cutting-edge LED technology for maximum efficiency and longevity." },
  { icon: Settings, title: "Track & Rope Systems", desc: "From MS30 magnetic tracks to Belt Link rope-light systems, we deliver flexible modular lighting ecosystems." },
  { icon: Palette, title: "Design Forward", desc: "Every product is selected for its aesthetic impact, bringing world-class design to Indian interiors." },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous quality control from factory floor to your doorstep. Premium materials, reliable performance." },
];

const LightsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={heroLights} alt="Designer track lighting collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Specialty</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            Interior <span className="text-gradient-gold">Lights</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            Innovative magnetic track and rope light systems from world-class manufacturers
          </p>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Our Showroom</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Lighting In <span className="text-gradient-gold">Action</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="group overflow-hidden border border-border hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={showroom1} alt="Designer ring chandelier in conference room" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">Ring Chandelier System</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">Concentric ring chandeliers with integrated glass ball lights — a stunning centerpiece for boardrooms and lobbies.</p>
              </div>
            </div>
            <div className="group overflow-hidden border border-border hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={showroom2} alt="Modern office with track lighting" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">Commercial Track Lighting</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">Precision track systems with adjustable spotlights for modern offices, retail spaces, and creative studios.</p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="border border-border overflow-hidden">
            <div className="aspect-video">
              <video
                src="/videos/lights-showcase.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                poster={heroLights}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2">See Our Lights in Motion</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">Watch our magnetic track and rope-light systems illuminate real spaces — experience the quality and design firsthand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Track & Rope <span className="text-gradient-gold">Collection</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-foreground mb-3">{product.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Our <span className="text-gradient-gold">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rope Light System Feature */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Featured System</p>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Rope Light <span className="text-gradient-gold">Architectures</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Our Belt Link rope-light family combines flexible routing with premium light modules, helping designers create dramatic suspended or geometric lighting layouts.
              </p>
              <div className="space-y-3 text-sm font-body text-secondary-foreground">
                {[
                  "Track catalog powered by MS30 ultra-thin modules",
                  "Rope module options: BT30-SR92, HB150, HR200, HT350",
                  "Flexible layout for home, hospitality, and office projects",
                  "Black finish, 3000K/4000K, high CRI options",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={beltLinkHomeScene} alt="Rope light installation scene" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default LightsPage;
