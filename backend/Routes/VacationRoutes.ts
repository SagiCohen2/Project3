import express, { NextFunction, Request, Response } from "express";
import VacationLogicMYSQL from "../Logic/VacationLogicMYSQL";
import multer from 'multer';
import path from 'path'



//addVac    => POST 
//deleteVac => DELETE
//vacList   => GET
//vacSearch => GET
//vacUpdate => PUT

const vacationsRouter = express.Router();

//POST Method check
vacationsRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`{"msg":"OK"}`);
    }
);

// const storage = multer.diskStorage({
//     destination: (req:any,file:any,cb:any) => {
//         cb(null,'../uploads')
//     },
//     filename: (req:any,file:any,cb:any) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)) 
//     }
// })

// const upload = multer ({
//     storage:storage
// })

// vacationsRouter.post(
//     "uploadfile",upload.single('image'),
//     async (request: Request, response: Response, next: NextFunction) => {
//         console.log(request.file)
//     }
// )

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

function deleteVac(vacId: number | null) {
    throw new Error("Function not implemented.");
}
