import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered Successfully!");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
          alt="event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center">
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
          
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Create Account ✨
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 font-semibold hover:scale-105 transition transform">
              Register
            </button>

          </form>

          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;