import { Route, Routes } from "react-router-dom";
import Page404 from "../../Pages/Page404/Page404";
import AdminRouting from "../../Routing/AdminRouting/AdminRouting";
import MainRouting from "../../Routing/MainRouting/MainRouting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";



function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/>
            <nav>
                <Menu/>
            </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/m/*" element={<MainRouting />} />
                    <Route path="/admin/*" element={<AdminRouting />} />
                    <Route path="/*" element={<Page404 />} />
                </Routes>
            </main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
