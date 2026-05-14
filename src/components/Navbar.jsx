import { useEffect, useState } from "react";

function Navbar({ onSearch }) {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    if (query.length < 3) {

      setSuggestions([]);
      return;
    }

    const newsTopics = [

      "Artificial Intelligence",
      "Technology News",
      "Cricket World Cup",
      "IPL 2026",
      "Football Transfers",
      "Business Headlines",
      "Startup Funding",
      "Health Tips",
      "Bollywood News",
      "Hollywood Movies",
      "Gaming Industry",
      "NASA Space Mission",
      "Bitcoin Price",
      "Tesla Cars",
      "Apple iPhone",
      "Android Updates",
      "Cybersecurity Attacks",
      "Python Programming",
      "React Development",
      "Java Spring Boot",
      "Global Politics",
      "India News",
      "Stock Market",
      "Machine Learning",
      "Web Development"

    ];

    const filtered = newsTopics.filter((item) =>

      item.toLowerCase().includes(
        query.toLowerCase()
      )

    );

    setSuggestions(filtered);

  }, [query]);

  // Search

  const handleSearch = () => {

    if (!query) return;

    onSearch(query);

    setSuggestions([]);
  };

  // Suggestion Click

  const handleSuggestionClick = (value) => {

    setQuery(value);

    onSearch(value);

    setSuggestions([]);
  };

  return (

    <div className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 flex items-center justify-between gap-4">

        {/* Logo */}

        <div className="flex-shrink-0">

          <h1 className="text-2xl sm:text-4xl font-black gradient-text whitespace-nowrap">

            🪺 NewsNest

          </h1>

        </div>

        {/* Search */}

        <div className="relative flex-1 max-w-2xl">

          <div className="flex gap-2">

            {/* Input */}

            <input
              type="text"

              placeholder="Search news..."

              value={query}

              onChange={(e) =>
                setQuery(e.target.value)
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleSearch();
                }
              }}

              className="glass text-white px-4 py-3 rounded-2xl outline-none w-full placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
            />

            {/* Button */}

            <button
              onClick={handleSearch}

              className="glass glow text-white px-4 sm:px-7 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 whitespace-nowrap text-sm sm:text-base"
            >

              Search

            </button>

          </div>

          {/* Suggestions */}

          {suggestions.length > 0 && (

            <div className="absolute top-16 left-0 w-full glass rounded-2xl overflow-hidden shadow-2xl z-50">

              {suggestions.map((item, index) => (

                <div
                  key={index}

                  onClick={() =>
                    handleSuggestionClick(item)
                  }

                  className="px-5 py-3 text-white hover:bg-white/10 cursor-pointer transition border-b border-white/5 text-sm sm:text-base"
                >

                  🔍 {item}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Navbar;