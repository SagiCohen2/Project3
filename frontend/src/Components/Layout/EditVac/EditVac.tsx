import "./EditVac.css";
import { Button } from '@mui/material';

function EditVac(): JSX.Element {
    return (
        <div className="EditVac">
			<div className="Box"><h3>Edit Vacation:</h3><hr/>
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
            <Button fullWidth variant="contained">Update</Button><br/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
        </div>
    );
}

export default EditVac;
