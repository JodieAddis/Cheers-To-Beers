import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useNavigate } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

export const MenuMobile = () => {
    const { darkMode } = useContext(DarkModeTheme);

    const [newValue, setNewValue] = useState();

    let navigate = useNavigate();

    const onClickMenu = (e) => {
        setNewValue(e.target.value);
    };
    return (
        <div>
            <select
                name="menu"
                id=""
                className={`${
                    darkMode
                        ? "bg-white text-DarkGrey"
                        : "bg-lightBeige text-darkBrown"
                } appearance-none text-center  font-semibold px-3 py-1`}
                onChange={onClickMenu}
                value={newValue}
            >
                <option value="Home" className="text-center font-semibold">
                    Home
                </option>
                <option value="All Beers" className="text-center font-semibold">
                    All Beers
                </option>
                <option value="Contact" className="text-center font-semibold">
                    Contact
                </option>
            </select>
        </div>
    );
};
