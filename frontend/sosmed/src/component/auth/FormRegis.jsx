import { useFormik } from "formik";
import { basicSchemaSignUp } from "../../schemas";

import axios from "axios";

const FormRegis = ({ setIsLoading, setView, toast }) => {
  const onSubmit = async (values, action) => {
    //for isLoading
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);

    //init
    try {
      const res = await axios.post("http://localhost:3001/users", values);
      toast.success("success resgister account", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setView("sign-in");
    } catch (err) {
      console.log(err);
    }

    // formik action reset form if on submit
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
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchemaSignUp,
    onSubmit,
  });

  return (
    <div className="flex flex-col mx-auto h-[400px] w-[270px] md:w-[400px] my-5 p-2">
      <h1 className="mx-auto font-bold text-xl md:text-2xl text-gray-600">
        SIGN UP
      </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="username" className="m-2">
          <span className="text-sm font-light">Username :</span>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full h-10 bg-gray-200 my-2 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
              errors.username
                ? "outline-2 outline-red-400"
                : "focus:outline-none"
            }`}
            placeholder="type email here...."
            onChange={handleChange}
            value={values.username}
            onBlur={handleBlur}
          />
          {errors.username ? (
            <p className="text-[10px] text-red-400 font-normal  ">
              {errors.username}
            </p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="email" className="mt-2">
          <span className="text-sm font-light">Email :</span>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full h-10 bg-gray-200 my-1 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
              errors.email ? "outline-2 outline-red-400" : "focus:outline-none"
            }`}
            placeholder="type email here...."
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {errors.email ? (
            <p className="text-[10px] text-red-400 font-normal  ">
              {errors.email}
            </p>
          ) : (
            ""
          )}
        </label>
        <div className="flex">
          <label htmlFor="password" className="mx-1s">
            <span className="text-sm font-light">Password :</span>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full h-10 bg-gray-200 my-1 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
                errors.password
                  ? "outline-2 outline-red-400"
                  : "focus:outline-none"
              }`}
              placeholder="type password here...."
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password ? (
              <p className="text-[10px] text-red-400 font-normal  ">
                {errors.password}
              </p>
            ) : (
              ""
            )}
          </label>
          <label htmlFor="confirmPassword" className="mx-2">
            <span className="text-sm font-light">Confim Password :</span>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`w-full h-10 bg-gray-200 my-1 p-2 rounded-lg text-gray-700   focus:bg-gray-300 ${
                errors.confirmPassword
                  ? "outline-2 outline-red-400"
                  : "focus:outline-none"
              }`}
              placeholder="type  password again here...."
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            {errors.confirmPassword ? (
              <p className="text-[10px] text-red-400 font-normal  ">
                {errors.confirmPassword}
              </p>
            ) : (
              ""
            )}
          </label>
        </div>
        <div className=" flex ">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-sky-300 p-2 md:p-4 rounded-full font-bold text-white my-4 hover:bg-sky-400 disabled:opacity-50`}
          >
            sign up
          </button>
          <a className="text-[10px] md:text-[14px] text-blue-500 m-auto cursor-pointer hover:underline">
            help ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormRegis;
