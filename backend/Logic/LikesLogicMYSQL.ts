import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'
import UserInfo from '../Models/UserInfo';
import Vacation from '../Models/Vacation';

const addLike = async (User:UserInfo,Vacation:Vacation) => {
    // SQL Command for add a Vacation to favorites list
    const SQLcommand = `
    INSERT INTO vac_project.user_likes (likeNum, userKey, vacKey)
    VALUES (1, ${User.userKey}, ${Vacation.vacKey});`
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const deleteLike = async (User:UserInfo,Vacation:Vacation) => {
    // SQL Command for delete a Vacation from favorites list
    const SQLcommand = `
    DELETE FROM vac_project.user_likes
    WHERE userKey = ${User.userKey}
    AND vacKey = ${Vacation.vacKey};
    `
    await dal_mysql.execute(SQLcommand);
    return true;
}


export default {
    addLike,
    deleteLike
}
