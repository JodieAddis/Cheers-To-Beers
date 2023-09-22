import React from "react";
import { BeerData } from "../components/BeerData";
import { useContext } from "react";
import { Header } from "../components/Header";
import { DarkModeButton } from "../components/DarkModeButton";
import { DarkModeTheme } from "../context/DarkModeContext";
import { Footer } from "../components/Footer";

export const SelectedBeer = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-grey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col mt-6">
                <div className="flex justify-end">
                    <DarkModeButton />
                </div>
                <div className="flex justify-center">
                    <BeerData />
                </div>
            </main>
            <footer className="flex justify-center">
                <Footer />
            </footer>
        </div>
    );
};
