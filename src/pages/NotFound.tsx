import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <Leaf className="w-16 h-16 text-spa-gold mx-auto mb-6" />
        <h1 className="font-serif text-7xl font-light text-primary mb-4">404</h1>
        <p className="font-sans text-xl text-muted-foreground mb-8">
          Halaman yang Anda cari tidak ditemukan
        </p>
        <motion.a 
          href="/" 
          className="btn-elegant inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Home className="w-4 h-4" />
          <span className="relative z-10">Kembali ke Beranda</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
