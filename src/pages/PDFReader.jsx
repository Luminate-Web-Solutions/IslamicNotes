import React from 'react';
import { useParams } from 'react-router-dom';

const PDFReader = () => {
  const { fileName } = useParams();
  const pdfPath = `/assets/${fileName}`;

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50 p-4">
      <iframe
         src={pdfPath}
        title={fileName}
        className="w-full h-[90vh] border border-green-300 shadow-lg rounded-xl"
      ></iframe>
    </div>
  );
};

export default PDFReader;
