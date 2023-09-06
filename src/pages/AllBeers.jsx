import React from "react";
import { Header } from "../components/Header";
import { Beers } from "../components/Beers";

export const AllBeers = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Beers />
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
