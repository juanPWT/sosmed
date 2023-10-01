import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";
import ConBroadcast from "../component/broadcast/ConBroadcast";

const Broadcast = () => {
  const [token, setToken] = useState("");
  const [profil, setProfil] = useState({
    username: "",
    urlImg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/users/token");
        setToken(res.data.payload.datas.acccessTokken);
        const decode = jwtDecode(res.data.payload.datas.accessTokken);
        setProfil({ username: decode.username, urlImg: decode.urlImg });
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="fixed top-0 z-50">
          <Navbar profil={profil} />
        </div>
        <div className="z-0">
          <ConBroadcast />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Broadcast;
