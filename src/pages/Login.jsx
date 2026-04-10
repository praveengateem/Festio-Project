import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === form.email &&
      user.password === form.password
    ) {
      alert("Login Successful 🎉");
      navigate("/location"); // 🔥 redirect
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">

      {/* 🌄 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* 🔥 LOGIN CARD (CENTER PERFECT) */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 animate-fadeIn">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* PASSWORD */}
          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            {/* 👁 TOGGLE */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-300"
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:scale-105 transition transform">
            Login
          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-400 hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;