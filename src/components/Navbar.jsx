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

  const handleSearch = () => {

    if (!query) return;

    onSearch(query);

    setSuggestions([]);
  };

  const handleSuggestionClick = (value) => {

    setQuery(value);

    onSearch(value);

    setSuggestions([]);
  };

  return (

    <div className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}

        <div>

          <h1 className="text-4xl font-black gradient-text">

            🪺 NewsNest

          </h1>

        </div>

        {/* Search */}

        <div className="relative w-full md:w-auto">

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search breaking news..."
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              className="glass text-white px-5 py-3 rounded-2xl outline-none w-full md:w-96 placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-400"
            />

            <button
              onClick={handleSearch}
              className="glass glow text-white px-7 py-3 rounded-2xl font-bold hover:scale-110 transition duration-300"
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

                  className="px-5 py-3 text-white hover:bg-white/10 cursor-pointer transition border-b border-white/5"
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