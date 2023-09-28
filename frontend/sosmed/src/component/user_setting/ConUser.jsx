import React, { useState } from "react";
import UserInfo from "./component/UserInfo";

const ConUser = ({ username, token, userId, axiosJWT }) => {
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
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
        username: data.username,
        email: data.email,
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
            username={username}
            fetchDataUser={fetchDataUser}
            dataUser={dataUser}
          />
        </div>
      </div>
    </>
  );
};

export default ConUser;
