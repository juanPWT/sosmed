import React, { useEffect, useState } from "react";
import Hero from "../component/guest/Hero";
import Footer from "../component/Footer";
import NavbarGuest from "../component/guest/NavbarGuest";
import axios from "axios";
import jwt from "jwt-decode";

const Guest = () => {
  const [token, setToken] = useState("");
  const [profil, setProfil] = useState({
    userId: "",
    username: "",
  });

  const fetchUSer = async () => {
    const request = await axios.get("http://localhost:3001/users/token");
    const decode = jwt(request.data.payload.datas.accessTokken);
    setToken(decode);
    setProfil({
      userId: decode.userId,
      username: decode.username,
    });
  };
  useEffect(() => {
    fetchUSer();
  }, []);

  return (
    <>
      <div className=" flex flex-col min-h-screen ">
        <div className="fixed top-0 z-50 min-w-full">
          <NavbarGuest profil={profil} />
        </div>
        <div className="my-10 z-0 ">
          <Hero profil={profil} />
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Guest;
