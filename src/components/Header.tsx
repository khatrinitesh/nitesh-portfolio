import { usePortfolioStore } from "../store/store";
import { motion } from "framer-motion";

const Header = () => {
  const { data } = usePortfolioStore();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        src={data.profileImage}
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        {data.name}
      </motion.h1>
      <p className="text-lg mt-2">{data.title}</p>
    </section>
  );
};

export default Header;
