import cors from "cors";
import express,{NextFunction,Request,Response} from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/Config";


const router = express.Router();

router.post(
    "/AddVac",
    async (request:Request, response:Response, next:NextFunction) => {
        const body = request.body;
        console.log("Request Body: ", body);
        response.status(201).json("{'msg':'vacation was uploaded'}");
    }
);
