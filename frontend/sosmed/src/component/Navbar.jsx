import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ profil }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3001/users/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 fixed shadow-md">
        <div className="flex-1">
          {profil.username ? (
            <a
              onClick={() => navigate("/home")}
              className="btn btn-ghost normal-case text-xl"
            >
              Sosmed
            </a>
          ) : (
            <a
              onClick={() => navigate("/")}
              className="btn btn-ghost normal-case text-xl"
            >
              Sosmed
            </a>
          )}
        </div>
        <div className="flex-none">
          {profil.username ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>

                    <span className="badge badge-sm bg-red-400 p-2 indicator-item text-white">
                      3
                    </span>
                  </div>
                </label>
                <label className="btn btn-ghost btn-circle">
                  <div
                    className="indicator"
                    onClick={() => navigate("/broadcast")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                      />
                    </svg>

                    <span className="badge badge-sm bg-red-400 p-2 indicator-item text-white"></span>
                  </div>
                </label>

                {/* content */}

                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">Messege</span>
                    <a className="flex h-10 w-full border border-gray-400 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <span className="text-gray-600 font-medium  my-auto px-2">
                        username
                      </span>
                    </a>
                    <a className="flex h-10 w-full border border-gray-400 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <span className="text-gray-600 font-medium  my-auto px-2">
                        username
                      </span>
                    </a>
                    <a className="flex h-10 w-full border border-gray-400 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <span className="text-gray-600 font-medium  my-auto px-2">
                        username
                      </span>
                    </a>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profil.urlImg} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={() => navigate("/user")}>
                    <a className="justify-between">
                      {profil.username}
                      <div className="badge badge-accent">online</div>
                    </a>
                  </li>

                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
