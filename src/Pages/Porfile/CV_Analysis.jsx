import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const CV_Analysis = () => {
  const [pdfText, setPdfText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // Extract text from uploaded PDF
  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.onload = async () => {
        try {
          const typedArray = new Uint8Array(fileReader.result);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;

          let extractedText = "";
          for (let i = 0; i < pdf.numPages; i++) {
            const page = await pdf.getPage(i + 1);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item) => item.str)
              .join(" ");
            extractedText += pageText + "\n";
          }
          resolve(extractedText);
        } catch (err) {
          reject(err);
        }
      };

      fileReader.onerror = reject;
      fileReader.readAsArrayBuffer(file);
    });
  };

  // Analyze the CV text
  const analyzeCV = (text) => {
    let analysisResult = {
      weaknesses: [],
      recommendations: [],
      missingSkills: [],
    };

    // Weakness detection
    if (!text.toLowerCase().includes("projects")) {
      analysisResult.weaknesses.push("No Projects Listed");
    }
    if (!text.toLowerCase().includes("skills")) {
      analysisResult.weaknesses.push("Skills section is missing");
    }
    if (!text.toLowerCase().includes("experience")) {
      analysisResult.weaknesses.push("Experience not clearly mentioned");
    }
    if (text.split(" ").length < 150) {
      analysisResult.weaknesses.push("CV is too short, add more details");
    }

    // Missing skills
    const industrySkills = [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Python",
      "Machine Learning",
      "Communication",
      "Problem Solving",
    ];

    industrySkills.forEach((skill) => {
      if (!text.toLowerCase().includes(skill.toLowerCase())) {
        analysisResult.missingSkills.push(skill);
      }
    });

    // Job Recommendations
    if (text.toLowerCase().includes("react")) {
      analysisResult.recommendations.push("Frontend Developer");
      analysisResult.recommendations.push("React Developer");
    }

    if (
      text.toLowerCase().includes("python") ||
      text.toLowerCase().includes("machine")
    ) {
      analysisResult.recommendations.push("Machine Learning Engineer");
      analysisResult.recommendations.push("Data Analyst");
    }

    if (analysisResult.recommendations.length === 0) {
      analysisResult.recommendations.push(
        "Suitable job role unclear — improve Skills & Projects section."
      );
    }

    return analysisResult;
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const extracted = await extractTextFromPDF(file);
      setPdfText(extracted);

      const result = analyzeCV(extracted);
      setAnalysis(result);
    } catch (error) {
      console.error("Error extracting PDF:", error);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">CV Analyzer</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleUpload}
        className="border p-2 mb-4"
      />

      {loading && <p>Analyzing CV... Please wait.</p>}

      {analysis && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-bold">Analysis Result:</h3>

          <p>
            <strong>Missing Skills:</strong> {analysis.missingSkills.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Weaknesses in CV:</strong>
            <ul className="list-disc ml-6">
              {analysis.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </p>

          <p className="mt-2">
            <strong>Recommended Jobs:</strong>
            <ul className="list-disc ml-6">
              {analysis.recommendations.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default CV_Analysis;
