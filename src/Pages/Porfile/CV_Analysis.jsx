import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Vite-compatible worker import
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js?worker";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const CV_Analysis = () => {
  const [pdfText, setPdfText] = useState("");
  const [loading, setLoading] = useState(false);

  // Extract text from uploaded PDF
  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let extractedText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      extractedText += pageText + "\n";
    }

    return extractedText;
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const extracted = await extractTextFromPDF(file);
      setPdfText(extracted);
    } catch (error) {
      console.error("Error extracting PDF:", error);
      setPdfText("❌ Failed to extract text from PDF.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-3"> CV Viewer</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleUpload}
        className="border p-2 mb-4 w-full"
      />

      {loading && (
        <p className="text-gray-500">Extracting text... Please wait.</p>
      )}

      {pdfText && (
        <div className="mt-4 bg-gray-100 dark:bg-slate-800 p-4 rounded whitespace-pre-wrap text-sm text-gray-800 dark:text-white">
          {pdfText}
        </div>
      )}
    </div>
  );
};

export default CV_Analysis;
