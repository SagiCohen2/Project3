import { useEffect, useState } from "react";
import "./Main.css";
import Vacation from '../../../Model/Vacation';

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
            {vacations.map((item) =>
            <div className="Box">
                {item.destination}<br/>
                {item.description}<br/>
                {item.startDate}<br/>
                {item.endDate}<br/>
                {item.price}<br/>
                {item.vacImage}
            </div>
            )}
            
        </div>
    );
}

export default Main;
