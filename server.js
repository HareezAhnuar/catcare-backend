const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const catRoutes = require("./routes/catRoutes");
const healthRecordRoutes = require("./routes/healthRecordRoutes");
const behaviourGuideRoutes = require("./routes/behaviourGuideRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/cats", catRoutes);
app.use("/api/health-records", healthRecordRoutes);
app.use("/api/behaviour-guides", behaviourGuideRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "CatCare Tracker API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});