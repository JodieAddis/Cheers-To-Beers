import React, { useState } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between mx-5 mt-5">
            <NavBar />
            <p>Logo</p>
        </div>
    );
};
