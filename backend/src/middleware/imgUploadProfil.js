import multer from "multer";
import path from "path";

//multer init
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

const imgUpload = multer({ storage: storage }).single("profil_picture");

export default imgUpload;
