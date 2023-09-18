import React from "react";
import { useLocation } from "react-router-dom";

export const BeerData = () => {
    const location = useLocation();
    const data = location.state;

    console.log(data);

    return (
        <div className="flex flex-col sm:flex-row">
            {data && (
                <>
                    <section className="mb-6 mt-3 mx-8 text-4xl text-center font-bold uppercase text-darkBrown">
                        <h1>{data.name}</h1>
                    </section>
                    <section>
                        <div className="flex justify-center">
                            <img
                                src={data.image_url}
                                alt=""
                                className="w-72 border-darkBrown border-solid border-2"
                            />
                        </div>
                        <div className="mx-10 mt-10">
                            <div className="">
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Brewers tips
                                </p>
                                <p className="text-center sm:text-justify text-lg">
                                    {data.brewers_tips}
                                </p>
                            </div>
                            <hr className="my-8 border-darkBrown border-solid border-2" />
                            <div className="mb-10">
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Description
                                </p>
                                <p className="text-center sm:text-justify text-lg">
                                    {data.description}
                                </p>
                            </div>
                            <hr className="my-8 border-darkBrown border-solid border-2" />
                            <div className="mb-10">
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Food pairing
                                </p>
                                <ul className="text-center sm:text-left text-lg">
                                    <li className="sm:list-disc">
                                        {data.food_pairing[0]}
                                    </li>
                                    <li className="sm:list-disc">
                                        {data.food_pairing[1]}
                                    </li>
                                    <li className="sm:list-disc">
                                        {data.food_pairing[2]}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};
