import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
      <div className="flex items-center space-x-4">
        <img
          src={user.photo}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </div>
      <Link
        to={`/users/${user.id}`}
        className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Lihat Detail
      </Link>
    </div>
  );
}