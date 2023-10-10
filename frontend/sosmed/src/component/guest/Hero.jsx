import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ profil }) => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img
            src="./img/hero.png"
            alt="hero image"
            className="hidden md:block w-[300px] h-[500px] mx-10"
          />
        </div>
        <div className="flex-row">
          <h1 className="md:text-5xl text-7xl font-bold">Welcome To Sosmed</h1>
          <p className="py-6 text-xl md:text-2xl">
            Connect everyone with Sosmed.
          </p>
          {profil.userId ? (
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-700 font-bold text-white rounded-xl p-4 hover:bg-gray-400 hover:text-gray-700 hover:scale-110 transition-all"
            >
              Back to home page
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="bg-gray-700 font-bold text-white rounded-xl p-4 hover:bg-gray-400 hover:text-gray-700 hover:scale-110 transition-all"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
