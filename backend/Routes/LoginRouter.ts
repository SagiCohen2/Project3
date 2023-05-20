import express, { NextFunction, Request, Response } from "express";
import LoginLogicMYSQL from "../Logic/LoginLogicMYSQL";
import UserInfo from "../Models/UserInfo";

const loginRouter = express.Router();

// Register        => POST
// Login           => GET
// Delete User     => DELETE

//POST Method check
loginRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`{"msg":"OK"}`);
    }
);

// loginRouter.get(
//     "/login",
//     async(request:Request,response:Response,next:NextFunction) => {
//         console.log("logged in successfully");
//           response.status(200).json(await LoginLogicMYSQL.login);
//           console.log(LoginLogicMYSQL.login)
//         }
// )


loginRouter.post(
    "/login",
    async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;
        const existsUser: UserInfo = {
            email, password,
            id: 0,
            fullName: "",
            role: ""
        };
        const exists = await LoginLogicMYSQL.login(existsUser);
        const userExists = exists[0]["count(*)"] === 1;
        response.json({ userExists });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
    });

loginRouter.post(
    "/register",
    async (request:Request,response:Response,next:NextFunction) => {
        const newUser = request.body;
        const result = await LoginLogicMYSQL.register(newUser);
        console.log("register", newUser);
        response.status(201).json(result);
    }
)

loginRouter.delete(
    "/deleteUser/:userId",
    (request:Request,response:Response,next:NextFunction) => {
        console.log("delete user");
        response.status(204).json(`{'msg':'User deleted.'}`);
    }
)

loginRouter.put(
    "/updateUser/",
    async(request:Request,response:Response,next:NextFunction) => {
        console.log("update");
        response.status(201).json(`{'msg':'User successfully updated'}`);
    }
)

export default loginRouter;
