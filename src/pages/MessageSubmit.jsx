import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";
import { Header } from "../components/Header";
import { Confirmation } from "../components/Confirmation";

export const MessageSubmit = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-lightGrey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col mt-6">
                <Confirmation />
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
