import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarGuest = ({ profil }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[50px] flex justify-end ">
      <div className="p-4 ">
        <h1 className="text-2xl  font-bold text-gray-700">
          SOS<span className="text-gray-400">ME</span>D
        </h1>
      </div>
      <div className="p-4 ">
        {profil.userId ? (
          <button
            onClick={() => navigate("/home")}
            className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gray-300 hover:text-gray-700"
          >
            Home
          </button>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gray-300 hover:text-gray-700"
          >
            Join Us
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarGuest;
