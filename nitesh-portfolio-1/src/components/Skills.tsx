import { motion, type Variants } from "framer-motion";
import { usePortfolioStore } from "../store/store";

const skillsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Skills = () => {
  const { data } = usePortfolioStore();

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#0d1726] px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-8 bg-violet-400" />
            Tools of my trade
          </div>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl font-poppins leading-7 text-slate-400">
            Technologies and creative tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5"
        >
          {data.skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              variants={skillVariants}
              whileHover={{ y: -5, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141628] p-5 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.8)] transition-colors hover:border-violet-300/30 hover:bg-[#191b31] hover:shadow-[0_24px_60px_-32px_rgba(109,76,195,0.28)] sm:p-6"
            >
              <span className="absolute right-4 top-4 font-poppins text-[10px] font-semibold tracking-[0.16em] text-violet-300/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/10 bg-[#0d1020] p-3 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={skill.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`h-full w-full object-contain ${
                    ["Responsive Web Design", "GitHub", "TanStack"].includes(skill.name)
                      ? "brightness-0 invert"
                      : ""
                  }`}
                />
              </div>
              <h3 className="font-poppins text-sm font-bold leading-snug text-slate-100 transition-colors group-hover:text-violet-200 sm:text-base">
                {skill.name}
              </h3>
              {skill.level && (
                <p className="mt-2 font-poppins text-xs leading-5 text-slate-400">
                  {skill.level}
                </p>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
