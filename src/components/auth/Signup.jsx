import React, { useState } from "react";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

    // API or Firebase er sathe connect korte parba ekhane
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
       style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-[400px] border border-white/20 text-white">

        <h2 className="text-3xl font-semibold text-center">Create Account</h2>
        <p className="text-center text-sm mt-1 mb-6">Sign up to get started</p>

        <form onSubmit={handleSignup}>
          
          {/* Full Name */}
          <label className="text-sm">Full Name</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiUser />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              required
            />
          </div>

          {/* Email */}
          <label className="text-sm mt-4 block">Email</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              required
            />
          </div>

          {/* Password */}
          <label className="text-sm mt-4 block">Password</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              required
            />
            {showPass ? (
              <FiEyeOff className="cursor-pointer" onClick={() => setShowPass(false)} />
            ) : (
              <FiEye className="cursor-pointer" onClick={() => setShowPass(true)} />
            )}
          </div>

          {/* Confirm Password */}
          <label className="text-sm mt-4 block">Confirm Password</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiLock />
            <input
              type={showConfirmPass ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              required
            />
            {showConfirmPass ? (
              <FiEyeOff className="cursor-pointer" onClick={() => setShowConfirmPass(false)} />
            ) : (
              <FiEye className="cursor-pointer" onClick={() => setShowConfirmPass(true)} />
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-500 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Social login */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-4 text-sm">Or Continue With</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🌐</button>
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🟢</button>
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🍎</button>
        </div>

      </div>
    </div>
  );
};

export default Signup;
