import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

import beer_1 from "../assets/img/top_beer.jpg";
import dark_beer_1 from "../assets/img/top_beer_dark.png";
import beer_2 from "../assets/img/glass_of_beer.jpg";
import dark_beer_2 from "../assets/img/glass_of_beer_dark.png";

export const Welcome = () => {
    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div>
            <div className="">
                <h1
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } text-center text-4xl font-bold uppercase mb-8`}
                >
                    welcome
                </h1>
                <img
                    src={darkMode ? dark_beer_1 : beer_1}
                    alt="beer from the top"
                    className="w-72"
                />
            </div>
            <div>
                <img
                    src={darkMode ? dark_beer_2 : beer_2}
                    alt="pic of a glass of beer"
                    className="w-72"
                />
                <p
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } text-center w-72 font-semibold mt-5`}
                >
                    Dive deeper into the art of brewing with our curated
                    selection of beers. Discover their unique stories and
                    craftsmanship behind each bottle.
                </p>
            </div>
        </div>
    );
};
