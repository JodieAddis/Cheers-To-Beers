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
import { ErrorPage } from "./ErrorPage";

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
                    } text-center text-4xl font-bold uppercase`}
                >
                    All Beer
                </h1>
            </section>
            <section className="flex justify-center sm:justify-start mt-12 sm:ml-6">
                <SearchBeers />
            </section>
            <section className="mt-12 grid grid-cols-1 sm:grid-cols-4  sm:mx-6">
                {error && <ErrorPage />}
                {data &&
                    data.map((beer, id) => (
                        <div className="mx-4 " key={id}>
                            <div className="flex flex-col mb-20 sm:mb-14 hover:cursor-pointer">
                                <p
                                    key={id}
                                    className={`${
                                        darkMode
                                            ? "text-white"
                                            : "text-darkBrown"
                                    } w-72  sm:w-52 self-center text-left ml-2 sm:ml-0 mb-2 text-2xl sm:text-lg font-julius font-semibold truncate`}
                                >
                                    {beer.name}
                                </p>
                                <div
                                    className={`${
                                        darkMode
                                            ? "bg-DarkGrey border-DarkGrey"
                                            : "bg-darkBrown border-darkBrown"
                                    } border-solid border-2 justify-center self-center w-72 sm:w-52 font-julius"`}
                                    onClick={handleClickedBeer}
                                >
                                    <div className="flex justify-center h-36 bg-whiteCream py-2">
                                        <img
                                            key={id}
                                            src={beer.image_url}
                                            // src={Beer_display}
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
                                    ></div>
                                    <p
                                        key={id}
                                        className={`${
                                            darkMode
                                                ? "text-white"
                                                : "text-lightBeige"
                                        } text-center mb-4 mt-2 mx-4 sm:mx-2 text-md sm:text-xs font-istok italic`}
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
