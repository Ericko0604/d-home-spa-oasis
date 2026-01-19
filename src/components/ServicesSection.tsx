import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Sparkles } from "lucide-react";

const services = [
  {
    name: "Full Body Massage",
    description: "Relaksasi total dari kepala hingga kaki",
    price90: "160k",
    price120: "190k",
    popular: true,
  },
  {
    name: "Massage & Refleksi",
    description: "Kombinasi pijat dan terapi refleksi kaki",
    price90: "180k",
    price120: "210k",
    popular: false,
  },
  {
    name: "Massage & Totok Wajah",
    description: "Pijat tubuh plus perawatan wajah tradisional",
    price90: "175k",
    price120: "205k",
    popular: false,
  },
  {
    name: "Massage & Scrub",
    description: "Pijat dengan body scrub untuk kulit halus",
    price90: "175k",
    price120: "205k",
    popular: false,
  },
  {
    name: "Massage & Kerokan",
    description: "Pijat dipadukan dengan terapi kerokan tradisional",
    price90: "175k",
    price120: "205k",
    popular: false,
  },
  {
    name: "Massage & Boreh",
    description: "Pijat dengan lulur boreh Bali hangat",
    price90: "175k",
    price120: "205k",
    popular: false,
  },
  {
    name: "Massage & Refleksi Kaki",
    description: "Fokus pada pijat dan terapi kaki",
    price90: "150k",
    price120: "180k",
    popular: false,
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block font-sans text-sm tracking-[0.3em] uppercase text-spa-gold mb-4"
          >
            Layanan Kami
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Pilih Perawatan
            <span className="block gradient-text">Terbaik Untuk Anda</span>
          </h2>
          <div className="decorative-line w-32 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Berbagai pilihan treatment profesional untuk memenuhi kebutuhan relaksasi Anda
          </p>
        </motion.div>

        {/* Duration Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Clock className="w-4 h-4 text-spa-gold" />
            <span className="font-sans text-sm text-muted-foreground">90 Menit</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-sans text-sm">120 Menit</span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`spa-card relative rounded-2xl p-6 ${
                service.popular ? "ring-2 ring-spa-gold" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-spa-gold text-spa-dark text-xs font-sans font-semibold tracking-wide flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              )}

              <h3 className="font-serif text-xl md:text-2xl text-primary mb-2">
                {service.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans text-muted-foreground w-16">90 min</span>
                    <span className="font-serif text-xl text-primary">
                      Rp {service.price90}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans text-muted-foreground w-16">120 min</span>
                    <span className="font-serif text-2xl text-spa-gold font-medium">
                      Rp {service.price120}
                    </span>
                  </div>
                </div>

                <motion.a
                  href="https://www.instagram.com/dhomespaofficial_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Booking
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-sans text-sm text-muted-foreground mt-12"
        >
          * Harga sudah termasuk perlengkapan spa lengkap
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
