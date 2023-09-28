import React from "react";
import ModalProfil from "./ModalProfil";

const UserInfo = ({ username, fetchDataUser, dataUser }) => {
  return (
    <>
      <div className="w-full flex flex-col  h-full static ">
        <img
          src="./img/sampul.png"
          alt="sampul"
          className="w-full h-[400px] object-cover shadow-xl"
        />
        <div className="absolute hidden xl:flex top-[400px] right-[790px]">
          <img
            src="./img/profil.png"
            alt="profil"
            className="h-60 w-60 rounded-full hover:outline hover:outline-4 hover:outline-white"
          />
        </div>
        <div className="hidden  h-40 xl:flex w-full  justify-end ">
          <div className="h-20 w-60  my-auto mx-40">
            <h1 className="font-semibold text-3xl">{username}</h1>
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
        <ModalProfil dataUser={dataUser} />
      </dialog>
    </>
  );
};

export default UserInfo;
