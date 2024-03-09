import MainMenuComponent from "./pages/main_menu/main_menu";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from "./pages/login/login";
import RegistrationPage from "./pages/registration/registration";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenuComponent/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;