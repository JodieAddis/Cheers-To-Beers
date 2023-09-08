import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllBeers } from "./pages/AllBeers";
import { SelectedBeer } from "./pages/SelectedBeer";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
    return (
        <>
            <DarkModeContext>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/allbeers" element={<AllBeers />}></Route>
                        {/* <Route path="/contact" element={<Contact />}></Route> */}
                        <Route
                            path="/selectedbeer"
                            element={<SelectedBeer />}
                        ></Route>
                    </Routes>
                </Router>
            </DarkModeContext>
        </>
    );
}

export default App;
