import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllBeers } from "./pages/AllBeers";
import { SelectedBeer } from "./pages/SelectedBeer";
import { Contact } from "./pages/Contact";
import { DarkModeContext } from "./context/DarkModeContext";
import { MessageSubmit } from "./pages/MessageSubmit";

function App() {
    return (
        <>
            <DarkModeContext>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/allbeers" element={<AllBeers />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route
                            path="/selectedbeer"
                            element={<SelectedBeer />}
                        ></Route>
                        <Route path="/sent" element={<MessageSubmit />}></Route>
                    </Routes>
                </Router>
            </DarkModeContext>
        </>
    );
}

export default App;
