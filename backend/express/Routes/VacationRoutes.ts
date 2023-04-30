import cors from "cors";
import express,{NextFunction,Request,Response} from "express";
import fileUpload from "express-fileupload";
import VacationLogicMYSQL from "../Logic/VacationLogicMYSQL";


//addVac    => POST 
//deleteVac => DELETE
//vacList   => GET
//vacSearch => GET
//vacUpdate => PUT

const router = express.Router();

router.post(
    "/AddVac",
    async (request:Request, response:Response, next:NextFunction) => {
        const newVac = request.body;
        const result = await VacationLogicMYSQL.addVac(newVac);
        console.log("Request Body: ", newVac);
        response.status(201).json(result);
    }
);

router.delete(
    "/deleteVac",
    async (request:Request, response:Response, next:NextFunction) => {
        const vacId = +request.params.id || null;
        if (vacId === null || vacId<1) {
            response.status(404).json("{'msg':'Vacation not found'}");
        }
        console.log("deleting..")
        response.status(204);
    }
)

export default router;