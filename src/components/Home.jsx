import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";

function Home() {

  const [articles, setArticles] = useState([]);

  // Fetch News

  const searchNews = async (query) => {

    try {

      const response = await fetch(
        `http://localhost:8081/search?q=${query}`
      );

      const data = await response.json();

      setArticles(data.articles || []);

      // Auto Scroll to News Section

      setTimeout(() => {

        const newsSection =
          document.getElementById("news-section");

        if (newsSection) {

          newsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

      }, 300);

    } catch (error) {

      console.log(error);
    }
  };

  // Default News

  useEffect(() => {

    searchNews("technology");

  }, []);

  return (

    <div className="min-h-screen relative overflow-hidden bg-[#04130f] aurora">

      {/* Navbar */}

      <Navbar onSearch={searchNews} />

      {/* Breaking News */}

      <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-400 text-white py-3 overflow-hidden whitespace-nowrap shadow-2xl">

        <div className="animate-marquee inline-block font-semibold tracking-wider text-sm md:text-base">

          🌍 LIVE GLOBAL NEWS • AI BREAKTHROUGH • WORLD ECONOMY • IPL 2026 • NASA SPACE MISSIONS • TECH STARTUPS • CYBER SECURITY • FUTURE OF AI 🚀

        </div>

      </div>

      {/* Main */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Hero Section */}

        <div className="text-center mb-24 hero-text">

          {/* Live Global Button */}

          <button
            onClick={() => searchNews("world")}
            className="glass glow live-btn px-10 py-4 rounded-full mb-10 text-sm md:text-base font-bold tracking-[4px] uppercase transition duration-500"
          >

            🌍 Live Global Feed

          </button>

          {/* Main Heading */}

          <div className="relative inline-block">

            {/* Glow */}

            <div className="absolute inset-0 blur-[120px] opacity-30 bg-emerald-400 rounded-full"></div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight relative z-10">

              <span className="block text-white mb-3 future-text">

                FUTURE OF

              </span>

              <span className="block gradient-text futuristic-title">

                NEWSNEST

              </span>

            </h1>

          </div>

          {/* Subtitle */}

          <p className="hero-subtitle text-gray-300 text-lg md:text-2xl max-w-5xl mx-auto mt-10 leading-10 font-light">

            Step into the next generation of digital journalism with
            immersive live coverage,
            AI-powered discovery,
            futuristic storytelling,
            and real-time global news experiences crafted for the modern world.

          </p>

          {/* Stats */}

          <div className="flex flex-wrap justify-center gap-8 mt-16">

            {/* Box 1 */}

            <div className="glass glow stat-box px-10 py-8 rounded-[35px] min-w-[220px]">

              <h2 className="text-5xl font-black gradient-text stat-number">

                24/7

              </h2>

              <p className="text-gray-300 mt-3 text-lg tracking-wide">

                Live Coverage

              </p>

            </div>

            {/* Box 2 */}

            <div className="glass glow stat-box px-10 py-8 rounded-[35px] min-w-[220px]">

              <h2 className="text-5xl font-black gradient-text stat-number">

                AI

              </h2>

              <p className="text-gray-300 mt-3 text-lg tracking-wide">

                Smart Discovery

              </p>

            </div>

            {/* Box 3 */}

            <div className="glass glow stat-box px-10 py-8 rounded-[35px] min-w-[220px]">

              <h2 className="text-5xl font-black gradient-text stat-number">

                Global

              </h2>

              <p className="text-gray-300 mt-3 text-lg tracking-wide">

                Trending Topics

              </p>

            </div>

          </div>

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-5 mb-16">

          <button
            onClick={() => searchNews("technology")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            ⚡ Technology
          </button>

          <button
            onClick={() => searchNews("sports")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            🏆 Sports
          </button>

          <button
            onClick={() => searchNews("business")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            💼 Business
          </button>

          <button
            onClick={() => searchNews("health")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            ❤️ Health
          </button>

          <button
            onClick={() => searchNews("entertainment")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            🎬 Entertainment
          </button>

          <button
            onClick={() => searchNews("science")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            🚀 Science
          </button>

          <button
            onClick={() => searchNews("world")}
            className="glass glow px-7 py-4 rounded-2xl font-bold hover:scale-110 transition duration-300"
          >
            🌍 World
          </button>

        </div>

        {/* Search Heading */}

        <div className="mb-10 text-center">

          <h2 className="text-4xl md:text-5xl font-black gradient-text">

            Latest News Feed

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            Real-time stories from around the world

          </p>

        </div>

        {/* News Grid */}

        <div
          id="news-section"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >

          {articles.length > 0 ? (

            articles.map((article, index) => (

              <NewsCard
                key={index}
                article={article}
              />

            ))

          ) : (

            <h1 className="text-white text-3xl text-center col-span-full">

              No News Found 😢

            </h1>

          )}

        </div>

      </div>

    </div>
  );
}

export default Home;