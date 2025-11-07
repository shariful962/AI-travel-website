import React from "react";
import Icons from "../utils/images";

const destinations = [
    { img: Icons.feature1, title: "Paris", tag: "Romantic Getaway" },
    { img: Icons.feature2, title: "Bali", tag: "Coastal Discovery" },
    { img: Icons.feature3, title: "Switzerland", tag: "Outdoor Scenery" },
    { img: Icons.feature4, title: "Japan", tag: "Cultural Journey" },
];

const FeaturedDestinations = () => {
    return (
        <div className="containerBox">
            <section className="py-20 bg-[#111] text-center">
                <h2 className="text-3xl font-bold mb-10 text-white">Featured Destinations</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
                    {destinations.map((item, i) => (
                        <div key={i} className="bg-[#1d1d1d] rounded-xl overflow-hidden shadow-md">
                            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="text-sm text-red-400">{item.tag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturedDestinations;
