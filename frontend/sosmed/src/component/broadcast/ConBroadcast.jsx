import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

const ConBroadcast = () => {
  const [messege, setMessege] = useState("");
  const [myMessege, setMyMessege] = useState([]);
  const [messegeRecive, setMessegeRecive] = useState([]);
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMessege(e.target.value);
  };

  const handleJoinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const handleClik = () => {
    socket.emit("send_messege", {
      msg: messege,
      idRoom: room,
    });
    setMessege("");
    if (messege) {
      setMyMessege((prev) => [...prev, messege]);
    }
  };

  useEffect(() => {
    socket.on("recive_messege", (data) => {
      setMessegeRecive((prev) => [...prev, data]);
    });

    return () => {
      socket.off("recive_messege");
    };
  }, []);

  return (
    <>
      <div className="container flex flex-col min-h-screen   mx-auto mt-20 mb-5 ">
        <h1 className="text-2xl md:text-5xl font-bold mt-10 mx-auto ">
          Welcome to sosmed Broadcast
        </h1>
        <div className="h-[600px] w-[350px] sm:h-[900px] sm:w-[600px] md:w-[1000px] p-5 shadow-lg border border-gray-400 rounded-lg  mt-10 mx-auto ">
          <div className={`chat chat-start m-4 `}>
            {messegeRecive.map((data, i) => {
              return (
                <div key={i} className="chat-bubble mb-2">
                  {data}
                </div>
              );
            })}
          </div>
          <div className={`chat chat-end m-4  `}>
            {myMessege.map((data, i) => {
              return (
                <div key={i} className="chat-bubble mb-2">
                  {data}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-10 mt-5 h-600 w-600 md:w-[1000px] border border-gray-400 mx-auto rounded-lg shadow-lg flex">
          <div className="mx-auto md:flex">
            <div className="form-control w-60 max-w-xs mx-10 my-5 md:my-10">
              <label className="label">
                <span className="label-text">What is your room?</span>
              </label>
              <div className="flex  ">
                <input
                  type="number"
                  placeholder="Type id room..."
                  className="input input-bordered w-full max-w-xs  rounded-r-none"
                  onChange={(e) => setRoom(e.target.value)}
                />
                <button
                  className="w-12 md:h-full bg-gray-300 p-2 rounded-r-full hover:bg-gray-400"
                  onClick={() => handleJoinRoom()}
                >
                  <span className="text-md font-semibold text-white">Join</span>
                </button>
              </div>
            </div>
            <div className="form-control w-full max-w-xs mx-10 my-5 md:my-10">
              <label className="label">
                <span className="label-text">What is your messege?</span>
              </label>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Type id messege..."
                  className="input input-bordered md:w-full max-w-xs  rounded-r-none"
                  onChange={handleChange}
                  value={messege}
                />
                <button
                  className="w-12 md:h-full bg-gray-300 p-2 rounded-r-full hover:bg-gray-400"
                  onClick={() => handleClik()}
                >
                  <span className="text-md font-semibold text-white">
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="form-control  max-w-xs mx-10 my-5 md:my-10">
              <div className="flex my-6">
                <button
                  className="w-30 md:h-full bg-red-200 p-2 rounded-lg hover:bg-red-400"
                  onClick={() => navigate("/")}
                >
                  <span className="text-md font-semibold text-white">
                    Leave Broadcast
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConBroadcast;
