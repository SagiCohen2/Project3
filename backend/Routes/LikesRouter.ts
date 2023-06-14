import express, { NextFunction, Request, Response } from "express";
import LikesLogicMYSQL from "../Logic/LikesLogicMYSQL"
import UserInfo from "../Models/UserInfo";
import Vacation from '../Models/Vacation';

const likesRouter = express.Router();

//POST Method check
likesRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`check ok`);
    }
);

// POST method for add vac when user click on the like button
likesRouter.post(
    "/addLike",
    async (request: Request, response: Response, next: NextFunction) => {
        const newLike = request.body;
        const userInfo = new UserInfo(
        request.body.userKey, 
        request.body.fullName, 
        request.body.email, 
        request.body.password, 
        request.body.role)
        const vacationInfo = new Vacation (    
        request.body.vacKey,
        request.body.destination,
        request.body.description,
        request.body.startDate,
        request.body.endDate,
        request.body.price,
        request.body.vacImage)
        const result = await LikesLogicMYSQL.addLike(userInfo,vacationInfo);
        response.status(200).json(result);
    }
)

// DELETE method for delete like from favorites list when unchecked the like button
likesRouter.delete(
    "/deleteLike/:userKey/:vacKey",
    async (request: Request, response: Response, next: NextFunction) => {
            // const userInfo = new UserInfo(
            // +request.params.userKey, 
            // request.body.fullName, 
            // request.body.email, 
            // request.body.password, 
            // request.body.role)
            // const vacationInfo = new Vacation (    
            // +request.params.vacKey,
            // request.body.destination,
            // request.body.description,
            // request.body.startDate,
            // request.body.endDate,
            // request.body.price,
            // request.body.vacImage
            // )
        // const result = await LikesLogicMYSQL.deleteLike(userKey,vacKey);
    response.status(204).json('result');    
    }
)





export default likesRouter;