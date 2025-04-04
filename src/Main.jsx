import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css"

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />} /> {/* Similar to the stack navigator! the "/" path is just the root, your default page. */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
9