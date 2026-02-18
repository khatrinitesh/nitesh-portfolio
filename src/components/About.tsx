import { usePortfolioStore } from "../store/store";

export const About = () => {
  const { data } = usePortfolioStore();

  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-poppins">About Me</h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
          <p className="text-gray-700 leading-relaxed font-poppins">
            {data.about}
          </p>

          <p className="mt-6 font-semibold text-indigo-600 font-poppins">
            {data.graduation}
          </p>
        </div>
      </div>
    </section>
  );
};
