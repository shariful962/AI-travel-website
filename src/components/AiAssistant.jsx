import React from "react";
import Icons from "../utils/images";

const AiAssistant = () => {
    return (
        <div className="containerBox">
            <section className="py-20 bg-[#181818]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                    <img
                        src={Icons.travelAssist}
                        alt="AI Travel Assistant"
                        className="rounded-xl w-full md:w-1/2 object-cover"
                    />
                    <div className="text-left w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-white">Your personal AI travel assistant</h2>
                        <ul className="text-gray-300 space-y-3">
                            <li>🤖 Smart, personalized planning</li>
                            <li>🧩 One-click booking integration</li>
                            <li>📍 Save & reuse your itineraries</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiAssistant;
