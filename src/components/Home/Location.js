import React from "react";
import "../../styles/home/location.css";
import LocationCard from "./LocationCard";
import { locations } from "../../api/location";

const Location = () => {
    return (
        <>
            <section className="location_section">
                <div className="location_inner_wrapper">
                    {/* signup information container */}
                    <div className="left_signup_info">
                        <div className="left_signup_info_heading">
                            <span className="signup_heading">
                                Ready to dive into
                            </span>
                            <span className="habot_head">
                                HABOT?
                            </span>
                        </div>
                        {/* signup description */}
                        <div className="signup_info_paragraph">
                            <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
                                Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                        </div>

                        {/* signup btn */}
                        <div className="signup_btn">
                            <span>Sign up Today !</span>
                            <i class="fi fi-ts-arrow-right signup_btn_right_arrow"></i>
                        </div>
                    </div>

                    {/* work locations */}
                    <div className="right_location_info">
                        {
                            locations.map((curLocation, index) => {
                                return <LocationCard key={index} location={curLocation.location} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location;