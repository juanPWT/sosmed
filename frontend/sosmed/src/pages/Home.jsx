import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Beranda from "../component/beranda/Beranda";
import axios from "axios";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function Home() {
  const [token, setToken] = useState("");
  const [profil, setProfil] = useState({
    userId: "",
    username: "",
    email: "",
    urlImg: "",
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
        urlImg: decode.urlImg,
      });
      setExp(decode.exp);
    } catch (err) {
      if (err) {
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
          urlImg: decode.urlImg,
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
      <ToastContainer />
      <div className="flex flex-col min-h-screen ">
        <div className="fixed top-0 z-50">
          <Navbar profil={profil} />
        </div>

        <div className="mt-5 z-0">
          <Beranda
            token={token}
            axiosJWT={axiosJWT}
            profil={profil}
            userId={profil.userId}
            toast={toast}
          />
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
