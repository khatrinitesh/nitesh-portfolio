import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from "lucide-react";
import { usePortfolioStore } from "../store/store";

export const Experience = () => {
  const { data } = usePortfolioStore();

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#151226] px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-8 bg-violet-400" />
            My journey
          </div>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-8 w-px bg-violet-300/20 sm:left-[23px]"
          />
          <div className="space-y-6 sm:space-y-8">
            {data.experience.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.duration}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.08, 0.4),
                  ease: "easeOut",
                }}
                className="group relative pl-12 sm:pl-14"
              >
                <div className="absolute left-0 top-7 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#151226] bg-violet-500 text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] sm:h-12 sm:w-12">
                  <BriefcaseBusiness size={17} aria-hidden="true" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#141628] p-5 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.8)] transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-300/25 group-hover:shadow-[0_24px_60px_-32px_rgba(109,76,195,0.28)] sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0d1020] p-2">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="font-poppins text-lg font-bold leading-snug text-slate-100 sm:text-xl">
                            {exp.role}
                          </h3>
                          <p className="mt-1 font-poppins font-medium text-violet-300">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#0d1020] px-3 py-1.5 text-xs font-medium text-slate-300">
                          <CalendarDays size={14} aria-hidden="true" />
                          {exp.duration}
                        </span>
                      </div>

                      <p className="mt-4 font-poppins text-sm leading-7 text-slate-400">
                        {exp.description}
                      </p>

                      {(exp.projectName ||
                        exp.projectLinks?.length ||
                        exp.projectLink) && (
                        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                          {exp.projectName && (
                            <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-semibold text-violet-200">
                              Project: {exp.projectName}
                            </span>
                          )}
                          {exp.projectLinks?.map((project) => (
                            <a
                              key={project.label}
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-violet-300 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                            >
                              {project.label}
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          ))}
                          {exp.projectLink && (
                            <a
                              href={exp.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-violet-300 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                            >
                              Visit company
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
