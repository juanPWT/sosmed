import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const InputStatus = ({ profil, setPostStatus, onClickCreateStatus }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [text, setText] = useState("");

  //handle
  const handleChangeButton = (e) => {
    e ? setIsDisabled(false) : setIsDisabled(true);

    setPostStatus({ status: e });
  };

  const onclickValidationStatus = () => {
    onClickCreateStatus();
    setIsDisabled(true);
  };

  return (
    <>
      <div className="flex flex-row w-[300px] sm:w-[400px] md:w-[600px] h-24 sm:h-28 bg-gray-200 rounded-lg my-2 mx-auto shadow-lg">
        <div className="m-auto flex gap-2">
          <img
            src={profil.urlImg}
            alt="profil"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full cursor-pointer object-cover  "
          />
          <div
            className="w-[170px] md:w-[300px] md:h-14 bg-white rounded-full flex break-words  p-2 cursor-pointer hover:bg-gray-300"
            onClick={() => document.getElementById("status_modal").showModal()}
          >
            <span className="m-auto text-[10px]  md:text-[14px] ">
              What do you think now, {profil.username} ?
            </span>
          </div>
        </div>
      </div>

      {/* modal  */}
      <dialog id="status_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Status</h3>
          <hr className="w-full border-t-4 my-2" />
          <textarea
            onChange={(e) => handleChangeButton(e.target.value)}
            placeholder="Type here........"
            className="textarea textarea-lg w-full  focus:outline-none"
          ></textarea>
          <div className="mb-2 mt-4 h-7  p-1 flex justify-end">
            <button
              onClick={() => setEmojiVisible(!emojiVisible)}
              className="cursor-pointer hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={onclickValidationStatus}
            disabled={isDisabled}
            className={
              !isDisabled
                ? "w-full h-10 bg-sky-400 mb-4 rounded-md hover:bg-sky-600"
                : "w-full h-10 bg-sky-100 mb-4 rounded-md "
            }
          >
            <span className="text-white font-semibold text-lg">send</span>
          </button>
        </div>
        <div
          className={
            emojiVisible ? "block absolute md:top-5 md:right-16" : "hidden"
          }
        >
          <Picker
            data={data}
            previewPosition={"top"}
            onClickOutside={() => {
              if (emojiVisible) {
                setEmojiVisible(false);
              }
            }}
            emojiSize={16}
            // onEmojiSelect={}
            maxFrequentRows={0}
          />
        </div>
      </dialog>
    </>
  );
};

export default InputStatus;
