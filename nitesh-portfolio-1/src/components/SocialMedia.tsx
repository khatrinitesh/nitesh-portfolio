import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SocialIcons } from "../constants/icon";
import { SocialLinks } from "../constants/social";

const SocialMedia = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
      }}
      className="mt-8 flex items-center justify-center gap-4"
    >
      {(Object.keys(SocialLinks) as Array<keyof typeof SocialLinks>).map(
        (key) => {
          const Icon = SocialIcons[key];
          return (
            <motion.a
              key={key}
              href={SocialLinks[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0d1020] text-violet-300 shadow-sm transition-colors hover:border-violet-300/40 hover:bg-violet-400 hover:text-[#100d20] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            >
              {key === "whatsapp" ? (
                <FaWhatsapp size={22} aria-hidden="true" />
              ) : (
                <Icon size={22} aria-hidden="true" />
              )}
            </motion.a>
          );
        },
      )}
    </motion.div>
  );
};

export default SocialMedia;
