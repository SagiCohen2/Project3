import "./SingleVac.css";
import Vacation from '../../../Model/Vacation';
import { prettyStartDate, prettyEndDate } from '../Main/Main';


interface VacationProps{
    vacDestination:string;
    vacDescription:string;
    vacStartDate:string;
    vacEndDate:string;
    vacPrice:number;
    // vacImage:string;
}

function SingleVac(props:VacationProps): JSX.Element {
    return (
        <div className="SingleVac Box">
            <>
			{props.vacDestination}<br/>
            {props.vacDescription}<br/>
            {prettyStartDate(props.vacStartDate)}<br/>
            {prettyEndDate(props.vacEndDate)}<br/>
            {props.vacPrice}<br/>
            {/* {props.vacImage} */}
            </>
        </div>
    );
}

export default SingleVac;
