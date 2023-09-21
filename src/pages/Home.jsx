import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";
import { DarkModeTheme } from "../context/DarkModeContext";
import { DarkModeButton } from "../components/DarkModeButton";
import { Footer } from "../components/Footer";

export const Home = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-grey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col mt-6">
                <div className="flex justify-end mt-2 mb-auto">
                    <DarkModeButton />
                </div>
                <div className="flex justify-center">
                    <Welcome />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
