import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lotus petals floating */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-spa-brown">
          <path d="M50 10 C60 30, 80 50, 50 90 C20 50, 40 30, 50 10" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%] w-12 h-12 opacity-15"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-spa-gold">
          <path d="M50 10 C60 30, 80 50, 50 90 C20 50, 40 30, 50 10" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[20%] w-20 h-20 opacity-10"
        animate={{
          y: [0, -35, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-spa-taupe">
          <path d="M50 10 C60 30, 80 50, 50 90 C20 50, 40 30, 50 10" />
        </svg>
      </motion.div>

      {/* Zen stones */}
      <motion.div
        className="absolute bottom-32 right-[25%] w-8 h-6 rounded-full bg-spa-taupe/20"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-60 left-[30%] w-6 h-4 rounded-full bg-spa-brown/15"
        animate={{
          y: [0, -20, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Soft glowing orbs */}
      <motion.div
        className="absolute top-1/3 right-[10%] w-32 h-32 rounded-full bg-spa-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[5%] w-40 h-40 rounded-full bg-spa-cream blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingElements;
