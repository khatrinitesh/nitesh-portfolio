import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#171329] px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#141628] p-8 text-center shadow-[0_24px_70px_-36px_rgba(0,0,0,0.8)] sm:p-12 lg:p-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-violet-300/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-cyan-200/10"
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            Stay in touch
          </p>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-poppins leading-7 text-slate-400">
            Find me on social media and let&apos;s start a conversation.
          </p>
          <SocialMedia />
        </motion.div>
      </motion.div>
    </section>
  );
};
