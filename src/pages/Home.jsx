import React from "react";
import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";

export const Home = () => {
    return (
        <div className="w-full">
            <header>
                <Header />
            </header>
            <main className="min-h-screen mt-20">
                <Welcome />
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
