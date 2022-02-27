import multer from "multer"

const jsonFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype.includes("json")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var uploadFile = multer({ dest: 'src/temp/', fileFilter: jsonFilter });

export default uploadFile;