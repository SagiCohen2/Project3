import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'
import Vacation from '../Models/Vacation';
import { response } from 'express';



const addVac = async (newVac:Vacation) => {
    // SQL command for adding vacation
    const SQLcommand = `INSERT INTO vac_project.vacations
    (destination, description, startDate, endDate, price, vacImage)
    VALUES
    ('${newVac.destination}', '${newVac.description}', '${newVac.startDate}', '${newVac.endDate}', '${newVac.price}', '${newVac.vacImage}');`;
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const editVac =  async (editVac:Vacation) => {
    // Edit Vacation
    const SQLcommand = `UPDATE vac_project.vacations 
    SET destination = '${editVac.destination}', 
    description = '${editVac.description}', 
    startDate = '${editVac.startDate}', 
    endDate = '${editVac.endDate}', 
    price = '${editVac.price}' 
    WHERE (vacKey = '${editVac.vacKey}');`;
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const deleteVac = async (vacKey:number) => {
    // SQL command for delete vacation
    const SQLcommand = `DELETE FROM vac_project.vacations 
    WHERE vacKey=${vacKey};`;
    await dal_mysql.execute(SQLcommand);
    return true;
}

const getAllVacs = async () => {
    // Get all vacations table info
    const SQLcommand = `SELECT * FROM vac_project.vacations;`;
    return await dal_mysql.execute(SQLcommand);
}


export default {
    addVac,
    editVac,
    deleteVac,
    getAllVacs
}