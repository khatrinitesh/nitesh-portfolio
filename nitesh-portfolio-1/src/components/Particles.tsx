import { motion } from "framer-motion";

export const Particles = () => {
  const particles = Array.from({ length: 20 });

  return (
    <>
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 4;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};
