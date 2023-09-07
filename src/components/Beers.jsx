import React, { useState } from "react";
import { SearchBeers } from "./SearchBeers";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { IoMdBeer } from "react-icons/io";
import { Icon } from "@mui/material";
import { SelectedBeer } from "../pages/SelectedBeer";
import { BeerData } from "./BeerData";

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
                            <div
                                className="justify-center my-6 w-64 border-black border-solid border-2 rounded-xl"
                                onClick={handleClickedBeer}
                            >
                                <div className="flex justify-center">
                                    <img
                                        key={id}
                                        src={beer.image_url}
                                        alt="`Picture of the beer ${beer.name}`"
                                        className="w-12 mt-6"
                                    />
                                </div>
                                <div className="flex justify-between mt-6 mx-6">
                                    <p key={id} className="font-bold w-28">
                                        {beer.name}
                                    </p>
                                    <div className="flex flex-row">
                                        <IconContext.Provider
                                            value={{
                                                size: "1.5em",
                                            }}
                                        >
                                            <IoMdBeer />
                                        </IconContext.Provider>
                                        <p key={id} className="ml-2">
                                            {beer.abv}°
                                        </p>
                                    </div>
                                </div>
                                <p key={id} className="text-center my-5">
                                    {beer.tagline}
                                </p>
                            </div>
                        </div>
                    ))}
            </section>
            <BeerData beerId={beerId} />
        </div>
    );
};
