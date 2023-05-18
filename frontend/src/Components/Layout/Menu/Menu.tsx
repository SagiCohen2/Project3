import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Menu">
            <Button size="large" variant="contained" color="success" onClick={()=> navigate ("/Main")}>Home</Button><br/><hr/>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/Login")}>Login</Button><br/>
            <Button size="large" variant="contained" color="warning" onClick={()=> navigate ("/Register")}>Register</Button><br/>
            <ButtonGroup size="small">
			<Button variant="contained" onClick={()=> navigate ("/EditVac")}>Edit Vacation</Button><br/>
            <Button variant="contained" onClick={()=> navigate ("/AddVac")}>Add Vacation</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
