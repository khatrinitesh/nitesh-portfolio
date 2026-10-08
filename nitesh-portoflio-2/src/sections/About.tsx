import Reveal from "../components/common/Reveal";

export default function About() {
  const stats = [
    {
      number: "01",
      label: "React",
    },

    {
      number: "02",
      label: "TypeScript",
    },

    {
      number: "03",
      label: "Tailwind",
    },

    {
      number: "04",
      label: "UI Motion",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-white/35">
            01 / About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              I turn ideas into{" "}
              <span className="text-white/35">
                clean, expressive and high-performing interfaces.
              </span>
            </h2>

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/50">
              I’m a frontend-focused developer who enjoys translating visual
              concepts into polished products. My work sits between design and
              engineering — with a strong focus on responsive systems, reusable
              components and thoughtful motion.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.number}>
                  <p className="text-2xl font-semibold">{item.number}</p>

                  <p className="mt-2 text-sm text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
