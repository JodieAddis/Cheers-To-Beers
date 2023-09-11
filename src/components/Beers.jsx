import React, { useState } from "react";
import { SearchBeers } from "./SearchBeers";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

import { IconContext } from "react-icons";
import { IoMdBeer } from "react-icons/io";
import { Icon } from "@mui/material";
import { SelectedBeer } from "../pages/SelectedBeer";
import { BeerData } from "./BeerData";

import Beer_display from "../assets/img/glass_of_beer.jpg";

export const Beers = () => {
    const [beerId, setBeerId] = useState();
    const { data, isPending, error } = useFetch(
        "https://api.punkapi.com/v2/beers"
    );

    let navigate = useNavigate();

    const handleClickedBeer = (e) => {
        let path = `/selectedbeer`;
        navigate(path);
        const { value } = e.target.dataset;
        console.log(value);
    };

    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div>
            <section>
                <h1
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } text-center text-4xl font-bold`}
                >
                    All Beer
                </h1>
            </section>
            <section className="flex justify-center mt-12">
                <SearchBeers />
            </section>
            <section className="mt-12">
                {data &&
                    data.map((beer, id) => (
                        <div
                            className="flex justify-center sm: flex-row"
                            key={id}
                        >
                            <div className="flex flex-col mb-20 hover:cursor-pointer">
                                <p
                                    key={id}
                                    className={`${
                                        darkMode
                                            ? "text-white"
                                            : "text-darkBrown"
                                    } w-64 ml-3 mb-2 text-2xl font-julius font-semibold`}
                                >
                                    {beer.name}
                                </p>
                                <div
                                    className={`${
                                        darkMode
                                            ? "bg-lightGrey border-DarkGrey"
                                            : "bg-beige border-darkBrown"
                                    } border-solid border-2 justify-center w-72 font-julius"`}
                                    onClick={handleClickedBeer}
                                >
                                    <div className="flex justify-center rounded-xl">
                                        <img
                                            key={id}
                                            // src={beer.image_url}
                                            src={Beer_display}
                                            alt="Picture of the beer"
                                            className=""
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            darkMode
                                                ? "text-white"
                                                : "text-darkBrown"
                                        } flex justify-end mt-2 mx-6 font-semibold`}
                                    >
                                        <div className="flex flex-row">
                                            <IconContext.Provider
                                                value={{
                                                    size: "1.5em",
                                                }}
                                            >
                                                <IoMdBeer />
                                            </IconContext.Provider>
                                            <p
                                                key={id}
                                                className="ml-2 text-lg"
                                            >
                                                {beer.abv}°
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        key={id}
                                        className={`${
                                            darkMode
                                                ? "text-white"
                                                : "text-darkBrown"
                                        } text-center mb-4 mt-2 mx-4 text-md font-istok`}
                                    >
                                        {beer.tagline}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>
            <BeerData beerId={beerId} />
        </div>
    );
};
