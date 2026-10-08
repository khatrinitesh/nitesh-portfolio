import { Code2 } from "lucide-react";
import Reveal from "../components/common/Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-7">
            <p className="text-sm uppercase tracking-[0.3em] text-white/35">
              02 / Skills
            </p>

            <Code2 className="text-white/25" />
          </div>
        </Reveal>

        <div className="grid border border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.06} className="h-full">
              <div className="h-full border-b border-white/10 bg-[#080808] p-7 transition duration-500 hover:bg-white/[0.035] md:border-r lg:border-b-0">
                <p className="text-xs text-white/30">{skill.number}</p>

                <h3 className="mt-16 text-xl font-semibold">{skill.title}</h3>

                <div className="mt-7 space-y-3">
                  {skill.items.map((item) => (
                    <p key={item} className="text-sm text-white/45">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
