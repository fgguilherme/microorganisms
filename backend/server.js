const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
var multer = require('multer');
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const makeDir = require("make-dir");

const app = express();

// File max size 5MB
const MAX_SIZE = 5000000;
const maxFotos = 3;
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf", "application/vnd.ms-excel", ".csv", "text/plain", "text/xml"];


// Filter File Types
const fileFilter = (req, file, next) => {

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type!");
    error.code = "LIMIT_FILE_TYPES";

    return next(error, false);
  }

  next(null, true);
};

// Multer Middleware
const upload = multer({
  //dest: "./tmp/uploads/",
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_SIZE
  }
});

// Single upload
const singleUpload = inputFile => upload.single(inputFile);

// Mutiple upload
const multipleUpload = inputFile => upload.array(inputFile);


// Validate File Middleware
const validateFile = (error, req, res, next) => {
  if (error.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "Only images are allowed!" });
    return;
  }

  if (error.code === "LIMIT_FILE_SIZE") {
    res
      .status(422)
      .json({ error: `Too large. Max size is ${MAX_SIZE / 1000}KB` });

    return;
  }

  next();
};


// Remove white space to image file name
const splitFileName = file => file.split(" ").join("-");

/**
 *  Functions
 */
// Single File Upload Function
const singleFileUpload = async (req, res) => {
  try {
    // Create public/images folder if not exist
    await makeDir("public/images");

    const file = `${Date.now()}-${splitFileName(req.file.originalname)}`;

    // Process image with sharp js
    await sharp(req.file.buffer)
      .toFile(`./public/images/${file}`);

    // remove the original file from /tmp/uploads once uploaded
    /*fs.unlink(`./tmp/uploads/${req.file.filename}`, err => {
      if (err) {
        console.log("Failed to delete the file: ", err);
      } else {
        console.log("File Removed!");
      }
    });*/

    return res.json({ file: `/api/public/images/${file}` });
  } catch (err) {
    return res.status(422).json({ err });
  }
};

// Multiple File Upload Funcstion
const multipleFileUpload = async (req, res) => {
  try {
    // Create public/images folder if not exist
    await makeDir("public/images");

    let files = [];
    for (let [index, file] of req.files.entries()) {
      const t= Date.now()
      const imageFile = `./public/images/${t}-${splitFileName(
        file.originalname
      )}`;

      await sharp(file.buffer)
        .toFile(imageFile);

      files[index] = `/api/public/images/${t}-${splitFileName(
        file.originalname
      )}`;
    }
    //console.log(files);

    return res.json({ files });
  } catch (err) {
    return res.status(422).json({ err });
  }
};

// Multiple File Upload Funcstion
const multipleFileUploadNoPhoto = async (req, res) => {
  try {
    // Create public/images folder if not exist
    await makeDir("public/images");

    let files = [];
    for (let [index, file] of req.files.entries()) {
      const t= Date.now()
      const imageFile = `./public/images/${t}-${splitFileName(
        file.originalname
      )}`;

      fs.writeFileSync(imageFile, file.buffer,'binary');

      files[index] = `/api/public/images/${t}-${splitFileName(
        file.originalname
      )}`;
    }
    //console.log(files);

    return res.json({ files });
  } catch (err) {
    return res.status(422).json({ err });
  }
};




var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors());

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}));
app.use(bodyParser.json({
  limit: '50mb'
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "public")));

const db = require("./models");
// db.sequelize.sync().then(()=>{
// })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// simple route
app.post("/upload", upload.array('foto', maxFotos), (req, res) => {
  // console.log(req.body)
  // console.log(req.file)
  // console.log(req.files)
  // console.log(req.params)
  res.json({});
});


/**
 * Routes
 */
// route: single file upload
app.post(
  "/simple-upload",
  singleUpload("file"),
  validateFile,
  singleFileUpload
);

// route: multiple file upload
app.post(
  "/multiple-upload",
  multipleUpload("files"),
  validateFile,
  multipleFileUpload
);

// route: dropzone single file upload
app.post(
  "/single-dropzone",
  singleUpload("file"),
  validateFile,
  singleFileUpload
);

// route: dropzone multiple file upload
app.post(
  "/multiple-dropzone",
  multipleUpload("files"),
  validateFile,
  multipleFileUpload
);
app.post(
  "/multiple-dropzone-pdf",
  multipleUpload("files"),
  validateFile,
  multipleFileUploadNoPhoto
);


require("./routers")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});