//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/Config";
import ErrorHandler from "./MiddleWare/route-not-found";
import loginRouter from "./Routes/LoginRouter";
import vacationsRouter from "./Routes/VacationRoutes";

//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

// multer , for file uploads
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//where i will save the files
server.use(express.static("user_files"));

//enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
server.use("/api/v1/users", loginRouter);
server.use("/api/v1/vacations", vacationsRouter);

//handle errors (route not found)
server.use("*", ErrorHandler);

//start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});