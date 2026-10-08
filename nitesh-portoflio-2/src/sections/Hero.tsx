import { ArrowDownRight } from "lucide-react";

import { motion } from "motion/react";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";

interface HeroProps {
  onProjects: () => void;
}

export default function Hero({ onProjects }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-24 md:px-8"
    >
      {/* Background glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff66e6]/10 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-350">
        <Reveal>
          <div className="mb-8 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff66e6]" />
            Available for creative frontend projects
          </div>
        </Reveal>

        <div className="max-w-6xl">
          <Reveal delay={0.08}>
            <h1 className="text-[clamp(4rem,11vw,10.5rem)] font-extrabold leading-[0.82] tracking-[-0.07em]">
              NITESH
              <br />
              <span className="text-white/20">KHATRI.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-end">
              <div>
                <p className="text-2xl font-medium md:text-4xl">
                  Frontend UI Developer
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  I build modern, responsive and interactive digital experiences
                  with React, TypeScript, Tailwind CSS and motion.
                </p>
              </div>

              <Button
                type="button"
                onClick={onProjects}
                icon={
                  <ArrowDownRight
                    size={17}
                    className="transition group-hover:rotate-[-45deg]"
                  />
                }
              >
                Explore work
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
