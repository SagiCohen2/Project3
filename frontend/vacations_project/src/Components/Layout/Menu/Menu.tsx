import { Button,ButtonGroup } from "@mui/material";
import "./Menu.css";


function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <ButtonGroup>
			<Button variant="contained">Add Vacation</Button><br/>
            <Button variant="contained">Edit Vacation</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
