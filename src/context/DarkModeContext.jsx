import React from "react";
import { createContext, useState } from "react";

export const DarkModeTheme = createContext();

export const DarkModeContext = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <DarkModeTheme.Provider value={{ darkMode, toggleTheme }}>
            {props.children}
        </DarkModeTheme.Provider>
    );
};
