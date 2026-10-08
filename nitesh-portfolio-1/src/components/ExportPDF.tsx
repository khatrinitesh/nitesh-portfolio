import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export const ExportPDF = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/pdf/nitesh-khatri-resume-front-end-ui-developer.pdf";
    link.download = "nitesh-khatri-resume-front-end-ui-developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0c0e1c] px-6 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-[#141628] p-8 text-center shadow-[0_24px_70px_-36px_rgba(0,0,0,0.8)] sm:p-10 md:flex-row md:text-left"
      >
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-400/10 text-violet-300">
            <FileText size={25} aria-hidden="true" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              Want to know more?
            </p>
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Take my resume with you
            </h2>
          </div>
        </div>
        <motion.button
          onClick={downloadPDF}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-violet-400 px-6 py-3.5 font-poppins text-sm font-semibold text-[#100d20] shadow-lg shadow-violet-500/20 transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
        >
          <Download size={17} aria-hidden="true" />
          Download Resume
        </motion.button>
      </motion.div>
    </section>
  );
};
