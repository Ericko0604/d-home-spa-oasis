import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="section-padding relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-spa-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-spa-cream blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={logo}
              alt="D'Home Spa Logo"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl object-cover"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            Siap Untuk Relaksasi?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-primary-foreground/80 text-lg mb-12 max-w-lg mx-auto"
          >
            Hubungi kami sekarang untuk booking atau konsultasi layanan spa terbaik untuk Anda
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="https://www.instagram.com/dhomespaofficial_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-primary font-sans font-medium transition-all hover:shadow-xl hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href="https://maps.app.goo.gl/EexGPMAG27bGxPBy6?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-sans font-medium transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Lokasi</span>
            </motion.a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-spa-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-primary-foreground mb-2">DM Instagram</h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                @dhomespaofficial_
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-spa-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-primary-foreground mb-2">Home Service</h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                Kami datang ke lokasi Anda
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <Phone className="w-8 h-8 text-spa-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-primary-foreground mb-2">Booking Cepat</h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                Respon dalam 1 jam
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
