import React from "react";

const ModalProfil = ({ dataUser }) => {
  return (
    <>
      <div className="modal-box  ">
        <h3 className="font-bold text-lg">Edit your profil</h3>
        <hr className="bg-gray-500 border-t-4 my-3" />

        <div className="flex flex-col">
          <form autoComplete="off">
            <label htmlFor="username" className="flex flex-col ">
              <span className="my-2">Username</span>
              <input
                type="text"
                id="username"
                placeholder={dataUser.username}
                className="input input-ghost w-full focus:outline-none focus:bg-gray-100"
              />
            </label>
            <label htmlFor="email" className="flex flex-col ">
              <span className="my-2">Email</span>
              <input
                type="text"
                id="email"
                placeholder={dataUser.email}
                className="input input-ghost w-full  focus:outline-none focus:bg-gray-100"
              />
            </label>
          </form>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalProfil;
