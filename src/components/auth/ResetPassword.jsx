import React, { useState } from "react";
import { FiArrowLeft, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";

const ResetPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New Password:", password);
    // ekhane password reset API / Firebase updatePassword add korba
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-[400px] border border-white/20 text-white">

        {/* Back + Title */}
        <div className="flex items-center gap-3 mb-4">
          <button  className="hover:text-gray-200">
            <FiArrowLeft size={22} />
          </button>
          <h2 className="text-2xl font-semibold">Reset Password</h2>
        </div>

        <p className="text-sm text-white/80 mb-6 leading-5">
          Enter your new password below to reset<br />your account password.
        </p>

        <form onSubmit={handleReset}>

          {/* New Password */}
          <label className="text-sm">New Password</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              placeholder="********"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="********"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ResetPassword;
