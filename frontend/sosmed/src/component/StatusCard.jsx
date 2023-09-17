import React from "react";

const StatusCard = () => {
  return (
    <div>
      <div className="h-full rounded-lg border border-base-300 mx-20 overflow-hidden">
        <div className="flex bg-gray-100 h-14">
          <img
            src="./img/profil.png"
            alt="frofil"
            className="rounded-r-full w-20 object-cover"
          />
          <div className="flex flex-col">
            <h1
              className="mx-3 text-gray-500 font-medium
          "
            >
              username
            </h1>
            <span className="mx-3 font-extralight text-xs text-gray-300">
              tanggal - @user
            </span>
          </div>
        </div>
        <div className="flex justify-center  py-16 border-t border-base-300 p-2 ">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
