import React from "react";
import Banner from "../assets/Banner.png";

const HeroSection = () => {
  return (
    <div className="containerBox">
      <section
        className="min-h-[calc(100vh-73px)] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Every Journey’s a Mission
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Turn your travel ideas into your next hit adventure
            </p>

            {/* Input and Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Make your travel experience better"
                className="px-5 py-3 rounded-full w-full sm:w-96 text-gray-900 outline-none"
              />
              <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                Generate Plan
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-sm text-gray-300">
              <div>❤️ Loved by 10,000+ explorers</div>
              <div>🤖 AI-powered itineraries</div>
              <div>📍 Save & share trips</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

