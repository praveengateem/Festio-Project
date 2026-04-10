import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative text-white">

      {/* 🌄 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* 🔝 NAVBAR */}
        <div className="flex justify-between items-center px-10 py-6">

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Festio 🎉
          </h1>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition transform"
            >
              Sign Up
            </button>
          </div>

        </div>

        {/* 🧠 MAIN SECTION */}
        <div className="flex flex-1 items-center justify-center px-10 gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/2">

            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Discover <span className="text-purple-400">Amazing Events</span> <br />
              Near You 🎉
            </h1>

            <p className="text-gray-300 text-lg mb-6">
              Explore concerts, DJ nights, tech expos, college fests and more.
              Book your tickets instantly and enjoy unforgettable experiences.
            </p>

            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl text-lg hover:scale-105 transition transform"
            >
              Get Started 🚀
            </button>

          </div>

          {/* RIGHT SIDE (ABOUT CARD) */}
          <div className="w-1/2 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">

            <h2 className="text-3xl font-bold mb-4 text-purple-300">
              About Festio
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              Festio is your all-in-one event platform where you can discover
              the best experiences happening around you.
              <br /><br />
              From music concerts and DJ nights to tech expos and college fests,
              we bring everything together in one place.
              <br /><br />
              Book tickets easily, explore events in your city, and never miss
              out on fun moments again!
            </p>

            <div className="mt-6 flex gap-4">
              <div className="bg-purple-600/20 px-4 py-2 rounded-lg">
                🎶 Music
              </div>
              <div className="bg-pink-600/20 px-4 py-2 rounded-lg">
                🎮 Gaming
              </div>
              <div className="bg-blue-600/20 px-4 py-2 rounded-lg">
                🚗 Expo
              </div>
            </div>

          </div>

        </div>

        {/* 🔻 FOOTER */}
        <div className="text-center pb-6 text-gray-400">
          © 2026 Festio. All rights reserved.
        </div>

      </div>
    </div>
  );
}

export default Home;