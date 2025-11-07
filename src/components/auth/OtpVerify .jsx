import React, { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";

const OtpVerify = () => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputs.current.map((input) => input.value).join("");
    console.log("OTP Entered:", otp);
    // API / Firebase OTP Verification logic here
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
          <h2 className="text-2xl font-semibold">Verify OTP</h2>
        </div>

        <p className="text-sm text-white/80 leading-5 mb-6">
          Enter the 6-digit verification code we sent<br />to your email.
        </p>

        <form onSubmit={handleSubmit}>

          {/* OTP Boxes */}
          <div className="flex justify-between gap-2 mb-6">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  maxLength="1"
                  ref={(el) => (inputs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-lg font-semibold bg-white/20 backdrop-blur-sm border border-white/30 rounded-md outline-none"
                />
              ))}
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Verify & Continue
          </button>

        </form>

      </div>
    </div>
  );
};

export default OtpVerify;
