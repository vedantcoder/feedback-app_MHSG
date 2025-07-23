const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 5000;

const DATA_FILE = "./feedback.json";

app.use(cors());
app.use(express.json());

//get feedbacks
app.get("/feedbacks", (req, res) => {
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

//post feedback
app.post("/feedbacks", (req, res) => {
  const { name, feedback } = req.body;
  if (!name || !feedback)
    return res.status(400).json({ error: "Missing fields" });

  const existing = JSON.parse(fs.readFileSync(DATA_FILE));
  const newEntry = {
    id: uuidv4(),
    name,
    feedback,
  };

  existing.push(newEntry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));

  res.status(201).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
