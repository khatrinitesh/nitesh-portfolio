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
    <div className="text-center my-16">
      <button
        onClick={downloadPDF}
        className="cursor-pointer px-8 py-3 
                   bg-[#77691c] 
                   text-[#cbde31] 
                   font-semibold 
                   rounded-full 
                   shadow-lg 
                   hover:bg-[#5e5315] 
                   transition"
      >
        Export Portfolio as PDF
      </button>
    </div>
  );
};
