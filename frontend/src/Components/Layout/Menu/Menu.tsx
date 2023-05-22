import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Menu">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button size="large" variant="contained" color="success" onClick={()=> navigate ("/Main")}>Home</Button>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/Login")}>Login</Button>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/Register")}>Register</Button>
            </ButtonGroup>
            <ButtonGroup size="medium">
			<Button variant="contained" onClick={()=> navigate ("/EditVac")}>Edit Vacation</Button><br/>
            <Button variant="contained" onClick={()=> navigate ("/AddVac")}>Add Vacation</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
