import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllBeers } from "./pages/AllBeers";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/allbeers" element={<AllBeers />}></Route>
                    {/* <Route path="/contact" element={<Contact />}></Route> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
