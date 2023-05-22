import { Route, Routes } from "react-router-dom";
import Vacs from "../../Pages/Admin/Vacs/Vacs";
import "./AdminRouting.css";

function AdminRouting(): JSX.Element {
    return (
        <div className="AdminRouting">
            <Routes>
			<Route path="/Admin/Vacs" element={<Vacs/>}/>
            </Routes>
        </div>
    );
}

export default AdminRouting;
