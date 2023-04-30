import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import router from './Routes/VacationRoutes';
import loginRouter from './Routes/LoginRouter';
import config from './Utils/Config';

// create server
const server = express();

// handle cors - middleware
server.use((cors));

// data will send back in json
server.use(express.json());

// where ill save the files - vacations images
server.use(express.static("all_vacations"));

// enable file uploading , create path
server.use(fileUpload({ createParentPath: true}));

// parse the body for easy working
server.use(bodyParser.json());

// routes
server.use("api/v1/vacations/",router);
server.use("api/v1/users/",loginRouter);

// start the server
server.listen(config.WebPort, () => {
    // console.log(`listing on http://${config.mySQLhost}:${config.WebPort}`);
    console.log(`we are live`);
});