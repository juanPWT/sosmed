import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import FormLogin from "./FormLogin";
import FormRegis from "./FormRegis";

const LoginRegis = () => {
  const [view, setView] = useState("sign-in");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="static flex justify-center items-center">
        {/* toast  */}
        <ToastContainer />

        <div
          className={`container flex  min-h-screen mx-auto ${
            isLoading ? "opacity-30" : ""
          }  `}
        >
          <div className="flex flex-col h-[600px] w-[300px] sm:w-[500px] md:w-[600px] rounded-xl border bg-white border-gray-500 border-spacing-4 shadow-xl m-auto">
            <div className="mx-auto mt-20 ">
              <button
                onClick={() => setView("sign-in")}
                className="m-1 bg-gray-200 p-3 rounded-xl rounded-r-none font-semibold text-md text-gray-500 hover:bg-gray-400 hover:text-white shadow-md shadow-gray-300"
              >
                Sign-in
              </button>
              <button
                onClick={() => setView("sign-up")}
                className=" bg-gray-200 p-3 rounded-xl rounded-l-none font-semibold text-md text-gray-500 hover:bg-gray-400 hover:text-white shadow-md shadow-gray-300"
              >
                Sign-out
              </button>
            </div>
            {view === "sign-in" ? (
              <FormLogin
                setIsLoading={setIsLoading}
                toast={toast}
                setView={setView}
              />
            ) : (
              <FormRegis
                setIsLoading={setIsLoading}
                setView={setView}
                toast={toast}
              />
            )}
          </div>
        </div>
        {isLoading ? (
          <span className="loading loading-spinner loading-lg absolute   "></span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LoginRegis;
