import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";
import { Header } from "../components/Header";
import { Confirmation } from "../components/Confirmation";
import { Footer } from "../components/Footer";
import { DarkModeButton } from "../components/DarkModeButton";

export const MessageSubmit = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-lightGrey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col mt-6">
                <div className="flex justify-end mt-2">
                    <DarkModeButton />
                </div>
                <div className="my-auto">
                    <Confirmation />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
