import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import { DarkModeTheme } from "../context/DarkModeContext";

import { IconContext } from "react-icons";
import { IoMdBeer } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";

export const BeerData = () => {
    const location = useLocation();
    const data = location.state;

    const { darkMode } = useContext(DarkModeTheme);

    return (
        <>
            {data && (
                <div className="flex flex-col">
                    <section
                        className={`${
                            darkMode ? "text-white" : "text-darkBrown"
                        } mb-6 mt-3 mx-8 text-4xl text-center font-bold uppercase`}
                    >
                        <h1>{data.name}</h1>
                    </section>
                    <section className="flex flex-col sm:mx-20 sm:mt-4">
                        <div className="flex flex-col justify-center sm:flex-row">
                            <div className="flex-col  self-center mb-8 sm:mb-0">
                                <div
                                    className={`${
                                        darkMode
                                            ? "border-DarkGrey border-solid border-2"
                                            : "border-darkBrown border-solid border-2"
                                    } bg-whiteCream flex justify-center py-2 w-56`}
                                >
                                    <img
                                        src={data.image_url}
                                        alt=""
                                        className="h-40"
                                    />
                                </div>
                                <ul
                                    className={`${
                                        darkMode
                                            ? "bg-DarkGrey"
                                            : "bg-darkBrown"
                                    } flex sm:flex-row justify-between px-2 py-2 w-56`}
                                >
                                    <li className="text-white text-sm flex flex-row">
                                        <IconContext.Provider
                                            value={{
                                                size: "1.5em",
                                            }}
                                        >
                                            <IoMdBeer />
                                        </IconContext.Provider>{" "}
                                        {data.abv}°
                                    </li>
                                    <li className="text-white text-sm">
                                        Ibu: {data.ibu}
                                    </li>
                                    <li className="text-white text-sm">
                                        pH: {data.ph}
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } sm:w-96 mx-12 self-center`}
                            >
                                <div
                                    className={`${
                                        darkMode
                                            ? "text-white"
                                            : "text-darkBrown"
                                    } mb-10`}
                                >
                                    <div className=" flex flex-row">
                                        <IconContext.Provider
                                            value={{
                                                size: "1.5em",
                                            }}
                                        >
                                            <IoFastFoodOutline />
                                        </IconContext.Provider>
                                        <h2 className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-3 ml-2">
                                            Food pairing
                                        </h2>
                                    </div>
                                    <ul className="text-center sm:text-left text-lg sm:text-sm">
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
                        </div>
                        <div
                            className={`${
                                darkMode ? "text-white" : "text-darkBrown"
                            } mx-10 sm:mx-4 mt-10`}
                        >
                            <div className="sm:mx-40">
                                <div className="flex flex-row">
                                    <IconContext.Provider
                                        value={{
                                            size: "1.5em",
                                        }}
                                    >
                                        <MdOutlineDescription />
                                    </IconContext.Provider>
                                    <h2 className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-2 ml-2">
                                        Description
                                    </h2>
                                </div>
                                <p className="text-center sm:text-justify text-lg sm:text-sm">
                                    {data.description}
                                </p>
                            </div>
                            <hr
                                className={`${
                                    darkMode
                                        ? "border-DarkGrey border-solid border-1"
                                        : "border-darkBrown border-solid border-1"
                                } my-8 mx-10 sm:mx-72`}
                            />
                            <div className="sm:mx-40">
                                <div className="flex flex-row">
                                    <IconContext.Provider
                                        value={{
                                            size: "1.5em",
                                        }}
                                    >
                                        <BsPersonLinesFill />
                                    </IconContext.Provider>

                                    <h2 className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-2 ml-2">
                                        Brewers tips
                                    </h2>
                                </div>
                                <p className="text-center sm:text-justify text-lg sm:text-sm italic">
                                    {data.brewers_tips}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};
