import React from "react";
import { ErrorPage } from "../components/ErrorPage";

export const Error = () => {
    return (
        <div className={darkMode ? "bg-grey" : "bg-lightBeige"}>
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center flex-col bg-beigeBrown">
                <div className="flex justify-end">
                    <ErrorPage />
                </div>
                <Beers />
            </main>
            <footer className="flex justify-center w-auto">
                <Footer />
            </footer>
        </div>
    );
};
