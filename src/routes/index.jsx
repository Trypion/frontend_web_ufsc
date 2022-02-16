import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { Home } from "../pages/home";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/register" exact element={<Register/>}></Route>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/infocar" exact element={<InfoCar/>}></Route>

            </Routes>
        </Router>
    )
}