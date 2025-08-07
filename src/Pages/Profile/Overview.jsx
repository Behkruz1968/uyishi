// src/pages/profile/Overview.tsx
import React from "react";

const Overview = () => {
  const user = {
    name: "Jasurbek Tursunov",
    email: "jasurbek@example.com",
    role: "Frontend Developer",
    joined: "Jan 12, 2024",
    bio: "React, Vite, TailwindCSS fanati. BitQadam a'zosi.",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Bio</h3>
        <p className="text-gray-700">{user.bio}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Account Info</h3>
        <ul className="text-gray-700">
          <li>
            <strong>Joined:</strong> {user.joined}
          </li>
          <li>
            <strong>Status:</strong> Active
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Overview);
