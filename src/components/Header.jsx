import React, { use } from "react";
import Icons from "../utils/images";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
   <div className="containerBox">
     <header className="w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-4 sm:px-[120px] py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Icons.navLogo} alt="Hitman Track" className="w-10 h-10" />
          {/* <span className="text-xl font-bold">Hitman Track</span> */}
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-red-400">Home</a>
          <a href="#" className="hover:text-red-400">AI Trip Planner</a>
          <a href="#" className="hover:text-red-400">Expedition Feed</a>
          <a href="#" className="hover:text-red-400">Hitlists</a>
          <a href="#" className="hover:text-red-400">Pricing</a>
          <a href="#" className="hover:text-red-400">About</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button onClick={()=>navigate('/signin')} className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
   </div>
  );
};

export default Header;

