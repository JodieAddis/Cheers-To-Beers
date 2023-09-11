import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Beers } from "../components/Beers";
import { DarkModeButton } from "../components/DarkModeButton";
import { DarkModeContext, DarkModeTheme } from "../context/DarkModeContext";

export const AllBeers = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-grey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col">
                <div className="flex justify-end">
                    <DarkModeButton />
                </div>
                <Beers />
            </main>
            <footer className="flex justify-center">
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
