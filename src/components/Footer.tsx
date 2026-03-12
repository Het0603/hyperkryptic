import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              HYPER<span className="text-gradient-gold">KRYPTIC</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Innovating Spaces, Illuminating Lives. Premium designer interior lights and furniture imported from world-class manufacturers.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link>
              <Link to="/lights" className="block text-muted-foreground hover:text-primary text-sm transition-colors">Interior Lights</Link>
              <Link to="/furniture" className="block text-muted-foreground hover:text-primary text-sm transition-colors">Furniture</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+91 7043536163</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+91 9428026779</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>hetpatel.hktech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} HyperKryptic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
