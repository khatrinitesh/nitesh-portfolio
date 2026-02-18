import SocialMedia from "./SocialMedia";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-br from-indigo-700 to-purple-700 text-white"
    >
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center shadow-2xl">
        <h2 className="text-4xl font-bold mb-8 font-poppins">Let's Connect</h2>
        <SocialMedia />
      </div>
    </section>
  );
};
