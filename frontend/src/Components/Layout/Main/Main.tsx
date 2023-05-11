import { useEffect, useState } from "react";
import "./Main.css";
import Vacation from '../../../Model/Vacation';
import SingleVac from "../SingleVac/SingleVac";
import { Request,Response,NextFunction} from 'express';
import axios from "axios";

function Main(): JSX.Element {

    const [vacations, setVacations] = useState<Vacation[]>([]);
    useEffect (() => { 
        axios.get(`http://localhost:8080/api/v1/vacations/allVacs`)
        .then((response) => {
            setVacations(response.data);
            console.log("Data is on air, enjoy!")
            const startDateArray = response.data.map((vacation: { startDate: any; }) => vacation.startDate);
            const endDateArray = response.data.map((vacation: { endDate: any; }) => vacation.endDate);
        console.log(startDateArray);
        console.log(endDateArray);

        });
    },[]);

    return (
        <div className="Main">
			<h1>Sagi's Vacations Website</h1><hr/>
            <h2>Those are the latest vacations we got for you:</h2>
            {vacations.map(item=><SingleVac vacDestination={item.destination} vacDescription={item.description} vacStartDate={prettyStartDate(item.startDate)} vacEndDate={prettyEndDate(item.endDate)} vacPrice={0}/>)}
        </div>
    );
}


const prettyStartDate = (startDateArray:any) => {
    const myStartDate = startDateArray.split("-");
    return `${myStartDate[2]}/${myStartDate[1]}/${myStartDate[0]}`;
};

const prettyEndDate = (endDateArray:any) => {
    const myEndDate = endDateArray.split("-");
    return `${myEndDate[2]}/${myEndDate[1]}/${myEndDate[0]}`;
    console.log(prettyEndDate)
};


export { prettyStartDate, prettyEndDate };
export default Main;
