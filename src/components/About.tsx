import { usePortfolioStore } from "../store/store";

export const About = () => {
  const { data } = usePortfolioStore();

  return (
    <section id="about" className="py-20 px-6 bg-[#f8f9e8]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-poppins text-[#77691c]">
          About Me
        </h2>

        <div className="bg-white border border-[#e5e7b8] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <p className="text-[#6b6b4d] leading-relaxed font-poppins">
            {data.about}
          </p>

          <p className="mt-6 font-semibold text-[#77691c] font-poppins">
            {data.graduation}
          </p>
        </div>
      </div>
    </section>
  );
};
