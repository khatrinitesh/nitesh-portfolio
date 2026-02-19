import SocialMedia from "./SocialMedia";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#cbde31]">
      <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-10 text-center shadow-xl border border-[#e5e7b8]">
        <h2 className="text-4xl font-bold mb-8 text-[#77691c] font-poppins">
          Let's Connect
        </h2>

        <SocialMedia />
      </div>
    </section>
  );
};
