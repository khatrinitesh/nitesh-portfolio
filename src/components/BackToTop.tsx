import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setShow(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#766925] cursor-pointer text-white shadow-xl"
          >
            {/* Floating animation separated */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <FaRocket
                className="-rotate-45! relative text-[#cbdf49]"
                size={22}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
