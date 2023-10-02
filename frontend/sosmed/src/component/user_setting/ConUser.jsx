import React, { useState } from "react";
import UserInfo from "./component/UserInfo";

const ConUser = ({ profil, token, userId, axiosJWT, toast, isLoading }) => {
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    urlImg: "",
    urlImgCover: "",
  });

  const fetchDataUser = async () => {
    try {
      const res = await axiosJWT.get(`http://localhost:3001/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data.payload.datas;
      setDataUser({
        username: data.data.username,
        email: data.data.email,
        urlImg: data.urlImg.urlProfil,
        urlImgCover: data.urlImg.urlCover,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container flex  mt-10  min-h-screen mx-auto">
        <div className="hidden xl:flex h-[600px] w-[230px] bg-white my-10 ml-5 mr-2 rounded-lg shadow-lg"></div>
        <div className="h-[600px] w-[1000px] bg-white my-10 mx-auto rounded-lg shadow-lg overflow-hidden">
          <UserInfo
            profil={profil}
            fetchDataUser={fetchDataUser}
            dataUser={dataUser}
            token={token}
            userId={userId}
            axiosJWT={axiosJWT}
            toast={toast}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default ConUser;
