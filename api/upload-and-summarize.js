const express = require('express');
const multer = require('multer');
const { GoogleAIFileManager, GoogleGenerativeAI } = require('@google/generative-ai/server');

// Initialize GoogleAIFileManager and GoogleGenerativeAI with environment variables
const fileManager = new GoogleAIFileManager(process.env.GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const app = express();
const upload = multer({ dest: '/tmp/uploads/' });

app.post('/api/upload-and-summarize', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Google Generative AI
    const uploadResponse = await fileManager.uploadFile(file.path, {
      mimeType: file.mimetype,
      displayName: file.originalname,
    });

    const fileUri = uploadResponse.file.uri;

    // Generate summary using the uploaded file URI
    const summary = await generateSummary(fileUri, file.mimetype);

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
