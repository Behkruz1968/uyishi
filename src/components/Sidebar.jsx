import React, { useState } from "react";
import {
  FaHome, FaUser, FaChartBar, FaShoppingCart, FaShoppingBag, FaChartLine,
  FaCommentDots, FaCog, FaStar, FaHistory, FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const menus = [
  { name: "Dashboard", icon: FaHome, path: "dash" },
  { name: "Profile", icon: FaUser, path: "profile" },
  { name: "Leaderboard", icon: FaChartBar, path: "leaderboard" },
  { name: "Order", icon: FaShoppingCart, path: "order" },
  { name: "Product", icon: FaShoppingBag, path: "product" },
  { name: "Analytics", icon: FaChartLine, path: "analytics" },
  { name: "Messages", icon: FaCommentDots, path: "messages" },
  { name: "Settings", icon: FaCog, path: "settings" },
  { name: "Favorite", icon: FaStar, path: "favorite" },
  { name: "History", icon: FaHistory, path: "history" },
  { name: "Logout", icon: FaSignOutAlt, path: "/logout" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const sidebarWidth = open ? "w-64" : "w-20";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); 
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div
        className={`
          ${sidebarWidth} 
          bg-[#181B23] 
          text-white 
          transition-all duration-300 
          flex flex-col justify-between 
          sticky top-0 h-screen
        `}
      >
        <div>
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            {open && (
              <button
                onClick={() => setOpen(false)}
                className="md:hidden text-white text-xl"
              >
                ✕
              </button>
            )}
          </div>
          <nav className="flex flex-col mt-4 space-y-2">
            {menus.map((menu, idx) => {
              const Icon = menu.icon;
              return menu.name !== "Logout" ? (
                <NavLink
                  key={idx}
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-md mx-2 gap-4 transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#C7F8E5] text-black"
                        : "text-gray-400 hover:bg-[#2C303A]"
                    }`
                  }
                >
                  <Icon size={20} />
                  {open && <span className="text-sm">{menu.name}</span>}
                </NavLink>
              ) : (
                <button
                  key={idx}
                  onClick={handleLogout}
                  className="flex items-center p-3 rounded-md mx-2 gap-4 text-gray-400 hover:bg-[#2C303A] transition-colors duration-200 w-full"
                >
                  <FaSignOutAlt size={20} />
                  {open && <span className="text-sm">Logout</span>}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-4">
          <button
            onClick={() => setOpen(!open)}
            className="w-full p-2 bg-[#2C303A] hover:bg-[#3A3F4B] text-xs rounded-md"
          >
            {open ? "< Collapse" : "> Expand"}
          </button>
        </div>
      </div>
      <div className={`flex-1 transition-all duration-300 p-6 ml-${open ? "64" : "20"}`}>
        <Outlet />
      </div>
    </div>
  );
}
