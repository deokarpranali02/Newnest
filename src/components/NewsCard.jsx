
import { motion } from "framer-motion";
import { useState } from "react";

function NewsCard({ article }) {

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  // Save News

  const handleSave = () => {

    setSaved(!saved);

    let savedNews = JSON.parse(
      localStorage.getItem("savedNews")
    ) || [];

    // Prevent Duplicates

    const exists = savedNews.find(
      (item) => item.url === article.url
    );

    if (!exists) {

      savedNews.push(article);

      localStorage.setItem(
        "savedNews",
        JSON.stringify(savedNews)
      );
    }
  };

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.03,
        rotateX: 4,
        rotateY: -4
      }}

      transition={{
        duration: 0.4
      }}

      className="group relative glass glow rounded-[30px] overflow-hidden border border-white/10 hover:border-emerald-400/40"

    >

      {/* Floating Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-transparent pointer-events-none"></div>

      {/* Image */}

      <div className="overflow-hidden relative">

        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/500x300"
          }

          alt="news"

          className="w-full h-56 sm:h-60 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Live Badge */}

        <div className="absolute top-4 left-4">

          <span className="bg-emerald-500 text-white text-xs px-4 py-2 rounded-full font-bold tracking-widest shadow-lg animate-pulse">

            ● LIVE

          </span>

        </div>

        {/* Category */}

        <div className="absolute bottom-4 left-4">

          <span className="glass px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">

            🌍 GLOBAL NEWS

          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-5 sm:p-6 relative z-10">

        {/* Top Info */}

        <div className="flex justify-between items-center mb-4">

          <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">

            Trending

          </span>

          <span className="text-gray-400 text-xs">

            NewsNest AI

          </span>

        </div>

        {/* Title */}

        <h2 className="text-xl sm:text-2xl font-black leading-tight line-clamp-2 min-h-[70px] group-hover:text-emerald-300 transition duration-300">

          {article.title}

        </h2>

        {/* Description */}

        <p className="text-gray-300 mt-5 line-clamp-3 leading-7 min-h-[90px] text-sm sm:text-base">

          {article.description}

        </p>

        {/* Bottom Section */}

        <div className="flex justify-between items-center mt-8">

          {/* Read Button */}

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"

            className="relative overflow-hidden glass glow px-4 sm:px-5 py-3 rounded-2xl font-bold tracking-wide hover:scale-105 transition duration-300 text-sm"
          >

            <span className="relative z-10">

              Read Story →

            </span>

          </a>

          {/* Icons */}

          <div className="flex gap-4 text-2xl">

            {/* Like Button */}

            <button
              onClick={() =>
                setLiked(!liked)
              }

              className={`transition duration-300 hover:scale-125 ${
                liked
                  ? "text-red-500"
                  : "text-white"
              }`}
            >

              ❤️

            </button>

            {/* Save Button */}

            <button
              onClick={handleSave}

              className={`transition duration-300 hover:scale-125 ${
                saved
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >

              🔖

            </button>

          </div>

        </div>

      </div>

      {/* Bottom Glow Line */}

      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-transparent"></div>

    </motion.div>
  );
}

=======
import { motion } from "framer-motion";
import { useState } from "react";


function NewsCard({ article }) {

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  // Save News

  const handleSave = () => {

    setSaved(!saved);

    let savedNews = JSON.parse(
      localStorage.getItem("savedNews")
    ) || [];

    // Prevent duplicates

    const exists = savedNews.find(
      (item) => item.url === article.url
    );

    if (!exists) {

      savedNews.push(article);

      localStorage.setItem(
        "savedNews",
        JSON.stringify(savedNews)
      );
    }
  };

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.03,
        rotateX: 4,
        rotateY: -4
      }}

      transition={{
        duration: 0.4
      }}

      className="group relative glass glow rounded-[30px] overflow-hidden border border-white/10 hover:border-emerald-400/40"
    >

      {/* Floating Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-transparent pointer-events-none"></div>

      {/* Image */}

      <div className="overflow-hidden relative">

        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/500x300"
          }

          alt="news"

          className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Live Badge */}

        <div className="absolute top-4 left-4">

          <span className="bg-emerald-500 text-white text-xs px-4 py-2 rounded-full font-bold tracking-widest shadow-lg animate-pulse">

            ● LIVE

          </span>

        </div>

        {/* Category */}

        <div className="absolute bottom-4 left-4">

          <span className="glass px-4 py-2 rounded-full text-sm font-semibold tracking-wide">

            🌍 GLOBAL NEWS

          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-6 relative z-10">

        {/* Top Info */}

        <div className="flex justify-between items-center mb-4">

          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">

            Trending

          </span>

          <span className="text-gray-400 text-xs">

            NewsNest AI

          </span>

        </div>

        {/* Title */}

        <h2 className="text-2xl font-black leading-tight line-clamp-2 min-h-[72px] group-hover:text-emerald-300 transition duration-300">

          {article.title}

        </h2>

        {/* Description */}

        <p className="text-gray-300 mt-5 line-clamp-3 leading-7 min-h-[90px]">

          {article.description}

        </p>

        {/* Bottom Section */}

        <div className="flex justify-between items-center mt-8">

          {/* Read Button */}

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"

            className="relative overflow-hidden glass glow px-5 py-3 rounded-2xl font-bold tracking-wide hover:scale-105 transition duration-300"
          >

            <span className="relative z-10">

              Read Story →

            </span>

          </a>

          {/* Icons */}

          <div className="flex gap-4 text-2xl">

            {/* Like Button */}

            <button
              onClick={() =>
                setLiked(!liked)
              }

              className={`transition duration-300 hover:scale-125 ${
                liked
                  ? "text-red-500"
                  : "text-white"
              }`}
            >

              ❤️

            </button>

            {/* Save Button */}

            <button
              onClick={handleSave}

              className={`transition duration-300 hover:scale-125 ${
                saved
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >

              🔖

            </button>

          </div>

        </div>

      </div>

      {/* Bottom Glow Line */}

      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-transparent"></div>

    </motion.div>
  );
}

>>>>>>> 2b135388bfea624f4f03c1be62bf528a573aa346
export default NewsCard;