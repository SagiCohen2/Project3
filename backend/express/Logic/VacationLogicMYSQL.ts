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

const updateVac = (vac:Vacation) => {}

const deleteVac = (id:number) => {}

const getVacById = (id:number) => {}

const getAllVacs = () => {}

const createVacsTable = () => {}

export default {
    addVac,
    updateVac,
    deleteVac,
    getVacById,
    getAllVacs,
    createVacsTable,
}