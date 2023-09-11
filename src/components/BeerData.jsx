import React from "react";

export const BeerData = ({ selectedBeer }) => {
    // console.log(selectedBeer);
    return (
        <div className="flex flex-col sm:flex-row">
            {/* <div>
                <img src="" alt="Pic of the selected beer" />
            </div> */}
            {/* <div>
                <p>Beer information: {selectedBeer && selectedBeer.name}</p>
            </div> */}
            <p>{selectedBeer ? selectedBeer.name : ""}</p>
            <p>test</p>
        </div>
    );
};
