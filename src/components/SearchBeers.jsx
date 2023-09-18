import React, { useState, useEffect } from "react";
import { TextField, Stack, Autocomplete } from "@mui/material";
import { AllBeers } from "../pages/AllBeers";
import { useFetch } from "../hooks/useFetch";
import { SelectedBeer } from "../pages/SelectedBeer";
import { BeerData } from "./BeerData";
import { useNavigate } from "react-router-dom";

export const SearchBeers = () => {
    const [selectedBeer, setSelectedBeer] = useState(null);

    const { data, isPending, error } = useFetch(
        "https://api.punkapi.com/v2/beers"
    );

    const elementClicked = () => {
        handleValueChange();
    };

    let navigate = useNavigate();
    const handleValueChange = (event, newValue) => {
        setSelectedBeer(newValue); // Mettre à jour la bière sélectionnée
        // const dataTest = { id: 1, name: "Jodie", age: "31 ans" };
        // navigate("/selectedbeer", { state: selectedBeer });

        // Vérifier si selectedBeer est défini avant de naviguer
        if (newValue) {
            navigate("/selectedbeer", { state: newValue });
        }
    };

    return (
        <>
            <Stack sx={{ width: 200, height: 50, color: "white" }}>
                <Autocomplete
                    id="beer_id"
                    getOptionLabel={(option) => option.name}
                    options={data}
                    sx={{ width: 200, height: 50 }}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
                    noOptionsText="No available beer"
                    renderOption={(props, option) => (
                        <li {...props}>{option.name}</li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="Search for a Beer" />
                    )}
                    value={selectedBeer}
                    onChange={handleValueChange}
                    onClick={elementClicked}
                />
            </Stack>
            <p>{selectedBeer ? selectedBeer.name : ""}</p>
        </>
    );
};
