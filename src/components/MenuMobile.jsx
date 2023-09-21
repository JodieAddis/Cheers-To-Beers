import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeTheme } from "../context/DarkModeContext";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const MenuMobile = () => {
    const { darkMode } = useContext(DarkModeTheme);

    const [newValue, setNewValue] = useState();

    let navigate = useNavigate();

    const onChangeMenu = (e) => {
        const valueSelected = e.target.value;
        setNewValue(valueSelected);
        switch (valueSelected) {
            case "Home":
                navigate("/");
                break;
            case "All Beers":
                navigate("/allbeers");
                break;
            case "Contact":
                navigate("/contact");
                break;
            default:
                console.log("Invalid selection");
        }
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                        // color: "#4A3628",
                        color: "#E0CFC3",
                        textAlign: "center",
                        fontWeight: "600",
                    }}
                >
                    Menu
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newValue}
                    label="Menu"
                    onChange={onChangeMenu}
                    sx={{
                        width: 120,
                        height: 50,
                        // backgroundColor: "#E0CFC3",
                        // color: "#4A3628",
                        backgroundColor: "#4A3628",
                        color: "#E0CFC3",
                        textAlign: "center",
                        fontWeight: "600",
                    }}
                >
                    <MenuItem value="Home">Home</MenuItem>
                    <MenuItem value="All Beers">All Beers</MenuItem>
                    <MenuItem value="Contact">Contact</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};
