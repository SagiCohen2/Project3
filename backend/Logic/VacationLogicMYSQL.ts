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
    WHERE (id = '${editVac.id}');`;
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const deleteVac = (id:number) => {
    // SQL command for delete vacation
    const SQLcommand = `DELETE FROM vac_project.vacations 
    WHERE id=${id};`;
    return dal_mysql.execute(SQLcommand);
}

const getVacById = (id:number) => {}

const getAllVacs = async () => {
    // Get all vacations table info
    const SQLcommand = `SELECT * FROM vac_project.vacations;`;
    return await dal_mysql.execute(SQLcommand);
}

const createVacsTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.vacations (
        id INT NOT NULL AUTO_INCREMENT,
        destination VARCHAR(45) NOT NULL,
        description VARCHAR(255) NOT NULL,
        startDate VARCHAR(45) NOT NULL,
        endDate VARCHAR(45) NOT NULL,
        price VARCHAR(45) NOT NULL,
        vacImage VARCHAR(45) NOT NULL,
        PRIMARY KEY (id));`;
        const response = dal_mysql.execute(SQLcommand);
}

export default {
    addVac,
    editVac,
    deleteVac,
    getVacById,
    getAllVacs,
    createVacsTable,
}