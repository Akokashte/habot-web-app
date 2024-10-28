import React from "react";
import "../../styles/home/heroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <section className="hero_section_outer_container">
                <div className="hero_section_inner_container">
                    {/* hero section headline and tagline */}
                    <div className="heading_wrapper">
                        <span className="hero_section_main_head">
                            Are You a Supplier?
                        </span>
                        <span className="hero_section_sub_head">
                            Explore Matching Opportunities.
                        </span>
                    </div>

                    {/* search input section */}
                    <div className="search_box_and_link_for_buyer">
                        {/* search inputs and action btn */}
                        <div className="search_boxes_container">
                            <div className="search_box">
                                <i className="fi fi-rr-briefcase cart_icon"></i>
                                <input type="text" placeholder={"Search your required service here"} />
                            </div>
                            <div className="search_box">
                                <i className="fi fi-rs-marker cart_icon"></i>
                                <input type="text" placeholder={"Search your desired location here"} />
                            </div>
                            <div className="search_btn">
                                <span>Search</span>
                            </div>
                        </div>

                        {/* guide link regarding search info */}
                        <div className="search_guide_text">
                            <span>Are you a buyer?</span>
                            <NavLink>Click here if you are looking to post a requirements</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;