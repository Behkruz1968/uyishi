import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
  { name: 'Profile', path: 'profil' },
  { name: 'Settings', path: 'settings' },
  { name: 'Overview', path: 'overview' }
];

const AsosProfile = () => {
  return (
    <div className="w-full min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <div className="flex space-x-4 border-b border-gray-300 mb-6">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `px-4 py-2 font-medium border-b-2 transition-all duration-300 ${
                  isActive
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-blue-500'
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
        
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AsosProfile);
