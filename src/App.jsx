import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Services from "./components/Services";
import Main from "./components/Main";
import PermissionDenied from "./components/PermissionDenied";
import useAuth from './hooks/authHooks';
import Logout from "./components/Logout";

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="nav" element={isLoggedIn ? <Nav /> : <PermissionDenied/>} >
          <Route path="main" element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
        </Route>

        <Route path="*" element={<h1 className="text-center fw-bold">Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
