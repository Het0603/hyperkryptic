import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroFurniture from "@/assets/hero-furniture.jpg";
import furnitureChair from "@/assets/furniture-chair.jpg";
import furnitureSofa from "@/assets/furniture-sofa.jpg";
import furnitureTv from "@/assets/furniture-tvcabinet.jpg";
import furnitureBed from "@/assets/furniture-bed.jpg";
import furnitureDining from "@/assets/furniture-dining.jpg";

const categories = [
  { image: furnitureChair, name: "Designer Chairs", desc: "Handcrafted accent chairs and armchairs that blend comfort with sculptural design. Statement pieces for any room." },
  { image: furnitureSofa, name: "Luxury Sofas", desc: "Premium sectional and modular sofas with clean silhouettes, crafted from the finest fabrics and engineered for lasting comfort." },
  { image: furnitureTv, name: "TV Cabinets", desc: "Modern entertainment units combining dark wood and metal for a sophisticated media center that organizes and elevates your space." },
  { image: furnitureBed, name: "Premium Beds", desc: "Upholstered platform beds with elegant headboard designs. Built for superior comfort and a commanding bedroom presence." },
  { image: furnitureDining, name: "Dining Tables", desc: "Striking dining tables with sculptural bases and rich wood surfaces. The centerpiece of memorable gatherings." },
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
            Curated designer furniture — chairs, sofas, beds, TV cabinets & dining tables from the world's finest makers
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Our Range</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Furniture <span className="text-gradient-gold">Collection</span>
          </h2>

          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {categories.slice(0, 3).map((item, i) => (
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

          {/* Second row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.slice(3).map((item, i) => (
              <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-[4/3] overflow-hidden">
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

      {/* Why Choose */}
      <section className="py-24 px-6 bg-secondary">
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

      <Footer />
    </div>
  );
};

export default FurniturePage;
