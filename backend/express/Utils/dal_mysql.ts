import mysql from "mysql";
import config from "./Config";

// connection for object
const connection = mysql.createPool({
    host: config.mySQLhost,
    user: config.mySQLuser,
    password: config.mySQLpass,
    database: config.mySQLdatabase,
});

console.log("We are on!");

const execute = (sql:string):Promise<any> => {
    return new Promise<any>((resolve,reject)=> {
        // execute the sql on mySQL
        connection.query(sql,(err, result) => {
            if (err) {
                // if error - fix and try again, mySQL did not get it right.
                reject(err);
                return;
            }
            // no error - let's go!
            resolve(result);
        });
    });
}

export default { execute };