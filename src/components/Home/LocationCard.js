import React from "react";

const LocationCard = ({ location }) => {
    return (
        <>
            <div className="location_card_container">
                {/* location name */}
                <span>
                    {
                        location
                    }

                    {/* arrow */}
                    <i className="fi fi-ts-arrow-right location_card_btn_right_arrow"></i>
                </span>
            </div>
        </>
    )
}

export default LocationCard;