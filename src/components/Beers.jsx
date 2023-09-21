import React, { useState } from "react";
import { SearchBeers } from "./SearchBeers";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";
import { ErrorPage } from "./ErrorPage";

// import Beer_display from "../assets/img/glass_of_beer.jpg";

export const Beers = () => {
    const [beerId, setBeerId] = useState();
    const { data, isPending, error } = useFetch(
        "https://api.punkapi.com/v2/beers"
    );

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
                {isPending && (
                    <div className="flex flex-col justify-center">
                        <svg
                            aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500 self-center"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <p
                            className={`${
                                darkMode ? "text-white" : "text-darkBrown"
                            } text-center text-3xl font-semibold m-4`}
                        >
                            Loading...
                        </p>
                    </div>
                )}
                {error && <ErrorPage />}
                {data &&
                    data.map((beer, id) => (
                        <div className="mx-4 " key={id}>
                            <div className="flex flex-col mb-20 sm:mb-14">
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
        </div>
    );
};
