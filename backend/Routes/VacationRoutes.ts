import express, { NextFunction, Request, response, Response } from "express";
import VacationLogicMYSQL from "../Logic/VacationLogicMYSQL";
import multer from 'multer';
import path from 'path';
import { UploadedFile } from "express-fileupload";


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


// Add new vacation
vacationsRouter.post(
    "/AddVac",
    async (request: Request, response: Response, next: NextFunction) => {
        const newVac = request.body;
        const result = await VacationLogicMYSQL.addVac(newVac);
        console.log("Request Body: ", newVac);
        response.status(201).json(result);
    }
);

// // UPLOAD IMAGE
// vacationsRouter.post(
//     "/uploadImage",
//     async (request: Request, response: Response, next: NextFunction) => {
//       try {
//         let sampleFile: UploadedFile;
//         let uploadPath: string;
//         if (!request.files || Object.keys(request.files).length === 0) {
//             response.status(404).json({message:'error in uploading file'})
//             return;
//         }
//         const files = request.files as Express.Multer.File[];
//         sampleFile = files.sampleFile as UploadedFile;
//         uploadPath = "./assets/" + sampleFile.name;
//         sampleFile.mv(uploadPath, function (err: any) {
//           if (err) {
//             response.status(404).json({message:'error in uploading file'})
//             return
//           }
//           console.log("File saved at:", uploadPath); // Log the file path
//           response.status(201).json({ message: "File uploaded!" });
//         });
//       } catch (error) {
//         next(error);
//       }
//     }
//   );

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
