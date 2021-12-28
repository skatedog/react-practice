import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { Sample } from "./Sample";
import { Sample2 } from "./Sample2";

export const App = () => {
  return (
    <BrowserRouter>
      <h1>Route Practice</h1>
      <ul>
        <li><NavLink end to="/home" style={(s) => ({ color: s.isActive ? "green" : "blue" })}>Home</NavLink></li>
        <li><NavLink to="/home/sample" style={(s) => ({ color: s.isActive ? "green" : "blue" })}>Home/Sample</NavLink></li>
        <li><NavLink to="/home/sample2" style={(s) => ({ color: s.isActive ? "green" : "blue" })}>Home/Sample2</NavLink></li>
        <li><NavLink to="/about" style={(s) => ({ color: s.isActive ? "green" : "blue" })}>About</NavLink></li>
      </ul>
      <Routes>
        <Route path="/home/" element={<Home />}>
          <Route path="sample" element={<Sample />} />
          <Route path="sample2" element={<Sample2 />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};