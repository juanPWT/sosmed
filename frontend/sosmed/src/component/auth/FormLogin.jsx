import React from "react";
import { useFormik } from "formik";
import { basicSchemaSignIn } from "../../schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setIsLoading, toast, setView }) => {
  const navigate = useNavigate();
  const onSubmit = (values, action) => {
    //for isloading
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
    //axios init
    axios
      .post("http://localhost:3001/users/login", values)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.response.data.payload.messege);
        if (
          error.response.data.payload.messege ===
          "email account not register yet!!!"
        ) {
          setView("sign-up");
        }
      });

    //for reset form after submiting
    action.resetForm();
  };

  const {
    handleBlur,
    errors,
    handleChange,
    values,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchemaSignIn,
    onSubmit,
  });

  return (
    <div className="flex flex-col mx-auto h-[400px] w-[270px] md:w-[400px] my-5 p-2">
      <h1 className="mx-auto font-bold text-xl md:text-2xl text-gray-600">
        SIGN IN
      </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email" className="m-2">
          <span className="text-sm font-light">Email :</span>
          <input
            type="email"
            id="email"
            className={`w-full h-10 bg-gray-200 my-3 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
              errors.email ? "outline-2 outline-red-400" : "focus:outline-none"
            }`}
            placeholder="type email here...."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
          {errors.email ? (
            <p className="text-[10px] text-red-400 font-normal  ">
              {errors.email}
            </p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="password" className="m-2">
          <span className="text-sm font-light">Password :</span>
          <input
            type="password"
            id="password"
            className={`w-full h-10 bg-gray-200 my-3 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
              errors.password
                ? "outline-2 outline-red-400"
                : "focus:outline-none"
            }`}
            placeholder="type password here...."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
          />
          {errors.password ? (
            <p className="text-[10px] text-red-400 font-normal  ">
              {errors.password}
            </p>
          ) : (
            ""
          )}
        </label>
        <div className=" flex ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-sky-300 p-2 md:p-4 rounded-full font-bold text-white my-4 hover:bg-sky-400 disabled:opacity-50"
          >
            sign in
          </button>
          <a className="text-[10px] md:text-[14px] text-blue-500 m-auto cursor-pointer hover:underline">
            forgot password ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
