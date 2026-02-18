import { usePortfolioStore } from "../store/store";

export const Skills = () => {
  const { data } = usePortfolioStore();

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <img src={skill.icon} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins">
              {skill.name}
            </h3>
            <p className="text-gray-500 font-poppins">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
