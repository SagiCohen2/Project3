import express, { NextFunction, Request, response, Response } from "express";
import VacationLogicMYSQL from "../Logic/VacationLogicMYSQL";
import multer from 'multer';
import path from 'path';
import { UploadedFile } from "express-fileupload";
// import upload from "../Logic/fileupload";


// AddVacation    => POST 
// Upload Image   => POST
// DeleteVac      => DELETE
// VacList        => GET
// VacUpdate      => PUT

const vacationsRouter = express.Router();

//POST Method check
vacationsRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`post check works.`);
    }
);


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'assets/'); // Specify the destination folder for uploaded images
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     },
//   });

//   // Create the multer upload instance
//   const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Adjust the file size limit if needed
//     fileFilter: (req, file, cb) => {
//       if (file.fieldname === 'vacImage') {
//         cb(null, true);
//       } else {
//         cb(new Error('Unexpected field name'));
//       }
//     },
//   });
// vacationsRouter.post(
//     "/uploadImage",
//     upload.single('vacImage'),
//     async (request, response, next) => {
//       const file = request.files;
//       // Handle the uploaded image, e.g., save it to a desired location
//       console.log("Uploaded File: ", file);
//       response.status(201).json({ message: "Image uploaded successfully" });
//     }
//   )
  


// Add new vacation
vacationsRouter.post(
    "/AddVac",
    // upload.single('vacImage'),
    async (request: Request, response: Response, next: NextFunction) => {
        const newVac = request.body;
        // const file = request.file;
        const result = await VacationLogicMYSQL.addVac(newVac);
        console.log("Request Body: ", newVac);
        // console.log("Uploaded File: ", file);
        response.status(201).json(result);
    }
);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'assets/'); // Specify the destination folder for uploaded images
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Adjust the file size limit if needed
    fileFilter: (req, file, cb) => {
      if (file.fieldname === 'vacImage') {
        cb(null, true);
      } else {
        cb(new Error('Unexpected field name'));
      }
    },
  });
  
  vacationsRouter.post("/uploadImage", 
    upload.single('vacImage'),
        async (req, res, next) => {
    try {
      const file = req.file;
  
      if (!file) {
        throw new Error('No file uploaded');
      }
  
      // Access the file properties
      const filename = file.filename;
      const originalname = file.originalname;
      const mimetype = file.mimetype;
      const destination = file.destination;
      const filePath = file.path;
      const size = file.size;
  
      // Handle the uploaded image, e.g., save it to a desired location
      // Use the file properties above to determine the desired location or perform any additional operations.
  
      console.log("Uploaded File: ", file);
      res.status(201).json({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error while uploading file:", error);
      res.status(404).json({ error: "Failed to upload file" });
    }
  });
  

// Delete vacation
vacationsRouter.delete(
    "/deleteVac/:id",
    (request: Request, response: Response, next: NextFunction) => {
        const id = +request.params.id;
        VacationLogicMYSQL.deleteVac(id);
        response.status(204).json();
    }
);

// Edit vacation
vacationsRouter.put(
    "/EditVac",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(202).json(VacationLogicMYSQL.editVac(request.body))
        console.log(`Edit works!`)
    }
);

// Get all vacations
vacationsRouter.get(
    "/allVacs",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(201).json(await VacationLogicMYSQL.getAllVacs())
    }
);

export default vacationsRouter;
