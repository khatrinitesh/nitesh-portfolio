import { usePortfolioStore } from "../store/store";

const Hero = () => {
  const { data } = usePortfolioStore();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white px-6">
      {/* Background blur circles */}
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-3xl bottom-20 right-20"></div>

      <div className="relative text-center max-w-3xl">
        <img
          src={data.profileImage}
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl mb-6"
        />

        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          {data.name}
        </h1>

        <p className="text-xl opacity-90 mb-6">{data.title}</p>

        <a
          href="#contact"
          className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
