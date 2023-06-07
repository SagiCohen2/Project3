import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Menu">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button size="large" variant="contained" color="success" onClick={()=> navigate ("/m/Main")}>Home</Button>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/m/Login")}>Login</Button>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/m/Register")}>Register</Button>
            </ButtonGroup>
            <ButtonGroup size="medium">
			<Button variant="contained" onClick={()=> navigate ("/admin/EditVac")}>Edit Vacation</Button><br/>
            <Button variant="contained" onClick={()=> navigate ("/admin/AddVac")}>Add Vacation</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
