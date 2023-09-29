import React from "react";
import ModalProfil from "./ModalProfil";

const UserInfo = ({
  profil,
  fetchDataUser,
  dataUser,
  token,
  userId,
  axiosJWT,
  toast,
}) => {
  return (
    <>
      <div className="w-full flex flex-col  h-full static ">
        <img
          src="./img/sampul.png"
          alt="sampul"
          className="w-full h-[400px] object-cover shadow-xl"
        />
        <div className="absolute hidden xl:flex top-[400px] right-[850px]">
          <img
            src="./img/profil.png"
            alt="profil"
            className="h-60 w-60 rounded-full hover:outline hover:outline-4 hover:outline-white"
          />
        </div>
        <div className="hidden  h-40 xl:flex w-full  justify-end ">
          <div className="flex flex-col gap-2 h-20 w-60  my-auto mx-40">
            <h1 className="font-semibold text-3xl">{profil.username}</h1>
            <span className="text-gray-400 text-base font-semibold">
              {profil.email}
            </span>
          </div>
          <div className="h-20 w-60  my-auto mx-5">
            <button
              className="w-40 h-10 bg-sky-400 rounded-xl hover:bg-sky-300"
              onClick={() => {
                fetchDataUser();
                document.getElementById("modalProfil").showModal();
              }}
            >
              <span className="text-white font-semibold text-md">
                Edit your profil
              </span>
            </button>
          </div>
        </div>
      </div>
      <dialog id="modalProfil" className="modal">
        <ModalProfil
          dataUser={dataUser}
          token={token}
          axiosJWT={axiosJWT}
          userId={userId}
          toast={toast}
        />
      </dialog>
    </>
  );
};

export default UserInfo;
