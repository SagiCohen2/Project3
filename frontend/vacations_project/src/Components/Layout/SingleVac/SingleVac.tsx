import "./SingleVac.css";
import Vacation from '../../../Model/Vacation';

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
			{props.vacDestination}<br/>
            {props.vacDescription}<br/>
            {props.vacStartDate}<br/>
            {props.vacEndDate}<br/>
            {props.vacPrice}<br/>
            {/* {props.vacImage} */}
        </div>
    );
}

export default SingleVac;
