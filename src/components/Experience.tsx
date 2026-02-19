import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/store";

export const Experience = () => {
  const { data } = usePortfolioStore();

  return (
    <section id="experience" className="py-20 px-6 bg-[#f8f9e8]">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#77691c] font-poppins">
        Work Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-[#e5e7b8]"></div>

        <div className="space-y-12">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex gap-6 pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-4 h-4 bg-[#77691c] rounded-full" />

              {/* Card */}
              <div className="bg-white border border-[#e5e7b8] rounded-2xl shadow-md p-6 hover:shadow-2xl transition w-full">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-[#77691c]">
                      {exp.role}
                    </h3>
                    <p className="text-[#6b6b4d] font-medium font-poppins">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#6b6b4d] font-poppins">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[#6b6b4d] font-poppins">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
