import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AllBeers } from "./pages/AllBeers";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/allbeers" element={<AllBeers />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
