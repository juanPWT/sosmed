import React from "react";
import ModalProfil from "./ModalProfil";
import ImgModal from "./ImgModal";

const UserInfo = ({
  profil,
  fetchDataUser,
  dataUser,
  token,
  userId,
  axiosJWT,
  toast,
}) => {
  const openModalEditImg = () => {
    document.getElementById("imgModal").showModal();
  };

  return (
    <>
      <div className="w-full flex flex-col  h-full static ">
        <img
          src="./img/sampul.png"
          alt="sampul"
          className="w-full h-[400px] object-cover shadow-xl"
        />
        <div className="absolute rounded-full overflow-hidden xl:flex top-[400px] right-[770px] hover:outline hover:outline-4 hover:outline-white group">
          <div className="relative">
            <img
              src={profil.urlImg}
              alt="profil"
              className="h-60 w-60 bg-white  object-cover cursor-pointer"
            />
            <button
              onClick={openModalEditImg}
              className="hidden absolute top-0 left-0 right-0 bottom-0 bg-blue-500 text-white p-2 text-xl font-semibold rounded group-hover:bg-gray-500/30  group-hover:block  m-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
              Edit
            </button>
          </div>
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
      <dialog id="imgModal" className="modal">
        <ImgModal
          img={profil.urlImg}
          axiosJWT={axiosJWT}
          token={token}
          userId={userId}
          toast={toast}
        />
      </dialog>
    </>
  );
};

export default UserInfo;
