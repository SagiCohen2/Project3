import { Route,Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddVac from "../../Layout/AddVac/AddVac";
import EditVac from "../../Layout/EditVac/EditVac";
import Page404 from "../../Pages/Page404/Page404";
import "./MainRouting.css";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/EditVac" element={<EditVac/>}/>
                <Route path="/AddVac" element={<AddVac/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRouting;
