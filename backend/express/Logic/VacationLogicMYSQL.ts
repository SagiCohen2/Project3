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

const editVac = (vac:Vacation) => {}

const deleteVac = (id:number) => {}

const getVacById = (id:number) => {}

const getAllVacs = () => {}

const createVacsTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.vacations (
        id INT NOT NULL AUTO_INCREMENT,
        destination VARCHAR(45) NOT NULL,
        description VARCHAR(45) NOT NULL,
        startDate VARCHAR(45) NOT NULL,
        endDate VARCHAR(45) NOT NULL,
        price VARCHAR(45) NOT NULL,
        vacImage VARCHAR(45) NOT NULL,
        PRIMARY KEY (id));`;
        const response = dal_mysql.execute(SQLcommand);
}

export default {
    addVac,
    updateVac,
    deleteVac,
    getVacById,
    getAllVacs,
    createVacsTable,
}