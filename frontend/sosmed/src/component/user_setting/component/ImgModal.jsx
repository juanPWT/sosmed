import React, { useState } from "react";

const ImgModal = ({ img, axiosJWT, token, userId, toast }) => {
  const [validateSubmit, setValidteSubmit] = useState(true);
  const [image, setImage] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const handleChangeImgProfil = (e) => {
    const uploadImg = e.target.files[0];
    setImage(uploadImg);
    setUrlImage(URL.createObjectURL(uploadImg));
  };

  const handleSubmitEditProfil = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profil_picture", image);

    try {
      const res = await axiosJWT.patch(
        `http://localhost:3001/users/img/profil/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data.payload.messege, {
        autoClose: 3000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Edit your profile image</h3>
      <hr className="bg-gray-900 my-3  border border-t-2" />
      <div className="flex flex-col ">
        <form onSubmit={handleSubmitEditProfil} className="flex flex-col ">
          <input
            onChange={(e) => {
              handleChangeImgProfil(e);
              e.target.value ? setValidteSubmit(false) : setValidteSubmit(true);
            }}
            id="profil_picture"
            name="profil_picture"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-info w-full max-w-xs  mx-auto mt-2"
          />
          <div className="my-6 mx-auto">
            {urlImage ? (
              <img
                src={urlImage}
                alt="image profil"
                className="w-32 h-32 rounded-xl  border border-gray-600 shadow-lg"
              />
            ) : (
              <img
                src={img}
                alt="image profil"
                className="w-32 h-32 rounded-xl  border border-gray-600 shadow-lg"
              />
            )}
          </div>
          <button
            disabled={validateSubmit}
            type="submit"
            className={
              validateSubmit
                ? `bg-sky-500 text-md w-full h-10 font-semibold text-white rounded-lg mt-5 opacity-20`
                : `bg-sky-500 text-md w-full h-10 font-semibold text-white rounded-lg mt-5 hover:bg-sky-700 `
            }
          >
            Edit image
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImgModal;
