import React, { useState } from "react";
import { SearchBeers } from "./SearchBeers";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { IoMdBeer } from "react-icons/io";
import { Icon } from "@mui/material";
import { SelectedBeer } from "../pages/SelectedBeer";
import { BeerData } from "./BeerData";

import Beer from "../assets/img/bg_beer.jpg";

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

    return (
        <div>
            <section className="flex justify-center mt-20">
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
                                    className="w-64 ml-3 mb-2 text-3xl text-white font-julius"
                                >
                                    {beer.name}
                                </p>
                                <div
                                    className="justify-center w-72 border-LightGreen border-solid border-2 rounded-xl bg-white font-julius"
                                    onClick={handleClickedBeer}
                                >
                                    <div className="flex justify-center rounded-xl">
                                        <img
                                            key={id}
                                            // src={beer.image_url}
                                            src={Beer}
                                            alt="Picture of the beer"
                                            className="rounded-t-xl"
                                        />
                                    </div>
                                    <div className="flex justify-end mt-2 mx-6 text-DarkGreen font-bold">
                                        <div className="flex flex-row mt-4">
                                            <IconContext.Provider
                                                value={{
                                                    size: "1.5em",
                                                }}
                                            >
                                                <IoMdBeer />
                                            </IconContext.Provider>
                                            <p
                                                key={id}
                                                className="ml-2 text-xl"
                                            >
                                                {beer.abv}°
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        key={id}
                                        className="text-center my-5 mx-4 text-lg font-istok"
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
