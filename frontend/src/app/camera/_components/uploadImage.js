"use client";
import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Tesseract from "tesseract.js";
import CustomButton from "@/components/ui/CustomButton";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [cleanedResult, setCleanedResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0])); // Set image preview
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setOcrProgress(0); // Reset progress

    try {
      // Use Tesseract.js for OCR on the selected image
      const {
        data: { text },
      } = await Tesseract.recognize(
        selectedFile,
        "eng", // Specify the language (change as necessary)
        {
          logger: (m) => {
            console.log(m);
            if (m.status === "recognizing text") {
              setOcrProgress(m.progress * 100); // Update progress
            }
          },
        }
      );

      setResult(text); // Set the extracted text as result

      // Now send the extracted text to GPT-4 for processing and cleaning
      const gptResponse = await fetch("/api/gpt4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }), // Send extracted text to GPT-4
      });

      const cleanedData = await gptResponse.json();
      setCleanedResult(cleanedData); // Set the cleaned response from GPT-4
    } catch (error) {
      console.error("Error during OCR or GPT-4 processing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        color={"var(--darkgreen)"}
        fontWeight={"bold"}
        variant="h4"
        marginBottom={"1.5rem"}
      >
        Upload Menu Image
      </Typography>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <CustomButton buttonType="submit" disabled={!selectedFile || loading}>
          {loading ? <CircularProgress size={24} /> : "Upload"}
        </CustomButton>
      </form>

      {imagePreview && (
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="h6">Image Preview:</Typography>
          <img src={imagePreview} alt="Selected Image" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      )}

      {loading && (
        <div style={{ marginTop: "10px" }}>
          <p>OCR Progress: {ocrProgress.toFixed(2)}%</p>
        </div>
      )}

      {cleanedResult && (
        <div style={{ marginTop: "20px" }}>
          <h3>Processed and Cleaned Text:</h3>
          <pre>{JSON.stringify(cleanedResult, null, 2)}</pre>
          {cleanedResult.menu_items && cleanedResult.menu_items.length > 0 ? (
            <div>
              <Typography variant="h6">Menu Items:</Typography>
              <ul>
                {cleanedResult.menu_items.map((item, index) => (
                  <li key={index}>
                    {item.item}: Rs.{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Typography variant="h6">No menu items found.</Typography>
          )}
        </div>
      )}
    </Box>
  );
}
