import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import VacationLogicMYSQL from "../Logic/VacationLogicMYSQL";


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
    "/deleteVac",
    async (request: Request, response: Response, next: NextFunction) => {
        const vacId = +request.params.id || null;
        if (vacId === null || vacId < 1) {
            response.status(404).json(`Vacation not found`);
            // console.log(response)
        }
        console.log("deleting..")
        // console.log(response)
        response.status(204);
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

// Get vacation by id
vacationsRouter.get(
    "/getVacation/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(await VacationLogicMYSQL.getVacById(+request.params.id))
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