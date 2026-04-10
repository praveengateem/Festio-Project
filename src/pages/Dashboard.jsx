import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import events from "../data/events";

function Dashboard() {
  const navigate = useNavigate();

  const location = (localStorage.getItem("location") || "").trim();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [filter, setFilter] = useState("ongoing");
  const [index, setIndex] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "",
    type: "normal",
    idProof: "",
    utr: "",
  });

  const images = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754",
  ];

  // 🔁 Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔍 Filter
  const filteredEvents = events.filter(
    (e) =>
      e.location.trim().toLowerCase() === location.toLowerCase() &&
      e.status === filter
  );

  // 🎨 Image
  const getEventImage = (title) => {
    const t = title.toLowerCase();
    if (t.includes("ai") || t.includes("robot"))
      return "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0";
    if (t.includes("gaming"))
      return "https://images.unsplash.com/photo-1542751371-adc38448a05e";
    if (t.includes("auto"))
      return "https://images.unsplash.com/photo-1542362567-b07e54358753";
    if (t.includes("music"))
      return "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4";
    if (t.includes("Career Fair"))
      return "https://images.unsplash.com/photo-1556761175-4b46a572b786";
    if (t.includes("dance"))
      return "https://images.unsplash.com/photo-1506157786151-b8491531f063";
    if (t.includes("dj"))
      return "https://images.unsplash.com/photo-1470225620780-dba8ba36b745";
    return "https://images.unsplash.com/photo-1515169067868-5387ec356754";
  };

  // 💰 Price
  const calculatePrice = () => {
    if (!selectedEvent) return 0;

    let price = selectedEvent.fee;

    if (formData.type === "student") price *= 0.9;
    if (formData.type === "foreigner") price *= 1.25;

    return Math.round(price);
  };

  // 💾 Save booking
  const handleBooking = () => {
    const booking = {
      event: selectedEvent.title,
      location: selectedEvent.location,
      date: selectedEvent.date,
      time: selectedEvent.time,
      price: calculatePrice(),
      ...formData,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert("Booking Successful 🎉");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      {/* 🔥 NAVBAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-black/40 border-b border-gray-700">

        <button onClick={() => navigate("/location")}>
          ⬅ Back
        </button>

        <h1 className="text-xl font-bold text-purple-400">
          Festio 🎉
        </h1>

        <div className="flex gap-3">
          <button className="bg-gray-700 px-3 py-1 rounded">EN 🌐</button>

          <button
            onClick={() => navigate("/bookings")}
            className="bg-purple-600 px-3 py-1 rounded"
          >
            🎟
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-pink-600 px-3 py-1 rounded"
          >
            👤
          </button>
        </div>
      </div>

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Events in {location}
        </h1>

        {/* 🎉 SLIDER */}
        <div className="mb-8 relative h-64 rounded-xl overflow-hidden">

          <img src={images[index]} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h2 className="text-2xl font-bold">
              Explore Amazing Events 🎉
            </h2>
          </div>

          {/* 🔥 DOTS */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* 🔘 FILTER BUTTONS WITH COLOR DOTS */}
        <div className="flex justify-center gap-6 mb-8">

          <button
            onClick={() => setFilter("ongoing")}
            className={`flex items-center gap-2 px-6 py-2 rounded ${
              filter === "ongoing" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Ongoing
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={() => setFilter("upcoming")}
            className={`flex items-center gap-2 px-6 py-2 rounded ${
              filter === "upcoming" ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            Upcoming
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </button>

          <button
            onClick={() => setFilter("expired")}
            className={`flex items-center gap-2 px-6 py-2 rounded ${
              filter === "expired" ? "bg-gray-500" : "bg-gray-700"
            }`}
          >
            Expired
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </button>

        </div>

        {/* 🎯 EVENTS */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">

            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white/10 rounded-xl overflow-hidden">

                <h2 className="p-4 font-bold">{event.title}</h2>

                <img
                  src={getEventImage(event.title)}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">

                  <p>📍 {event.location}</p>
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>

                  <p className="text-purple-400 font-bold">₹{event.fee}</p>

                  {event.status === "expired" ? (
                    <button disabled className="w-full bg-gray-600 py-2 mt-3 rounded">
                      Completed ❌
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowForm(true);
                      }}
                      className="w-full bg-purple-600 py-2 mt-3 rounded"
                    >
                      Book Now
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>
        ) : (
          <p>No events available</p>
        )}

      </div>

      {/* 🔥 BOOKING FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">

          <div className="bg-[#1E293B] p-6 rounded-xl w-96">

            <h2 className="mb-4 font-bold">Book Event 🎟</h2>

            <input placeholder="Full Name" className="w-full mb-2 p-2 bg-gray-800"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

            <input placeholder="Phone" className="w-full mb-2 p-2 bg-gray-800"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

            <input placeholder="Email" className="w-full mb-2 p-2 bg-gray-800"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <select className="w-full mb-2 p-2 bg-gray-800"
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
              <option value="normal">Normal</option>
              <option value="student">Student (10% off)</option>
              <option value="foreigner">Foreigner (+25%)</option>
            </select>

            <input placeholder="Aadhar / Student ID / Passport"
              className="w-full mb-2 p-2 bg-gray-800"
              onChange={(e) => setFormData({ ...formData, idProof: e.target.value })} />

            <p className="mb-2">💰 Total: ₹{calculatePrice()}</p>

            {/* 💳 PAYMENT */}
            <div className="bg-gray-800 p-3 rounded mb-3">

              <p className="text-sm mb-2">📱 Pay via PhonePe / GPay</p>

              <p className="text-purple-400 font-bold">
                PhonePe: 9876543210
              </p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=festio-payment"
                className="mx-auto mt-2"
              />

            </div>

            <input placeholder="Enter UTR Number"
              className="w-full mb-3 p-2 bg-gray-800"
              onChange={(e) => setFormData({ ...formData, utr: e.target.value })} />

            <button
              onClick={handleBooking}
              className="w-full bg-green-600 py-2 mb-2"
            >
              Submit
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="w-full bg-red-600 py-2"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;