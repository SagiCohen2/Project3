//imports
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/Config";
import ErrorHandler from "./MiddleWare/route-not-found";
import loginRouter from "./Routes/LoginRouter";
import vacationsRouter from "./Routes/VacationRoutes";
import TablesLogicMYSQL from "./Logic/TablesLogicMYSQL";
import likesRouter from "./Routes/LikesRouter";



//create server
const server = express();

//handle cors=
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());


// multer , for file uploads
const bodyParser = require('body-parser')
// const multer = require("multer");
const path = require('path');
// const destination = path.resolve('assets/');
server.use(express.urlencoded({ extended: true }));


//where i will save the files
server.use(express.static("assets"));

//enable file uploading, and create a path for the files if it not exists
// server.use(fileUpload({ createParentPath: true}));

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
server.use("/api/v1/users", loginRouter);
server.use("/api/v1/vacations", vacationsRouter);
server.use("/api/v1/likes", likesRouter);

// files
server.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"assets"));
});

//handle errors (route not found)
server.use("*", ErrorHandler);

// check if database tables exists, if not create them
// console.log("quick check if tables are exists.. if not, in the making..")
TablesLogicMYSQL.createVacsTable();
TablesLogicMYSQL.createUsersTable();
TablesLogicMYSQL.createUserLikesTable();

//start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});