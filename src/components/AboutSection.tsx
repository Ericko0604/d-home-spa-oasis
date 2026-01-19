import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Award, Heart, Clock } from "lucide-react";
import spaImage from "@/assets/spa-ambiance.jpg";

const features = [
  {
    icon: Home,
    title: "Home Service",
    description: "Kami datang ke rumah Anda untuk kenyamanan maksimal",
  },
  {
    icon: Award,
    title: "Terapis Profesional",
    description: "Tim terapis bersertifikat dan berpengalaman",
  },
  {
    icon: Heart,
    title: "Perawatan Premium",
    description: "Produk dan teknik spa berkualitas tinggi",
  },
  {
    icon: Clock,
    title: "Fleksibel",
    description: "Jadwal yang dapat disesuaikan dengan kebutuhan Anda",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="tentang" className="section-padding relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={spaImage}
                alt="Spa ambiance with candles and aromatherapy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/40 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-[200px]"
            >
              <div className="text-4xl font-serif text-spa-gold mb-2">5+</div>
              <p className="font-sans text-sm text-muted-foreground">
                Tahun melayani keluarga Indonesia
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-20 h-20 border border-spa-gold/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 -left-5 w-10 h-10 border border-spa-taupe/30 rounded-full"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div style={{ y: textY }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block font-sans text-sm tracking-[0.3em] uppercase text-spa-gold mb-4"
            >
              Tentang Kami
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight"
            >
              Hadirkan Ketenangan
              <span className="block gradient-text">Di Rumah Anda</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-muted-foreground leading-relaxed mb-8"
            >
              D'Home Spa hadir untuk memberikan pengalaman spa profesional tanpa perlu keluar rumah. 
              Kami percaya bahwa setiap orang berhak mendapatkan momen relaksasi berkualitas 
              dalam kenyamanan ruang mereka sendiri.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-muted-foreground leading-relaxed mb-10"
            >
              Dengan tim terapis profesional dan peralatan lengkap, kami siap memberikan 
              treatment terbaik untuk membantu Anda relax, refresh, dan recharge.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-spa-gold mb-3" />
                  <h3 className="font-serif text-lg text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
