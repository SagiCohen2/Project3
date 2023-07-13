import { useEffect, useState } from "react";
import "./Main.css";
import Vacation from '../../../Model/Vacation';
import axios from "axios";
import InfoCard from "../../Pages/InfoCard/InfoCard";




function Main(): JSX.Element {

    const [vacations, setVacations] = useState<Vacation[]>([]);
    useEffect (() => { 
        // GET THE VACATIONS DATA FROM BACKEND
        axios.get(`http://localhost:8080/api/v1/vacations/allVacs`)
        .then((response) => {
            setVacations(response.data);
            console.log("Data is on air, enjoy!")
        });
    },[]);

    const [userKey,setUserKey] = useState<number | null> (null);

    useEffect(() => {
        // Make an API request to fetch the userKey
        axios
          .get("http://localhost:8080/api/v1/user/userKey")
          .then((response) => {
            const userKey = response.data.userKey;
            setUserKey(userKey);
          })
          .catch((error) => {
            console.log("Error retrieving userKey:", error);
          });
      }, []);
    

    return (
        <div className="Main">
            <div>
			<h1>Sagi's Vacations Website</h1><hr/>
            <h2>Those are the latest vacations we got for you:</h2>
            <div className="vacation-list">
            {vacations.map
            (item=>
            <InfoCard 
            key={item.vacKey} 
            vacKey={item.vacKey} 
            vacDestination={item.destination} 
            vacDescription={item.description} 
            vacStartDate={item.startDate} 
            vacEndDate={item.endDate} 
            vacPrice={item.price} 
            vacImage={item.vacImage}
            userKey={userKey}/>)}
            </div>
            </div>
        </div>
    );
}

// START DATE FIX TO BE PRETTY , DD/MM/YYYY
const prettyStartDate = (startDateArray:any) => {
    const myStartDate = startDateArray.split("-");
    return `${myStartDate[2]}/${myStartDate[1]}/${myStartDate[0]}`;
};

// END DATE FIX TO BE PRETTY , DD/MM/YYYY
const prettyEndDate = (endDateArray:any) => {
    const myEndDate = endDateArray.split("-");
    return `${myEndDate[2]}/${myEndDate[1]}/${myEndDate[0]}`;
};


export { prettyStartDate, prettyEndDate };
export default Main;
