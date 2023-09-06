import React from "react";
import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";

export const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Welcome />
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
