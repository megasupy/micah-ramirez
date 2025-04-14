import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css"
import {Profiler} from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={
        <Home/>/* Similar to the stack navigator! the "/" path is just the root, your default page. */}/>
    </Routes>
  </BrowserRouter>
);
