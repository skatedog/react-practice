import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";

export const App = () => {
  return (
    <BrowserRouter>
      <h1>Route Practice</h1>
      <ul>
        <li><NavLink to="/home" style={(s) =>({ color: s.isActive ? "green" : "blue" })}>Home</NavLink></li>
        <li><NavLink to="/about" style={(s) =>({ color: s.isActive ? "green" : "blue" })}>About</NavLink></li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};