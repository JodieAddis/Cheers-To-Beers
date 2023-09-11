import React from "react";
import { useContext } from "react";
import { Header } from "../components/Header";
import { DarkModeButton } from "../components/DarkModeButton";
import { DarkModeTheme } from "../context/DarkModeContext";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div className={darkMode ? "bg-lightGrey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col mt-6">
                <div className="flex justify-end">
                    <DarkModeButton />
                </div>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
