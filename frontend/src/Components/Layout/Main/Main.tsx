import { useEffect, useState } from "react";
import "./Main.css";
import Vacation from '../../../Model/Vacation';
import SingleVac from "../SingleVac/SingleVac";
import { Request,Response,NextFunction} from 'express';
import axios from "axios";

function Main(): JSX.Element {
    // const [vacations, setVacations] = useState<Vacation[]>([]);
    // useEffect (() => { 
    //     axios.get(`http://localhost:8080/api/v1/vacations/allVacs`)
    //     .then((response) => {
    //         setVacations(response.data);
    //         console.log("Data is on air, enjoy!")
    // },[]);

    const [vacations, setVacations] = useState<Vacation[]>([]);
    useEffect (() => { 
        axios.get(`http://localhost:8080/api/v1/vacations/allVacs`)
        .then((response) => {
            setVacations(response.data);
            console.log("Data is on air, enjoy!")
        });
    },[]);

    return (
        <div className="Main">
			<h1>Sagi's Vacations Website</h1><hr/>
            <h2>Those are the latest vacations we got for you:</h2>
            {vacations.map(item=><SingleVac vacDestination={item.destination} vacDescription={item.description} vacStartDate={item.startDate} vacEndDate={item.endDate} vacPrice={0}/>)}
        </div>
    );
}

export default Main;
