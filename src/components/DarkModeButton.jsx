import React, { useContext, useState } from "react";
import { Switch } from "@mui/material";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkModeButton = () => {
    const { darkMode, toggleTheme } = useContext(DarkModeContext);

    const handleClick = (e) => {
        toggleTheme();
    };
    return <Switch color="default" onChange={handleClick} />;
};
