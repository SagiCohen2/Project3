import { Route,Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddVac from "../../Pages/AddVac/AddVac";
import EditVac from "../../Pages/EditVac/EditVac";
import Page404 from "../../Pages/Page404/Page404";
import "./MainRouting.css";
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/EditVac" element={<EditVac/>}/>
                <Route path="/AddVac" element={<AddVac/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRouting;
