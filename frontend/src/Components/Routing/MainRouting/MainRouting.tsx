import { Route,Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import "./MainRouting.css";
import Register from '../../Pages/Register/Register';
import Login from "../../Pages/Login/Login";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default MainRouting;
