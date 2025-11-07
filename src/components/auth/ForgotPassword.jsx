import React, { useState } from "react";
import { FiArrowLeft, FiMail } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log("Reset OTP Sent To:", email);
    // ekhane API / Firebase password reset function call korba
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-[400px] border border-white/20 text-white">

        {/* Back + Title */}
        <div className="flex items-center gap-3 mb-4">
          <button  className="text-white hover:text-gray-200">
            <FiArrowLeft size={22} />
          </button>
          <h2 className="text-2xl font-semibold">Forgot Password</h2>
        </div>

        <p className="text-sm text-white/80 leading-5 mb-6">
          Please enter your email address to reset<br />your password.
        </p>

        <form onSubmit={handleSendOtp}>
          {/* Email Input */}
          <label className="text-sm">Email Address</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiMail />
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-500 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Send OTP
          </button>
        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;
