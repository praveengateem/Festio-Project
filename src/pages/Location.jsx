import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  const locations = [
    "Tadepalligudem",
    "Hyderabad",
    "Vijayawada",
    "Rajahmundry",
    "Vizag",
    "Yanam",
    "Kakinada",
    "Bhimavaram",
  ];

  const selectLocation = (loc) => {
    localStorage.setItem("location", loc);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
          alt="event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-white text-center w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Select Your Location 📍</h1>

        <div className="grid grid-cols-2 gap-6">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => selectLocation(loc)}
              className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl hover:bg-purple-600 transition text-lg"
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;