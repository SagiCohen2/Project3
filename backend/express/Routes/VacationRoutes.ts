import cors from "cors";
import express,{NextFunction,Request,Response} from "express";
import fileUpload from "express-fileupload";


const router = express.Router();

router.post(
    "/AddVac",
    async (request:Request, response:Response, next:NextFunction) => {
        const body = request.body;
        console.log("Request Body: ", body);
        response.status(201).json("{'msg':'vacation was uploaded'}");
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