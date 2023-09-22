import React, { useState, useContext } from "react";
import { TextField, Stack, Autocomplete } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { DarkModeTheme } from "../context/DarkModeContext";

export const SearchBeers = () => {
    const [selectedBeer, setSelectedBeer] = useState(null);
    const { darkMode } = useContext(DarkModeTheme);

    const { data, isPending, error } = useFetch(
        "https://api.punkapi.com/v2/beers"
    );

    const elementClicked = () => {
        handleValueChange();
    };

    let navigate = useNavigate();
    const handleValueChange = (event, newValue) => {
        setSelectedBeer(newValue); // Mettre à jour la bière sélectionnée
        // Vérifier si selectedBeer est défini avant de naviguer
        if (newValue) {
            navigate("/selectedbeer", { state: newValue });
        }
    };

    return (
        <div className="mb-6">
            <Stack
                sx={{
                    width: 150,
                    height: 20,
                    textAlign: "center",
                    fontWeight: "600",
                    // Changement de couleur de l'encadrer + du texte label
                    "& .MuiInputLabel-root": {
                        color: darkMode ? "#ffffff" : "#4A3628",
                    },
                    "& .MuiInputBase-root": {
                        color: darkMode ? "#ffffff" : "#4A3628",
                    },
                    "& .MuiSelect-root": {
                        color: darkMode ? "#ffffff" : "#4A3628",
                    },
                }}
            >
                <Autocomplete
                    id="beer_id"
                    getOptionLabel={(option) => option.name}
                    options={data}
                    sx={{ width: 150, height: 10, fontSize: 12 }}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
                    noOptionsText="No available beer"
                    renderOption={(props, option) => (
                        <li {...props}>{option.name}</li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="Search" />
                    )}
                    value={selectedBeer}
                    onChange={handleValueChange}
                    onClick={elementClicked}
                />
            </Stack>
        </div>
    );
};
