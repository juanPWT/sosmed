import React, { useState } from "react";
import { useFormik } from "formik";
import { schemaForEditUserProfil } from "../../../schemas";

const ModalProfil = ({ dataUser, token, userId, axiosJWT, toast }) => {
  const [validateSubmit, setValidteSubmit] = useState(true);

  //handle
  const onSubmit = async (values) => {
    try {
      const res = await axiosJWT.patch(
        `http://localhost:3001/users/${userId}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.payload.messege, {
        autoClose: 3000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  //init formik
  const { errors, handleBlur, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    validationSchema: schemaForEditUserProfil,
    onSubmit,
  });

  return (
    <>
      <div className="modal-box  ">
        <h3 className="font-bold text-lg">Edit your profil</h3>
        <hr className="bg-gray-500 border-t-4 my-3" />

        <div className="flex flex-col">
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="username" className="flex flex-col ">
              <span className="my-2">Username</span>
              <input
                onChange={(e) => {
                  handleChange(e);
                  e.target.value
                    ? setValidteSubmit(false)
                    : setValidteSubmit(true);
                }}
                onBlur={handleBlur}
                value={values.username}
                type="text"
                id="username"
                name="username"
                placeholder={dataUser.username}
                className="input input-ghost w-full focus:outline-none focus:bg-gray-100"
              />
            </label>
            <label htmlFor="email" className="flex flex-col ">
              <span className="my-2">Email</span>
              <input
                onChange={(e) => {
                  handleChange(e);
                  e.target.value
                    ? setValidteSubmit(false)
                    : setValidteSubmit(true);
                }}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                name="email"
                id="email"
                placeholder={dataUser.email}
                className={`input input-ghost w-full  focus:outline-none focus:bg-gray-100 ${
                  errors.email ? "focus:outline focus:outline-red-300" : ""
                }`}
              />
              {errors.email ? (
                <p className="text-red-300 text-sm mt-1">{errors.email}</p>
              ) : (
                ""
              )}
            </label>
            <button
              type="submit"
              disabled={validateSubmit}
              className={
                !validateSubmit
                  ? "bg-sky-400 text-white rounded-xl w-16 h-10 mt-5 hover:bg-sky-500"
                  : "bg-sky-400 text-white rounded-xl w-16 h-10 mt-5 opacity-30"
              }
            >
              edit
            </button>
          </form>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalProfil;
