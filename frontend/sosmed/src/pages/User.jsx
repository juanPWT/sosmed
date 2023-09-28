import React, { useEffect, useState } from "react";
import ConUser from "../component/user_setting/conUser";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import jwt from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [token, setToken] = useState("");
  const [profil, setProfil] = useState({
    userId: "",
    username: "",
    email: "",
  });
  const [exp, setExp] = useState(0);

  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users/token");
      setToken(res.data.payload.datas.accessTokken);
      const decode = jwt(res.data.payload.datas.accessTokken);
      setProfil({
        userId: decode.userId,
        username: decode.username,
        email: decode.email,
      });
      setExp(decode.exp);
    } catch (error) {
      if (error) {
        navigate("/auth");
      }
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  //interceptor for user with axios
  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (exp * 1000 < currentDate.getTime()) {
        const res = await axios.get("http://localhost:3001/users/token");

        config.headers.Authorization = `Bearer ${res.data.payload.datas.accessTokken}`;
        setToken(res.data.payload.datas.accessTokken);
        const decode = jwt(res.data.payload.datas.accessTokken);

        setProfil({
          userId: decode.userId,
          username: decode.username,
          email: decode.email,
        });
        setExp(decode.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 z-50">
          <Navbar username={profil.username} />
        </div>
        <div className="mt-5 z-0">
          <ConUser
            username={profil.username}
            token={token}
            userId={profil.userId}
            axiosJWT={axiosJWT}
          />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default User;
