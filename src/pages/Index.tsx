import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroHome from "@/assets/hero-home.jpg";
import heroLights from "@/assets/hero-lights.jpg";
import heroFurniture from "@/assets/hero-furniture.jpg";
import { ArrowRight, Lightbulb, Sofa, Globe, Award } from "lucide-react";

import showroom1 from "@/assets/lights-showroom-1.png";
import showroom2 from "@/assets/lights-showroom-2.png";
import ms30UltraThinCover from "@/assets/ms30-ultra-thin-cover.jpg";
import ms30LightModules from "@/assets/ms30-light-modules.jpg";
import beltLinkHomeScene from "@/assets/beltlink-home-scene.jpg";
import beltLinkLightModules from "@/assets/beltlink-light-modules.jpg";

import chairModern from "@/assets/chair-modern-b2520.jpg";
import sofaModern from "@/assets/sofa-modern-madison.jpg";
import tableModern from "@/assets/table-modern-dt6622.jpg";
import chairClassic from "@/assets/chair-classic-b2517.jpg";
import sofaClassic from "@/assets/sofa-classic-pierre.jpg";
import cabinetClassic from "@/assets/cabinet-classic-dx6609.jpg";
import chairElegant from "@/assets/chair-elegant-b2515.jpg";
import sofaElegant from "@/assets/sofa-elegant-freeman.jpg";
import tableElegant from "@/assets/table-elegant-dt6604.jpg";
import cabinetElegant from "@/assets/cabinet-elegant-dx6606.jpg";
import cabinetModern from "@/assets/cabinet-modern-dx6604.jpg";

const backgroundPreloadAssets = [
  heroLights,
  heroFurniture,
  ms30UltraThinCover,
  ms30LightModules,
  beltLinkHomeScene,
  beltLinkLightModules,
  chairModern,
  sofaModern,
  tableModern,
  chairClassic,
  sofaClassic,
  cabinetClassic,
  chairElegant,
  sofaElegant,
  tableElegant,
  cabinetElegant,
  cabinetModern,
];

const Index = () => {
  useEffect(() => {
    const prefetchedLinks: HTMLLinkElement[] = [];

    const timer = window.setTimeout(() => {
      backgroundPreloadAssets.forEach((src) => {
        const image = new Image();
        image.decoding = "async";
        image.src = src;
      });

      const videoPrefetch = document.createElement("link");
      videoPrefetch.rel = "prefetch";
      videoPrefetch.as = "video";
      videoPrefetch.href = "/videos/lights-showcase.mp4";
      videoPrefetch.dataset.preload = "true";
      document.head.appendChild(videoPrefetch);
      prefetchedLinks.push(videoPrefetch);
    }, 500);

    return () => {
      window.clearTimeout(timer);
      prefetchedLinks.forEach((link) => link.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <img src={heroHome} alt="Luxury interior with designer lighting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in">
            Innovating Spaces, Illuminating Lives
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 animate-fade-up">
            Hyper<span className="text-gradient-gold">Kryptic</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium designer interior lights & luxury furniture, sourced from world-class manufacturers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/lights" className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
              Explore Lights
            </Link>
            <Link to="/furniture" className="border border-foreground/30 text-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">
              View Furniture
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Curating Excellence<br />From the <span className="text-gradient-gold">World</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              HyperKryptic specializes in sourcing and importing innovative ceiling lights, track lighting systems, and premium interior furniture from world-class manufacturers. We bring India the best innovative interior designs and ideas from worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Sourcing", desc: "Direct imports from world-class manufacturers" },
              { icon: Lightbulb, title: "Innovative Design", desc: "Cutting-edge, energy-efficient lighting solutions" },
              { icon: Award, title: "Premium Quality", desc: "Only the finest materials and craftsmanship" },
              { icon: Sofa, title: "Complete Interiors", desc: "Lights & furniture for every space" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-8 text-center group hover:border-primary/30 transition-colors duration-500">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Our Collections</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Two Worlds, One <span className="text-gradient-gold">Vision</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/lights" className="group relative overflow-hidden aspect-[4/3]">
              <img src={heroLights} alt="Designer interior lights" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">Collection</p>
                <h3 className="font-display text-3xl text-foreground mb-3">Interior Lights</h3>
                <div className="flex items-center gap-2 text-primary font-body text-sm tracking-wider group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link to="/furniture" className="group relative overflow-hidden aspect-[4/3]">
              <img src={heroFurniture} alt="Premium furniture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">Collection</p>
                <h3 className="font-display text-3xl text-foreground mb-3">Luxury Furniture</h3>
                <div className="flex items-center gap-2 text-primary font-body text-sm tracking-wider group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Purpose</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            Mission & <span className="text-gradient-gold">Vision</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l border-primary pl-8 text-left">
              <h3 className="font-display text-2xl text-foreground mb-4">Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To provide accessible, high-quality, and stylish lighting solutions and furniture that elevate spaces worldwide. To give India the best innovative interior designs and ideas from across the globe.
              </p>
            </div>
            <div className="border-l border-primary pl-8 text-left">
              <h3 className="font-display text-2xl text-foreground mb-4">Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To brighten lives and elevate interiors with forward-thinking technologies. Lead the industry through relentless innovation, customer-centric approach, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
