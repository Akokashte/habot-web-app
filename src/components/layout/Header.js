import React, { useState } from "react";
import "../../styles/AppLayoutStyles/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false)

    return (
        <>
            <header className="header_section">
                {/* main navbar */}
                <div className="header_inner_section">
                    {/* logo and hamburger container */}
                    <div className="logo_and_hamburger_main_menu">
                        {/* main header logo */}
                        <div className="logo_container">
                            <h2>NexBuy</h2>
                        </div>
                        {/* hamburger menu */}
                        <div className="mobile_hamburger_menu"
                            onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                            <i className="fi fi-br-menu-burger menuIcon"></i>
                        </div>
                    </div>

                    <div className="navlinks_and_btn">
                        {/* main navigation links */}
                        <div className="navlinks">
                            <NavLink>
                                Find Suppliers
                            </NavLink>
                            <div className="navlink_and_drop_icon_wrapper">
                                <NavLink>
                                    Find Service Tags
                                </NavLink>
                                <i className="fi fi-rr-angle-small-down drop_down"></i>
                            </div>
                        </div>

                        {/* main login btn */}
                        <div className="login_btn">
                            <span>Login / Sign Up</span>
                        </div>
                    </div>
                </div>

                {/* mobile header here after clicking on hamburger menu */}
                <div className={hamburgerClicked ? "mobile_header_inner_section" : "mobile_invisible_header_inner_section"}>
                    {/* logo and hamburger container */}
                    <div className="logo_and_hamburger_menu">
                        {/* header logo */}
                        <div className="logo_container">
                            <h2>NexBuy</h2>
                        </div>
                        {/* cross hamburger menu for close */}
                        <div className="mobile_hamburger_menu"
                            onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                            <i className="fi fi-br-cross menuIcon"></i>
                        </div>
                    </div>

                    <div className={hamburgerClicked ? "navlinks_and_btn_visible" : "navlinks_and_btn"}>
                        {/* mobile navigation links */}
                        <div className="navlinks"
                            onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                            <NavLink to={"/"}>
                                Find Suppliers
                            </NavLink>
                            <div className="navlink_and_drop_icon_wrapper"
                                onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                                <NavLink to={"/"}>
                                    Find Service Tags
                                </NavLink>
                                <i className="fi fi-rr-angle-small-down drop_down"></i>
                            </div>
                        </div>

                        {/* mobile login btn  */}
                        <div className="login_btn"
                            onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                            <span>Login / Sign Up</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;