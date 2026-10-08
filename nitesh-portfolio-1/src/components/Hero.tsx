import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePortfolioStore } from "../store/store";
import { Particles } from "./Particles";

const Hero: React.FC = () => {
  const { data } = usePortfolioStore();
  const heroRef = useRef<HTMLElement>(null);
  const fullText = `Hi, I'm ${data.name}`;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((currentText) => currentText + fullText[index]);
      setIndex((currentIndex) => currentIndex + 1);
    }, 65);

    return () => clearTimeout(timeout);
  }, [fullText, index]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".gsap-reveal",
        { opacity: 0, y: 28, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          delay: 0.15,
          ease: "power3.out",
        },
      );

      gsap.to(".gsap-glow", {
        scale: 1.08,
        opacity: 0.75,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gsap-float", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        gsap.to(".gsap-parallax", {
          x: x * 18,
          y: y * 14,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const resetParallax = () => {
        gsap.to(".gsap-parallax", {
          x: 0,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      };

      hero.addEventListener("pointermove", handlePointerMove);
      hero.addEventListener("pointerleave", resetParallax);

      return () => {
        hero.removeEventListener("pointermove", handlePointerMove);
        hero.removeEventListener("pointerleave", resetParallax);
      };
    }, hero);

    return () => context.revert();
  }, []);

  const scrollToSection = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#090b18] px-6 pb-16 pt-28 text-white sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="gsap-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,_rgba(111,76,196,0.25),_transparent_42%),radial-gradient(ellipse_at_20%_80%,_rgba(40,118,157,0.15),_transparent_38%)]"
      />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.2 },
            },
          }}
          className="gsap-reveal relative z-10 max-w-3xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-200"
          >
            <Sparkles size={15} aria-hidden="true" />
            <span>Frontend developer & UI engineer</span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            className="min-h-[2.4em] font-poppins text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {displayText}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-violet-300"
            />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 max-w-2xl font-poppins text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {data.title}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
              <p className="font-poppins text-2xl font-bold text-white">12+</p>
              <p className="mt-1 font-poppins text-xs text-slate-400">Years of experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
              <p className="font-poppins text-2xl font-bold text-white">5+</p>
              <p className="mt-1 font-poppins text-xs text-slate-400">Years with Front-End & React</p>
            </div>
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 max-w-xl font-poppins text-sm leading-7 text-slate-400 sm:text-base"
          >
            I build thoughtful, high-performance digital experiences with
            modern frontend technology and a passion for refined interfaces.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToSection}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-violet-400 px-6 py-3.5 font-poppins text-sm font-semibold text-[#100d20] shadow-lg shadow-violet-500/20 transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
            >
              Let&apos;s work together
              <ArrowRight size={17} aria-hidden="true" />
            </motion.button>
            <motion.button
              whileHover={{ x: 3 }}
              onClick={scrollToProjects}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-poppins text-sm font-semibold text-slate-200 transition-colors hover:border-violet-200/50 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
            >
              Explore my work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="gsap-parallax relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute h-72 w-72 rounded-full border border-dashed border-violet-300/25 sm:h-96 sm:w-96"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
            className="absolute h-60 w-60 rounded-full border border-cyan-200/10 sm:h-[21rem] sm:w-[21rem]"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="gsap-float relative rounded-full bg-gradient-to-br from-violet-300 via-violet-500 to-cyan-300 p-[3px] shadow-[0_0_90px_rgba(139,92,246,0.25)]"
          >
            <img
              src={data.profileImage}
              alt={data.name}
              className="h-56 w-56 rounded-full border-4 border-[#101020] object-cover sm:h-72 sm:w-72"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-3 left-0 rounded-2xl border border-white/10 bg-[#171729]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-2"
          >
            <p className="font-poppins text-xs text-slate-400">Specializing in</p>
            <p className="mt-1 font-poppins text-sm font-semibold text-white">
              React · TypeScript · UI
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToProjects}
        aria-label="Scroll to Featured Projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center justify-center rounded-full border border-white/15 p-3 text-slate-300 transition-colors hover:border-violet-200/50 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200 sm:flex"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
