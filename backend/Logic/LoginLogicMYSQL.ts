import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'
import UserInfo from '../Models/UserInfo';



const register = async (newUser:UserInfo) => {

}

const deleteUser = (id:number) => {

}


const createUsersTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.users (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(45) NULL,
        pass VARCHAR(45) NULL,
        role VARCHAR(45) NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);`;
        const response = dal_mysql.execute(SQLcommand);
}

export default {
    register,
    deleteUser,
    createUsersTable
}