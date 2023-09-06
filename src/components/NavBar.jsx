import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className="flex flex-row">
                    <li className="">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-5">
                        <Link to="/allbeers">All Beers</Link>
                    </li>
                    <li className="ml-5">
                        {/* <Link to="/contact">Contact</Link> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
};
