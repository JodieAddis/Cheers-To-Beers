import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {
    const { darkMode } = useContext(DarkModeTheme);

    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let path = "/sent";
        navigate(path);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <h1
                className={`${
                    darkMode ? "text-white" : "text-darkBrown"
                } text-center text-4xl font-bold uppercase mb-8`}
            >
                Contact
            </h1>
            <div>
                <form
                    action=""
                    method="get"
                    className={`${
                        darkMode ? "text-white" : "text-darkBrown"
                    } font-julius`}
                >
                    <div>
                        <div className="flex flex-col mb-6 text-md font-semibold">
                            <label className="mb-2">Firstname</label>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="firstname"
                                className="italic text-sm font-normal"
                            />
                        </div>
                        <div className="flex flex-col mb-6 text-md font-semibold">
                            <label className="mb-2">Lastname</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="lastname"
                                className="italic text-sm font-normal"
                            />
                        </div>
                        <div className="flex flex-col text-md font-semibold">
                            <label className="mb-2">Email</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="name@gmail.com"
                                className="italic text-sm font-normal"
                            />
                        </div>
                        <div className="flex flex-col mt-6 text-md font-semibold">
                            <label className="mb-2">Your message</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className={`${
                                    darkMode
                                        ? "bg-white text-DarkGrey"
                                        : "bg-darkBrown text-lightBeige"
                                } px-3 text-lg font-semibold hover:cursor-pointer`}
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
