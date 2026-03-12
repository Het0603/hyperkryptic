import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroLights from "@/assets/hero-lights.jpg";
import lightTrack from "@/assets/light-track.jpg";
import lightPendant from "@/assets/light-pendant.jpg";
import lightRecessed from "@/assets/light-recessed.jpg";
import lightBelt from "@/assets/light-belt.jpg";
import showroom1 from "@/assets/lights-showroom-1.png";
import showroom2 from "@/assets/lights-showroom-2.png";
import { Zap, Settings, Palette, Shield } from "lucide-react";

const products = [
  { image: lightTrack, name: "Track Spotlights", desc: "Precision-engineered track mounted spotlights for flexible, directional lighting. Perfect for highlighting art, architecture, and retail displays." },
  { image: lightPendant, name: "Glass Ball Pendants", desc: "Elegant glass ball pendant lights with warm amber glow. A statement piece for living rooms, dining areas, and lobbies." },
  { image: lightRecessed, name: "Recessed Downlights", desc: "Ultra-thin LED recessed lights for clean, seamless ceiling integration. Energy-efficient with superior light distribution." },
  { image: lightBelt, name: "LED Belt Strips", desc: "Flexible LED belt lighting system available in 10m and 20m lengths. DC 24V, 5 color options, polyester belt material for versatile installation." },
];

const expertise = [
  { icon: Zap, title: "Energy Efficient", desc: "All our lighting solutions use cutting-edge LED technology for maximum efficiency and longevity." },
  { icon: Settings, title: "Modular Systems", desc: "Our track and belt systems are fully modular — combine nodes, buckles, floodlights, and glass ball linkers." },
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
            Innovative ceiling lights, track systems, and designer fittings from world-class manufacturers
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
                <img src={showroom1} alt="Designer ring chandelier in conference room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">Ring Chandelier System</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">Concentric ring chandeliers with integrated glass ball lights — a stunning centerpiece for boardrooms and lobbies.</p>
              </div>
            </div>
            <div className="group overflow-hidden border border-border hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={showroom2} alt="Modern office with track lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                className="w-full h-full object-cover"
                poster={heroLights}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2">See Our Lights in Motion</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">Watch our track and belt lighting systems illuminate real spaces — experience the quality and design firsthand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Our <span className="text-gradient-gold">Collection</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* Belt System Feature */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Featured System</p>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Modular Belt <span className="text-gradient-gold">Track System</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Our innovative belt track system can be used to separate spaces with light. Combine with large fixed nodes, buckle lights, floodlights, and glass ball linkers for endless configurations.
              </p>
              <div className="space-y-3 text-sm font-body text-secondary-foreground">
                {["Available in 10m and 20m lengths", "5 color options · DC 24V · 9A Max", "Polyester belt material for durability", "Surface mounted & recessed installation"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={lightBelt} alt="LED Belt Track System" className="w-full h-full object-cover" />
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
