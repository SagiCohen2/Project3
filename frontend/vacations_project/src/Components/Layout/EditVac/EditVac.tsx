import "./EditVac.css";
import { Button } from '@mui/material';

function EditVac(): JSX.Element {
    return (
        <div className="EditVac">
			<div className="Box">Edit Vacation:<hr/>
            Destination:<br/><input type="text"></input><br/>
            <hr/>
            Description:<br/><textarea></textarea><br/>
            <hr/>
            Start on:<br/><input type="date"></input>
            <hr/>
            End on:<br/><input type="date"></input>
            <hr/>
            Price:<br/><input type="number"></input>
            <hr/>
            Cover image:<br/><input type="file"></input><hr/>
            <Button variant="contained">Update</Button><br/>
            <Button variant="contained">Cancel</Button><br/>
            </div>
        </div>
    );
}

export default EditVac;
