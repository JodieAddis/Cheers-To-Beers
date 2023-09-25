import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

import beer_1 from "../assets/img/top_beer.jpg";
import dark_beer_1 from "../assets/img/top_beer_dark.jpg";
import beer_2 from "../assets/img/glass_of_beer.jpg";
import dark_beer_2 from "../assets/img/glass_of_beer_dark.jpg";

export const Welcome = () => {
    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <h1
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } text-center text-4xl sm:text-5xl font-bold uppercase mb-8 sm:my-12`}
                >
                    welcome
                </h1>
                <img
                    src={darkMode ? dark_beer_2 : beer_2}
                    alt="beer from the top"
                    className="w-72 sm:w-96"
                />
            </div>
            <div className="sm:ml-4">
                <img
                    src={darkMode ? dark_beer_1 : beer_1}
                    alt="pic of a glass of beer"
                    className="w-72 sm:w-96"
                />
                <p
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } text-center w-72 sm:w-96 font-semibold mt-5 sm:mt-10`}
                >
                    Dive deeper into the art of brewing with our curated
                    selection of beers. Discover their unique stories and
                    craftsmanship behind each bottle.
                </p>
            </div>
        </div>
    );
};
