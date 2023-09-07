import React from "react";
import { Header } from "../components/Header";
import { BeerData } from "../components/BeerData";

export const SelectedBeer = ({ beerName }) => {
    return (
        <div className="bg-DarkGreen">
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center">
                <BeerData />
            </main>
            <footer className="flex justify-center">
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
