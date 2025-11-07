// import React, { useState } from "react";
// import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

// const Login = () => {
//   const [showPass, setShowPass] = useState(false);

//   return (
//     <div 
//       className="h-screen w-full bg-cover bg-center flex items-center justify-center" 
//       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')` }}
//     >
//       <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-[400px] border border-white/20 text-white">
        
//         <h2 className="text-3xl font-semibold text-center">Welcome Back</h2>
//         <p className="text-center text-sm mt-1 mb-6">Login to your account</p>

//         {/* Input: Email */}
//         <label className="text-sm">Enter your E-mail or Number</label>
//         <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
//           <FiMail />
//           <input 
//             type="text"
//             placeholder="E-mail address or phone number"
//             className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
//           />
//         </div>

//         {/* Input: Password */}
//         <label className="text-sm mt-4 block">Password</label>
//         <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
//           <FiLock />
//           <input
//             type={showPass ? "text" : "password"}
//             placeholder="********"
//             className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
//           />
//           {showPass ? (
//             <FiEyeOff onClick={() => setShowPass(false)} className="cursor-pointer" />
//           ) : (
//             <FiEye onClick={() => setShowPass(true)} className="cursor-pointer" />
//           )}
//         </div>

//         <div className="flex justify-between items-center text-xs mt-3">
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input type="checkbox" /> Remember me
//           </label>
//           <button className="hover:underline">Forgot password?</button>
//         </div>

//         <button className="w-full mt-6 bg-red-500 py-2 rounded-md font-medium hover:bg-red-600 transition">
//           Login
//         </button>

//         <div className="flex items-center my-4">
//           <div className="flex-1 h-px bg-white/30"></div>
//           <span className="px-4 text-sm">Or Continue With</span>
//           <div className="flex-1 h-px bg-white/30"></div>
//         </div>

//         {/* Social Buttons */}
//         <div className="flex justify-center gap-6">
//           <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🌐</button>
//           <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🟢</button>
//           <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🍎</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    //  API call / authentication 
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
     style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-[400px] border border-white/20 text-white">

        <h2 className="text-3xl font-semibold text-center">Welcome Back</h2>
        <p className="text-center text-sm mt-1 mb-6">Login to your account</p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>

          {/* Email Input */}
          <label className="text-sm">Enter your E-mail or Number</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiMail />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail address or phone number"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
            />
          </div>

          {/* Password Input */}
          <label className="text-sm mt-4 block">Password</label>
          <div className="flex items-center gap-2 bg-white/20 p-3 rounded-md mt-1">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="bg-transparent w-full outline-none placeholder-white/70 text-sm"
            />
            {showPass ? (
              <FiEyeOff onClick={() => setShowPass(false)} className="cursor-pointer" />
            ) : (
              <FiEye onClick={() => setShowPass(true)} className="cursor-pointer" />
            )}
          </div>

          <div className="flex justify-between items-center text-xs mt-3">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-500 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Login
          </button>

        </form>
        {/* FORM END */}

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-4 text-sm">Or Continue With</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6">
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🌐</button>
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🟢</button>
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full">🍎</button>
        </div>

      </div>
    </div>
  );
};

export default Login;

