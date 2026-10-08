import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { usePortfolioStore } from "../store/store";

export const About = () => {
  const { data } = usePortfolioStore();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#101426] px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-8 bg-violet-400" />
            Get to know me
          </div>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.16 },
            },
          }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#141628] shadow-[0_24px_70px_-36px_rgba(0,0,0,0.8)] md:grid-cols-[1.5fr_0.85fr]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="p-7 sm:p-10 lg:p-14"
          >
            <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-400/10 text-violet-300">
              <Sparkles size={22} aria-hidden="true" />
            </div>
            <p className="font-poppins text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {data.about}
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 18 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-900 p-7 text-white sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/15"
            />
            <div className="relative">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <GraduationCap size={25} aria-hidden="true" />
              </div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-100">
                Education
              </p>
              <p className="font-poppins text-lg font-semibold leading-8 sm:text-xl">
                {data.graduation}
              </p>
            </div>
            <div className="relative mt-10 h-px w-full bg-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
