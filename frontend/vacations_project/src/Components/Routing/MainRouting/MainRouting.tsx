import { Route,Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Page404 from "../../Pages/Page404/Page404";
import "./MainRouting.css";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRouting;
