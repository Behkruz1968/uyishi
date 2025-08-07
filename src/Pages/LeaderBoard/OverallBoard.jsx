import React from 'react';

const Overview = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600 font-medium">User Information</p>
          <p className="text-gray-800 font-semibold">John Doe</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600 font-medium">Email</p>
          <p className="text-gray-800 font-semibold">johndoe@example.com</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600 font-medium">Join Date</p>
          <p className="text-gray-800 font-semibold">January 1, 2021</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600 font-medium">Account Status</p>
          <p className="text-green-500 font-semibold">Active</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default React.memo(Overview);
