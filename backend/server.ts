//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/Config";
import ErrorHandler from "./MiddleWare/route-not-found";
import loginRouter from "./Routes/LoginRouter";
import vacationsRouter from "./Routes/VacationRoutes";
import LoginLogicMYSQL from "./Logic/LoginLogicMYSQL";
import VacationLogicMYSQL from "./Logic/VacationLogicMYSQL";
import path from "path";
// import {multer} from 'multer';

//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

// multer , for file uploads
const multer = require("multer");
const upload = multer({ dest: "uploads/" })

//where i will save the files

server.use('assets',express.static(path.resolve(__dirname,'../assets')))

//enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
server.use("/api/v1/users", loginRouter);
server.use("/api/v1/vacations", vacationsRouter);

//handle errors (route not found)
server.use("*", ErrorHandler);

// check if database table exists, if not create them
LoginLogicMYSQL.createUsersTable();
VacationLogicMYSQL.createVacsTable();

//start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});