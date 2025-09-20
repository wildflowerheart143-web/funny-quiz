const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API route
app.post("/submit-quiz", (req, res) => {
  console.log("Form Data Received:", req.body);

  res.json({
    status: "success",
    message: "Quiz submitted successfully!",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});