import React from "react";
import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";

export const Home = () => {
    return (
        <div className="w-full bg-DarkGreen">
            <header>
                <Header />
            </header>
            <main className="min-h-screen flex justify-center mt-20">
                <Welcome />
            </main>
            <footer>
                {/* <Footer /> */}
                <p>Footer</p>
            </footer>
        </div>
    );
};
