import { useParams } from "react-router-dom";

const PdfReader = () => {
  const { filename } = useParams();
  const pdfUrl = `/assets/${filename}`;

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-4">
      <h1 className="text-xl font-bold text-center mb-4 text-[#112250]">Notes</h1>
      <div className="flex justify-center">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="600px"
          className="border rounded shadow-lg max-w-5xl"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfReader;
