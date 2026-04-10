import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [edit, setEdit] = useState(false);

  // 🔥 Load user data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user")) || {};
    setUser(data);
  }, []);

  // 💾 Save profile
  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEdit(false);
    alert("Profile Saved ✅");
  };

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

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
          My Profile 👤
        </h1>
      </div>

      {/* 👤 PROFILE CARD */}
      <div className="bg-white/10 p-6 rounded-xl max-w-md shadow-lg">

        <input
          type="text"
          disabled={!edit}
          value={user.name}
          placeholder="Full Name"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          type="email"
          disabled={!edit}
          value={user.email}
          placeholder="Email"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="text"
          disabled={!edit}
          value={user.phone}
          placeholder="Phone"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={(e) =>
            setUser({ ...user, phone: e.target.value })
          }
        />

        {!edit ? (
          <button
            onClick={() => setEdit(true)}
            className="w-full bg-purple-600 py-2 rounded mb-2"
          >
            Edit Profile ✏️
          </button>
        ) : (
          <button
            onClick={saveProfile}
            className="w-full bg-green-600 py-2 rounded mb-2"
          >
            Save ✅
          </button>
        )}

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 py-2 rounded"
        >
          Logout 🚪
        </button>

      </div>

    </div>
  );
}

export default Profile;