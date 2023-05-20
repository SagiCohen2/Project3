import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'
import UserInfo from '../Models/UserInfo';



const login = async (existsUser:UserInfo) => {
        // SQL command for login.
        // Checking if the user is exists in the database
        const SQLcommand = `SELECT count(*)
        FROM users as userCount
        WHERE email='${existsUser.email}' and pass='${existsUser.password}';`;
        const result = await dal_mysql.execute(SQLcommand);
        const userCount = result[0].userCount;
        const exists = userCount === 1; // Map userCount to true or false
        return exists;
}


const register = async (newUser:UserInfo) => {
    // SQL command for new user
    const SQLcommand = `INSERT INTO 
    vac_project.users (name,email, pass) 
    VALUES ('${newUser.fullName}', '${newUser.email}', '${newUser.password}');`
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const deleteUser = (id:number) => {

}


const createUsersTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NULL,
        email VARCHAR(45) NULL,
        pass VARCHAR(45) NULL,
        role VARCHAR(45) NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);`;
        const response = dal_mysql.execute(SQLcommand);
}

export default {
    register,
    login,
    deleteUser,
    createUsersTable
}