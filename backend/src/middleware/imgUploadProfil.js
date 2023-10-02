import multer from "multer";
import path from "path";

//multer init

//imae foto profil
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/ImgProfil");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

//img foto cover
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/ImgCover");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

export const imgUpload = multer({ storage: storage }).single("profil_picture");
export const imgUploadCover = multer({ storage: storage2 }).single("cover");
