import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";

function Home() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch News

  const searchNews = async (query) => {

    try {

      setLoading(true);

      const response = await fetch(
  `https://newnest.onrender.com/search?q=${query}`
);

      const data = await response.json();

      setArticles(data.articles || []);

      // Auto Scroll To News

      setTimeout(() => {

        const newsSection =
          document.getElementById("news-section");

        if (newsSection) {

          newsSection.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 300);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Hero */}

<div className="text-center mb-20 hero-text">

  {/* Live Global Button */}

  <button
    onClick={() => searchNews("world")}
    className="glass glow live-btn px-7 sm:px-10 py-3 sm:py-4 rounded-full mb-10 text-xs sm:text-sm md:text-base font-bold tracking-[3px] uppercase transition duration-500"
  >

    🌍 Live Global Feed

  </button>

  {/* Heading */}

  <div className="relative inline-block">

    {/* Glow Background */}

    <div className="absolute inset-0 blur-[120px] opacity-40 bg-emerald-400 rounded-full"></div>

    {/* Main Title */}

    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight relative z-10">

      <span className="block gradient-text futuristic-title uppercase tracking-[12px] sm:tracking-[18px]">

        NEWSNEST

      </span>

    </h1>

  </div>

  {/* Subtitle */}

  <p className="hero-subtitle text-gray-300 text-sm sm:text-lg md:text-2xl max-w-5xl mx-auto mt-8 leading-8 sm:leading-10 font-light px-2">

    Step into the next generation of digital journalism with
    immersive live coverage,
    AI-powered discovery,
    futuristic storytelling,
    and real-time global news experiences.

  </p>

  {/* Stats */}

  <div className="grid grid-cols-3 gap-3 sm:gap-8 mt-14 max-w-5xl mx-auto">

    {/* Box 1 */}

    <div className="glass glow stat-box px-3 sm:px-10 py-5 sm:py-8 rounded-[25px] sm:rounded-[35px] text-center">

      <h2 className="text-2xl sm:text-5xl font-black gradient-text stat-number">

        24/7

      </h2>

      <p className="text-gray-300 mt-2 sm:mt-3 text-[11px] sm:text-lg tracking-wide leading-4 sm:leading-normal">

        Live Coverage

      </p>

    </div>

    {/* Box 2 */}

    <div className="glass glow stat-box px-3 sm:px-10 py-5 sm:py-8 rounded-[25px] sm:rounded-[35px] text-center">

      <h2 className="text-2xl sm:text-5xl font-black gradient-text stat-number">

        AI

      </h2>

      <p className="text-gray-300 mt-2 sm:mt-3 text-[11px] sm:text-lg tracking-wide leading-4 sm:leading-normal">

        Smart Discovery

      </p>

    </div>

    {/* Box 3 */}

    <div className="glass glow stat-box px-3 sm:px-10 py-5 sm:py-8 rounded-[25px] sm:rounded-[35px] text-center">

      <h2 className="text-2xl sm:text-5xl font-black gradient-text stat-number">

        Global

      </h2>

      <p className="text-gray-300 mt-2 sm:mt-3 text-[11px] sm:text-lg tracking-wide leading-4 sm:leading-normal">

        Trending Topics

      </p>

    </div>

  </div>

</div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <button
            onClick={() => searchNews("technology")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            ⚡ Technology

          </button>

          <button
            onClick={() => searchNews("sports")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            🏆 Sports

          </button>

          <button
            onClick={() => searchNews("business")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            💼 Business

          </button>

          <button
            onClick={() => searchNews("health")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            ❤️ Health

          </button>

          <button
            onClick={() => searchNews("entertainment")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            🎬 Entertainment

          </button>

          <button
            onClick={() => searchNews("science")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            🚀 Science

          </button>

          <button
            onClick={() => searchNews("world")}
            className="glass glow px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:scale-110 transition duration-300"
          >

            🌍 World

          </button>

        </div>

        {/* News Heading */}

        <div
          id="news-section"
          className="mb-10 text-center"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text">

            Latest News Feed

          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-lg">

            Real-time stories from around the world

          </p>

        </div>

        {/* Loading */}

        {loading && (

          <div className="text-center text-cyan-400 text-xl mb-10 animate-pulse">

            Loading News...

          </div>

        )}

        {/* News Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {articles.length > 0 ? (

            articles.map((article, index) => (

              <NewsCard
                key={index}
                article={article}
              />

            ))

          ) : (

            !loading && (

              <h1 className="text-white text-2xl text-center col-span-full">

                No News Found 😢

              </h1>

            )

          )}

        </div>

      </div>

    </div>
  );
}

export default Home;