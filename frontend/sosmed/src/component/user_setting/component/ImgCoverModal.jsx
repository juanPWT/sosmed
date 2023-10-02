import React, { useState } from "react";

const ImgCoverModal = ({ toast, axiosJWT, token, userId, img }) => {
  const [validateSubmit, setValidteSubmit] = useState(true);
  const [image, setImage] = useState("");
  const [urlImg, setUrlImg] = useState("");

  const handleChangeValidate = (e) => {
    e ? setValidteSubmit(false) : setValidteSubmit(true);
    const dataImg = e.target.files[0];
    setImage(dataImg);
    setUrlImg(URL.createObjectURL(dataImg));
  };

  const handleSubmitEditCover = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("cover", image);

    try {
      const req = await axiosJWT.patch(
        `http://localhost:3001/users/img/profil/cover/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(req.data.payload.messege, {
        autoClose: 3000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Edit your profile image cover</h3>
      <hr className="bg-gray-900 my-3  border border-t-2" />
      <div className="flex flex-col ">
        <form onSubmit={handleSubmitEditCover} className="flex flex-col ">
          <input
            onChange={(e) => {
              handleChangeValidate(e);
            }}
            id="cover"
            name="cover"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-info w-full max-w-xs  mx-auto mt-2"
          />
          <div className="my-6 mx-auto">
            {urlImg ? (
              <img
                src={urlImg}
                alt="image cover"
                className="w-96 h-60 object-cover rounded-xl  border border-gray-600 shadow-lg"
              />
            ) : (
              <img
                src={img}
                alt="image cover"
                className="w-96 h-60 object-cover rounded-xl  border border-gray-600 shadow-lg"
              />
            )}
          </div>
          <button
            disabled={validateSubmit}
            type="submit"
            className={
              validateSubmit
                ? `bg-sky-500 text-md w-full h-10 font-semibold text-white rounded-lg mt-5 opacity-30 `
                : `bg-sky-500 text-md w-full h-10 font-semibold text-white rounded-lg mt-5 hover:bg-sky-700 `
            }
          >
            Edit image cover
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImgCoverModal;
