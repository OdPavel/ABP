import {Outlet} from "react-router-dom";
import Menu from "../menu";

const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
};

export default MainLayout;