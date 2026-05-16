import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8081;

// API KEY

const API_KEY =
  process.env.NEWS_API_KEY ||
  "4cf7b9a807534b2aa4fc0fa9b8c85446";

// Home Route

app.get("/", (req, res) => {

  res.send("NewsNest Backend Running 🚀");

});

// Search News Route

app.get("/search", async (req, res) => {

  try {

    const query = req.query.q || "technology";

    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: query,
          language: "en",
          sortBy: "publishedAt",
          pageSize: 40,
          apiKey: API_KEY
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      error:
        error.response?.data ||
        "Failed to fetch news"
    });
  }
});

// Start Server

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});