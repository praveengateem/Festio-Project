import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6">

      {/* 🔙 HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          ⬅ Back
        </button>

        <h1 className="text-3xl font-bold">
          My Bookings 🎟
        </h1>
      </div>

      {/* 📦 BOOKINGS */}
      {bookings.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">

          {bookings.map((b, i) => (
            <div key={i} className="bg-white/10 p-4 rounded-xl shadow-lg">

              <h2 className="text-xl font-bold mb-2">
                {b.event}
              </h2>

              <p>📍 {b.location}</p>
              <p>📅 {b.date}</p>
              <p>⏰ {b.time}</p>

              <hr className="my-2 border-gray-600" />

              <p>👤 {b.name}</p>
              <p>📞 {b.phone}</p>
              <p>📧 {b.email}</p>

              <p>🎫 Type: {b.type}</p>
              <p>🪪 ID: {b.idProof}</p>

              <p className="text-purple-400 font-bold mt-2">
                ₹{b.price}
              </p>

              <p className="text-green-400">
                UTR: {b.utr}
              </p>

            </div>
          ))}

        </div>
      ) : (
        <p className="text-gray-400">
          No bookings yet 😔
        </p>
      )}

    </div>
  );
}

export default Bookings;