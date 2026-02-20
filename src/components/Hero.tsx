import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animation";
import { usePortfolioStore } from "../store/store";
import { Particles } from "./Particles";

const Hero: React.FC = () => {
  const { data } = usePortfolioStore();

  const fullText = "Hi, I am Nitesh Khatri";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToSection = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "#cbde31" }}
    >
      <Particles />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center max-w-3xl mb-12"
      >
        {/* Profile Image */}
        <motion.img
          variants={itemVariants}
          src={data.profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-[#77691c] shadow-2xl mb-6"
        />

        {/* Typewriter Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
          style={{ color: "#77691c" }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl mb-6"
          style={{ color: "#77691c" }}
        >
          {data.title}
        </motion.p>

        {/* Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToSection}
          className="px-8 py-3 font-semibold rounded-full shadow-lg transition"
          style={{
            backgroundColor: "#77691c",
            color: "#cbde31",
          }}
        >
          Hire Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
