import React from "react";
import { Header } from "../components/Header";
import { Beers } from "../components/Beers";

export const AllBeers = () => {
    return (
        <div className="bg-DarkGreen">
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center">
                <Beers />
            </main>
            <footer className="flex justify-center">
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
