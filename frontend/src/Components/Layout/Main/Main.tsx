import { useEffect, useState } from "react";
import "./Main.css";
import Vacation from '../../../Model/Vacation';
import SingleVac from "../SingleVac/SingleVac";

function Main(): JSX.Element {
    const [vacations, setVacations] = useState<Vacation[]>([]);
    useEffect (() => { 
        setVacations(
        localStorage.getItem("vacations")
        ? JSON.parse(localStorage.getItem("vacations")):[]
        );
    },[]);
    return (
        <div className="Main">
			<h1>Project 3 test</h1><hr/>
            {vacations.map(item=><SingleVac vacDestination={item.destination} vacDescription={item.description} vacStartDate={item.startDate} vacEndDate={item.endDate} vacPrice={0}/>)}
        </div>
    );
}

export default Main;
