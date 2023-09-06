import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/material";
import { width } from "@mui/system";

export const SearchBeers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);

    // console.log(data);
    return (
        <Stack sx={{ width: 200, height: 50 }}>
            <Autocomplete
                id="beer_id"
                getOptionLabel={(data) => `${data.name}`} //Ce sont les noms des bière qui seront affichés dans le select
                options={data}
                sx={{ width: 200, height: 50 }}
                isOptionEqualToValue={(options, value) =>
                    options.name === value.name
                }
                noOptionsText={"No avaiblable beer"}
                renderOption={(props, data) => (
                    <Box component="li" {...props} key={data.id}>
                        {data.name}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Search for a Beer" />
                )}
            />
        </Stack>
    );
};
