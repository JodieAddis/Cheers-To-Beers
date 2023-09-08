import React, { useContext, useState } from "react";
import { Switch } from "@mui/material";
import { DarkModeTheme } from "../context/DarkModeContext";

export const DarkModeButton = () => {
    const { darkMode, toggleTheme } = useContext(DarkModeTheme); //ici

    return <Switch color="default" onClick={toggleTheme} />;
};
