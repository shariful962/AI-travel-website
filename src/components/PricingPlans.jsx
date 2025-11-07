import React from "react";

const plans = [
    {
        name: "Basic Package",
        price: "Free",
        features: [
            "One free AI itinerary",
            "Save destinations",
            "Share trips with friends",
        ],
        button: "Try for Free",
    },
    {
        name: "Insider Mode",
        price: "$4.99/mo",
        features: [
            "Unlimited AI itineraries",
            "Offline maps",
            "Exclusive travel deals",
        ],
        button: "Go Premium",
        highlight: true,
    },
    {
        name: "Hitman Mode",
        price: "$9.99/mo",
        features: [
            "VIP AI assistant",
            "Full access to missions",
            "Priority travel support",
        ],
        button: "Get Started",
    },
];

const PricingPlans = () => {
    return (
        <div className="containerBox">
            <section className="py-20 bg-[#111] text-center">
                <h2 className="text-3xl font-bold mb-10 text-white">Subscription Plans</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-xl p-6 ${plan.highlight ? "bg-[#1e2b58]" : "bg-[#181818]"
                                } shadow-lg border border-white/10`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <p className="text-red-400 text-lg font-bold mb-4">{plan.price}</p>
                            <ul className="text-gray-300 text-sm space-y-2 mb-6">
                                {plan.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition">
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PricingPlans;
