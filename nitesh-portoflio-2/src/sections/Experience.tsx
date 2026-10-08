import Reveal from "../components/common/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/10 px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-white/35">
            03 / Experience
          </p>
        </Reveal>

        <div className="mt-14 space-y-0">
          {experience.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <div className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[80px_1fr_180px] md:items-start">
                <span className="text-sm text-white/25">{item.number}</span>

                <div>
                  <h3 className="text-2xl font-medium md:text-3xl">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-white/45">{item.company}</p>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </div>

                <span className="text-sm text-white/35 md:text-right">
                  {item.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
