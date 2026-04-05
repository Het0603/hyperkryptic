import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroLights from "@/assets/hero-lights.jpg";
import showroom1 from "@/assets/lights-showroom-1.png";
import showroom2 from "@/assets/lights-showroom-2.png";
import beltLinkHomeScene from "@/assets/beltlink-home-scene.jpg";
import { Zap, Settings, Palette, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import ms30Floodlight from "@/assets/lights/ms30-floodlight.jpg";
import ms30Spotlight from "@/assets/lights/ms30-spotlight.jpg";
import ms30Globe from "@/assets/lights/ms30-globe.jpg";
import ms30DualSpot from "@/assets/lights/ms30-dual-spot.jpg";
import ms30LinearBar from "@/assets/lights/ms30-linear-bar.jpg";
import ms30TripleSpot from "@/assets/lights/ms30-triple-spot.jpg";
import btGlassGlobe from "@/assets/lights/bt-glass-globe.jpg";
import btDiscModule from "@/assets/lights/bt-disc-module.jpg";
import btRopeLoop from "@/assets/lights/bt-rope-loop.jpg";
import btCylinderSpot from "@/assets/lights/bt-cylinder-spot.jpg";

import ms30FloodlightOn from "@/assets/lights/ms30-floodlight-on.jpg";
import ms30SpotlightOn from "@/assets/lights/ms30-spotlight-on.jpg";
import ms30GlobeOn from "@/assets/lights/ms30-globe-on.jpg";
import ms30DualSpotOn from "@/assets/lights/ms30-dual-spot-on.jpg";
import ms30LinearBarOn from "@/assets/lights/ms30-linear-bar-on.jpg";
import ms30TripleSpotOn from "@/assets/lights/ms30-triple-spot-on.jpg";
import btGlassGlobeOn from "@/assets/lights/bt-glass-globe-on.jpg";
import btDiscModuleOn from "@/assets/lights/bt-disc-module-on.jpg";
import btRopeLoopOn from "@/assets/lights/bt-rope-loop-on.jpg";
import btCylinderSpotOn from "@/assets/lights/bt-cylinder-spot-on.jpg";
import btClearGlobe from "@/assets/lights/bt-clear-globe.jpg";
import btClearGlobeOn from "@/assets/lights/bt-clear-globe-on.jpg";

const collection = [
  { image: ms30Floodlight, imageOn: ms30FloodlightOn, name: "MS30 Floodlight Module", desc: "Ultra-slim magnetic floodlight with wide-angle beam for ambient wall washing." },
  { image: ms30Spotlight, imageOn: ms30SpotlightOn, name: "MS30 Cylinder Spotlight", desc: "Precision COB spotlight with adjustable tilt for focused accent lighting." },
  { image: ms30Globe, imageOn: ms30GlobeOn, name: "MS30 Globe Spotlight", desc: "Spherical magnetic module with 360° rotation for artistic directional light." },
  { image: ms30DualSpot, imageOn: ms30DualSpotOn, name: "MS30 Dual Spotlight", desc: "Twin-head magnetic spotlight for balanced, symmetrical accent illumination." },
  { image: ms30LinearBar, imageOn: ms30LinearBarOn, name: "MS30 Linear LED Bar", desc: "Multi-lens linear module delivering clean, even downlight in narrow profiles." },
  { image: ms30TripleSpot, imageOn: ms30TripleSpotOn, name: "MS30 Triple Spotlight", desc: "Three-head cluster module for high-output focused lighting in retail and galleries." },
  { image: btGlassGlobe, imageOn: btGlassGlobeOn, name: "Belt Link Glass Globe", desc: "Frosted glass orb pendant on rope track for soft, diffused decorative glow." },
  { image: btDiscModule, imageOn: btDiscModuleOn, name: "Belt Link Disc Module", desc: "Flat disc downlight module for minimalist ceiling-mounted rope installations." },
  { image: btRopeLoop, imageOn: btRopeLoopOn, name: "Belt Link Rope Loop", desc: "Flexible U-shaped rope connector for sculptural hanging light compositions." },
  { image: btCylinderSpot, imageOn: btCylinderSpotOn, name: "Belt Link Cylinder Spot", desc: "Compact cylinder spotlight on rope track for warm directional accents." },
  { image: btClearGlobe, imageOn: btClearGlobeOn, name: "Belt Link Clear Globe", desc: "Transparent glass sphere with inner frosted bulb for elegant ambient illumination." },
];

const expertise = [
  { icon: Zap, title: "Energy Efficient", desc: "All our lighting solutions use cutting-edge LED technology for maximum efficiency and longevity." },
  { icon: Settings, title: "Track & Rope Systems", desc: "From MS30 magnetic tracks to Belt Link rope-light systems, we deliver flexible modular lighting ecosystems." },
  { icon: Palette, title: "Design Forward", desc: "Every product is selected for its aesthetic impact, bringing world-class design to Indian interiors." },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous quality control from factory floor to your doorstep. Premium materials, reliable performance." },
];

const LightsPage = () => {
  const [lightsOn, setLightsOn] = useState(false);

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

      {/* Collection Grid */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Collection</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-8">
            Our Light <span className="text-gradient-gold">Modules</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-body text-sm uppercase tracking-widest transition-colors duration-500 ${!lightsOn ? 'text-foreground' : 'text-muted-foreground'}`}>Off</span>
            <Switch
              checked={lightsOn}
              onCheckedChange={setLightsOn}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`font-body text-sm uppercase tracking-widest transition-colors duration-500 ${lightsOn ? 'text-primary' : 'text-muted-foreground'}`}>On</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.map((item, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden relative">
                  <img src={item.image} alt={item.name} loading="lazy" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${lightsOn ? 'opacity-0' : 'opacity-100'}`} />
                  <img src={item.imageOn} alt={`${item.name} illuminated`} loading="lazy" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${lightsOn ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground mb-1">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
