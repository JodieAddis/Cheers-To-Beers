import React, { useState } from "react";
import { NavBar } from "./NavBar";
import Beer from "../assets/img/bg_beer.jpg";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="flex justify-between px-5 pt-6 pb-14 bg-cover border-b-2 border-LightGreen"
            style={{ backgroundImage: `url(${Beer})` }}
        >
            <NavBar />
            <p className="text-white">Logo</p>
        </div>
    );
};
