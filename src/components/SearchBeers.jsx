import React, { useState, useEffect } from "react";
import { TextField, Stack, Autocomplete } from "@mui/material";
import { AllBeers } from "../pages/AllBeers";
import { useFetch } from "../hooks/useFetch";
import { SelectedBeer } from "../pages/SelectedBeer";

export const SearchBeers = () => {
    const [selectedBeer, setSelectedBeer] = useState(null);

    const { data, isPending, error } = useFetch(
        "https://api.punkapi.com/v2/beers"
    );

    const handleBeerSelected = (event, value) => {
        setSelectedBeer(value);
    };

    return (
        <>
            <Stack sx={{ width: 200, height: 50 }}>
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
                    onChange={handleBeerSelected}
                    value={selectedBeer}
                />
            </Stack>
        </>
    );
    te;
};
