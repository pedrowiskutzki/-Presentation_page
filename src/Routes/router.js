import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio"

export function Router() {
        return (

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        );
    }