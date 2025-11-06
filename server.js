import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // loads .env variables


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "🚀 Backend is running successfully!" });
});

app.get("/api/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ greeting: `Hello, ${name}! 👋` });
});

// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
