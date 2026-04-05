import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroFurniture from "@/assets/hero-furniture.webp";

// Modern
import chairModern from "@/assets/chair-modern-b2520.webp";
import sofaModern from "@/assets/sofa-modern-madison.webp";
import tableModern from "@/assets/table-modern-dt6622.webp";

// Classic
import chairClassic from "@/assets/chair-classic-b2517.webp";
import sofaClassic from "@/assets/sofa-classic-pierre.webp";
import cabinetClassic from "@/assets/cabinet-classic-dx6609.webp";

// Elegant Royal
import chairElegant from "@/assets/chair-elegant-b2515.webp";
import sofaElegant from "@/assets/sofa-elegant-freeman.webp";
import tableElegant from "@/assets/table-elegant-dt6604.webp";
import cabinetElegant from "@/assets/cabinet-elegant-dx6606.webp";
import cabinetModern from "@/assets/cabinet-modern-dx6604.webp";

const modernProducts = [
  { image: sofaModern, name: "Madison Sofa", desc: "Clean-lined contemporary sofa with premium cotton-linen upholstery, carbon steel base, and goose down filling for unmatched comfort." },
  { image: chairModern, name: "B-2520 Accent Chair", desc: "Two-tone designer accent chair with sculptural silhouette. Fabric and leather combination with a dark wood swivel base." },
  { image: tableModern, name: "DT-6622 Dining Table", desc: "Oval marble-top dining table with solid walnut and Italian marble cylindrical legs. A stunning centerpiece for modern dining." },
];

const classicProducts = [
  { image: sofaClassic, name: "Pierre Sofa", desc: "Organic curved bouclé sofa with flowing lines. Teddy velvet upholstery in off-white, pine wood frame with spring cushioning for cloud-like comfort." },
  { image: chairClassic, name: "B-2517 Lounge Chair", desc: "Sculptural compact lounge chair with textured fabric. Available in grey and cream tones with a minimal dark base." },
  { image: cabinetClassic, name: "DX-6609 Round Cabinet", desc: "Elegant cylindrical cloakroom cabinet with curved leather exterior, walnut wood top, and precision-crafted compartmented drawers." },
];

const elegantProducts = [
  { image: sofaElegant, name: "FreeMan Sectional", desc: "Grand L-shaped sectional sofa in premium leather and linen. Stainless steel chrome base with cast aluminum feet — the ultimate statement of luxury." },
  { image: chairElegant, name: "B-2515 Tub Chair", desc: "Italian-inspired tub chair with graceful curves. Available in leather, cream, grey, and terracotta with a sleek swivel base." },
  { image: tableElegant, name: "DT-6604 Marble Table", desc: "Dark red marble round dining table with a sculptural chrome pedestal base. A breathtaking centerpiece for royal dining spaces." },
];

const FurniturePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={heroFurniture} alt="Luxury furniture showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Home Interiors</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            Luxury <span className="text-gradient-gold">Furniture</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            Curated designer furniture — sofas, chairs, dining tables & cabinets from the world's finest makers
          </p>
        </div>
      </section>

      {/* Modern Furniture */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Style One</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-4">
            Modern <span className="text-gradient-gold">Minimalist</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Clean lines, premium materials, and understated elegance. For spaces that speak through simplicity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modernProducts.map((item, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classic Furniture */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Style Two</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-4">
            Classic <span className="text-gradient-gold">Timeless</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Organic curves, soft textures, and enduring designs. Furniture that feels like home for generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classicProducts.map((item, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Royal Furniture */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Style Three</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-4">
            Elegant <span className="text-gradient-gold">Royal</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Grand proportions, premium leathers, and sculptural masterpieces. For those who demand the extraordinary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elegantProducts.map((item, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinets Feature */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Storage Solutions</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Designer <span className="text-gradient-gold">Cabinets</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cabinetElegant} alt="DX-6606 Luxury Cabinet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">DX-6606 Leather Cabinet</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">Premium cloakroom cabinet with cream leather finish, walnut wood top, leather strap handles, and precision-crafted jewelry compartments.</p>
              </div>
            </div>
            <div className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cabinetModern} alt="DX-6604 Wood Cabinet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">DX-6604 Walnut Tall Cabinet</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">Stunning walnut wood tall cabinet with 3D puzzle-pattern drawer fronts, integrated LED lighting, and cream leather panels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The HyperKryptic Difference</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            Why Our <span className="text-gradient-gold">Furniture</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Direct Import", desc: "We source directly from top manufacturers in China, eliminating middlemen for better quality and pricing." },
              { title: "Designer Curated", desc: "Every piece is hand-selected for its design merit, build quality, and ability to transform your space." },
              { title: "Complete Solutions", desc: "From living room to bedroom, we offer a cohesive furniture range that works beautifully together." },
            ].map((item, i) => (
              <div key={i} className="border-t border-primary/30 pt-8">
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default FurniturePage;
