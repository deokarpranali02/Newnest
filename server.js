import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8081;

const API_KEY = "YOUR_NEWS_API_KEY";

app.get("/", (req, res) => {

  res.send("NewsNest Backend Running 🚀");

});

app.get("/search", async (req, res) => {

  try {

    const query = req.query.q || "technology";

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
    );

    res.json(response.data);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to fetch news"
    });
  }
});

app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);

});