import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import Reveal from "../components/common/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-7">
            <p className="text-sm uppercase tracking-[0.3em] text-white/35">
              04 / Selected Projects
            </p>

            <Sparkles className="text-white/25" />
          </div>
        </Reveal>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={0.05}>
              <article
                className={`
                  grid
                  items-center
                  gap-8
                  lg:grid-cols-2
                  ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                {/* Image */}

                <div className="group relative overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs backdrop-blur">
                    {project.number}
                  </span>
                </div>

                {/* Content */}

                <div className="lg:px-8">
                  <p className="text-sm text-[#ff66e6]">{project.number}</p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-sm font-medium"
                      >
                        Live project
                        <ExternalLink
                          size={16}
                          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
                      >
                        GitHub
                        <ArrowUpRight
                          size={16}
                          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
