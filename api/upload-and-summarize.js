const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { GoogleAIFileManager, GoogleGenerativeAI } = require('@google/generative-ai/server');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: path.join(__dirname, 'uploads') });

// Enable CORS for all origins
app.use(cors());

// Initialize GoogleAIFileManager and GoogleGenerativeAI
const fileManager = new GoogleAIFileManager(process.env.GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/api/upload-and-summarize', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Google Generative AI
    const uploadResponse = await fileManager.uploadFile(req.file.path, {
      mimeType: req.file.mimetype,
      displayName: req.file.originalname,
    });

    const fileUri = uploadResponse.file.uri;

    // Generate summary using the uploaded file URI
    const summary = await generateSummary(fileUri, req.file.mimetype);

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    // Respond with the summary
    res.json({ summary });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to generate the summary using the Google Generative AI model
async function generateSummary(fileUri, mimeType) {
  try {
    // Initialize the content generation model using "gemini-1.5-flash"
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent([
      {
        fileData: {
          mimeType: mimeType,
          fileUri: fileUri,
        },
      },
      { text: "Can you summarize this document?" },
    ]);

    // Return the generated summary
    return result.response.text();
  } catch (error) {
    console.error("Error generating summary:", error);
    throw new Error("Error generating summary");
  }
}

module.exports = app;
