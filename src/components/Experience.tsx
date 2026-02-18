import { usePortfolioStore } from "../store/store";

export const Experience = () => {
  const { data } = usePortfolioStore();

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 hover:shadow-2xl transition"
          >
            <img src={exp.logo} className="w-16 h-16 object-contain" />

            <div>
              <h3 className="text-xl font-bold font-poppins">{exp.role}</h3>
              <p className="text-indigo-600 font-medium font-poppins">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 font-poppins">
                {exp.duration}
              </p>
              <p className="mt-3 text-gray-600 font-poppins">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
