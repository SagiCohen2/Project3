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
        // console.log(result) , works.
        const userCount = result[0]['count(*)'];
        // console.log(userCount) , works.
        const exists = userCount === 1; // Map userCount to true or false
        return exists;
}


const register = async (newUser: UserInfo) => {
    try {
      const SQLcommand = `INSERT INTO 
        vac_project.users (name, email, pass) 
        VALUES ('${newUser.fullName}', '${newUser.email}', '${newUser.password}');`;
        
      const result: OkPacket = await dal_mysql.execute(SQLcommand);
      return result.insertId;
    } catch (error) {
      if ((error as any).code === 'ER_DUP_ENTRY') {
        // Handle the case when the email already exists
        throw new Error('Email already exists');
      } else {
        // Handle other types of errors
        throw error;
      }
    }
  };

const deleteUser = (id:number) => {
    

}

export default {
    register,
    login,
    deleteUser
}