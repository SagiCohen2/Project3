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
                <MainRouting/>
                <AdminRouting/>
            </main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
