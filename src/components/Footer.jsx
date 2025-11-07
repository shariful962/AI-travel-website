import React from "react";

const Footer = () => {
    return (
        <div className="containerBox">
            <footer className="bg-[#0c1a3a] py-12 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-lg mb-3 font-medium">
                        No surprises. No weak links. Your travel mission is bulletproof.
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                        Subscribe for AI travel insights, trip ideas & mission updates.
                    </p>
                    <div className="flex justify-center gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-full w-64 text-gray-900 outline-none"
                        />
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
