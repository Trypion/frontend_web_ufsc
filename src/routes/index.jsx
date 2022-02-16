import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { Navbar } from "../components/Navbar";
import { RegisterCars } from "../pages/register-cars";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/register-car" exact element={<RegisterCars />}></Route>
      </Routes>
    </Router>
  );
};
