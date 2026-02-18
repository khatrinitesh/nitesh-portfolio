import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const ExportPDF = () => {
  const downloadPDF = async () => {
    const input = document.body;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0, 210, 295);
    pdf.save("Nitesh_Khatri_Portfolio.pdf");
  };

  return (
    <div className="text-center my-10">
      <button
        onClick={downloadPDF}
        className="cursor-pointer px-6 font-poppins py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
      >
        Export Portfolio as PDF
      </button>
    </div>
  );
};
