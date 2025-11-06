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


app.get("/api/check-db", async (req, res) => {
  try {
    const state = mongoose.connection.readyState;

    /*
      0 = disconnected
      1 = connected
      2 = connecting
      3 = disconnecting
    */
    let status = "unknown";
    if (state === 1) status = "connected";
    else if (state === 2) status = "connecting";
    else if (state === 0) status = "disconnected";
    else if (state === 3) status = "disconnecting";

    res.json({ mongoState: status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error checking MongoDB connection" });
  }
});


// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
