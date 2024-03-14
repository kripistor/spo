import MainMenuComponent from "./pages/main_menu/main_menu";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from "./pages/login/login";
import RegistrationPage from "./pages/registration/registration";
import CabinetComponent from "./pages/cabinet/cabinet";
import SettingsComponent from "./pages/settings/settings";
import CategoryView from "./pages/category_view/category_view";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenuComponent/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/cabinet" element={<CabinetComponent/>}/>
                <Route path="/settings" element={<SettingsComponent/>}/>
                <Route path={"/category_view"} element={<CategoryView/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;