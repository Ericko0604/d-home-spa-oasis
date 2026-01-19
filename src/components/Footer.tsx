import { motion } from "framer-motion";
import { Instagram, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Leaf className="w-6 h-6 text-spa-gold" />
            <div>
              <h3 className="font-serif text-xl text-spa-cream">D'Home Spa</h3>
              <p className="font-sans text-xs text-spa-cream/50">Spa & Massage Service</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-sans text-sm text-spa-cream/60 text-center">
            Relax • Refresh • Recharge
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.instagram.com/dhomespaofficial_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-spa-cream/10 hover:bg-spa-gold/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5 text-spa-cream" />
            </motion.a>
            <motion.a
              href="https://maps.app.goo.gl/EexGPMAG27bGxPBy6?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-spa-cream/10 hover:bg-spa-gold/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5 text-spa-cream" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-spa-cream/10 text-center">
          <p className="font-sans text-xs text-spa-cream/40">
            © 2026 D'Home Spa & Massage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
