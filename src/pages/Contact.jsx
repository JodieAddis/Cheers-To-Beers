import React from "react";
import { useContext } from "react";
import { Header } from "../components/Header";
import { DarkModeButton } from "../components/DarkModeButton";
import { DarkModeTheme } from "../context/DarkModeContext";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const Contact = () => {
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
                    <ContactForm />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
