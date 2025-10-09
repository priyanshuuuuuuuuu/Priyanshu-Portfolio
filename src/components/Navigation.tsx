import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-double border-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left - Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-xs tracking-wider text-foreground/70"
            >
              NEW DELHI, IN
            </motion.div>

            {/* Center - Logo/Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <div className="text-center">
                <h1 className="font-display text-2xl sm:text-3xl font-black tracking-tight">
                  THE PORTFOLIO
                </h1>
                <div className="flex items-center justify-center gap-2 text-[8px] font-serif tracking-widest text-muted-foreground">
                  <span>EST. 2025</span>
                  <span className="w-1 h-1 bg-foreground rounded-full"></span>
                  <span>DIGITAL EDITION</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Hamburger Menu */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-10 h-10 flex items-center justify-center border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hamburger Dropdown Menu with Shutter Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-20 left-0 right-0 z-40 overflow-hidden bg-card border-b-4 border-double border-foreground"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              <div className="grid grid-cols-1 gap-1">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left py-4 px-6 font-display text-2xl font-bold border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
