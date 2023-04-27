import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Menu">
            <h2>Menu</h2><hr/>
            <Button fullWidth variant="contained" color="success" onClick={()=> navigate ("/Main")}>Home</Button><br/><hr/>
            <ButtonGroup fullWidth>
			<Button variant="contained" onClick={()=> navigate ("/EditVac")}>Edit Vacation</Button><br/>
            <Button variant="contained" onClick={()=> navigate ("/AddVac")}>Add Vacation</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
