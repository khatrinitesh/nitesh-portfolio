import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { galleryItems } from "../constants/galleryItems";
import type { GalleryItem } from "../interface/interface";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const handleCardMove = (event: React.MouseEvent<HTMLElement>) => {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const rotateX = ((y / bounds.height) - 0.5) * -6;
  const rotateY = ((x / bounds.width) - 0.5) * 6;

  gsap.to(card, {
    rotateX,
    rotateY,
    y: -8,
    transformPerspective: 900,
    duration: 0.35,
    ease: "power2.out",
    overwrite: "auto",
  });
  gsap.to(card.querySelector(".project-card-image"), {
    scale: 1.08,
    x: (x / bounds.width - 0.5) * 8,
    y: (y / bounds.height - 0.5) * 8,
    duration: 0.45,
    ease: "power2.out",
    overwrite: "auto",
  });
  gsap.to(card.querySelector(".project-card-overlay"), {
    opacity: 0.78,
    duration: 0.3,
    overwrite: "auto",
  });
};

const handleCardLeave = (event: React.MouseEvent<HTMLElement>) => {
  const card = event.currentTarget;

  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    y: 0,
    duration: 0.7,
    ease: "elastic.out(1, 0.55)",
    overwrite: "auto",
  });
  gsap.to(card.querySelector(".project-card-image"), {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.65,
    ease: "power3.out",
    overwrite: "auto",
  });
  gsap.to(card.querySelector(".project-card-overlay"), {
    opacity: 1,
    duration: 0.45,
    overwrite: "auto",
  });
};

const PortfolioGallery: React.FC = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0b1220] px-6 py-24 sm:py-28"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-8 bg-violet-400" />
            Selected work
          </div>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl font-poppins leading-7 text-slate-400">
            A selection of digital experiences built for brands and teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {galleryItems.map((item: GalleryItem, index) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              transition={{ type: "spring", stiffness: 280, damping: 23 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#141628] shadow-[0_18px_50px_-36px_rgba(0,0,0,0.8)] transition-colors hover:border-violet-300/25 hover:shadow-[0_24px_60px_-32px_rgba(109,76,195,0.28)]"
            >
              <div className="relative isolate aspect-[4/3] overflow-hidden bg-[#101020]">
                {item.src ? (
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="project-card-image absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={item.alt}
                    className="project-card-image absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_#711c23_0%,_#390b12_62%,_#21070b_100%)] px-5 text-center text-white"
                  >
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-48 w-48 rounded-full border border-dashed border-white/20"
                    />
                    <span className="relative text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      Ogilvy presents
                    </span>
                    <span className="relative mt-3 font-serif text-4xl font-bold tracking-tight">
                      Basecamp
                    </span>
                    <span className="relative mt-3 h-px w-10 bg-red-400" />
                    <span className="relative mt-3 text-sm text-white/75">
                      Workshop experience
                    </span>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="project-card-overlay absolute inset-0 bg-gradient-to-t from-[#21070b]/90 via-[#21070b]/10 to-[#21070b]/15"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#21070b]/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                {item.src && (
                  <h3 className="absolute inset-x-4 bottom-4 font-poppins text-lg font-semibold leading-snug text-white drop-shadow sm:text-xl">
                    {item.title}
                  </h3>
                )}
              </div>

              <div className="p-5">
                {!item.src && (
                  <h3 className="font-poppins text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                )}
                {item.tech && (
                  <p className="mt-2 font-poppins text-sm leading-6 text-slate-400">
                    {item.tech}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {item.liveUrl && (
                    <motion.a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-violet-400 px-3.5 py-2.5 text-xs font-semibold text-[#100d20] transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                    >
                      View project
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </motion.a>
                  )}
                  {item.liveLinks?.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-violet-400 px-3.5 py-2.5 text-xs font-semibold text-[#100d20] transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                    >
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
