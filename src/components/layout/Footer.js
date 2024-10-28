import React from "react";
import "../../styles/AppLayoutStyles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_inner_container">
                    {/* footer logo and navigation links container */}
                    <div className="logo_footer_links_container">
                        {/* footer logo and copyright_title */}
                        <div className="logo_and_copyright_title">
                            <div className="footer_logo">
                                <img src="footerlogo.webp" alt="logo image" />
                            </div>
                            <div className="copyright_title">
                                <small>© R Singhania</small>
                            </div>
                        </div>

                        {/* navigation links starts here */}
                        <div className="footer_links_container">
                            <div className="link_title">
                                <span>
                                    Company
                                </span>
                            </div>
                            <div className="all_links">
                                <NavLink>About</NavLink>
                                <NavLink>FAQ</NavLink>
                            </div>
                        </div>
                        <div className="footer_links_container">
                            <div className="link_title">
                                <span>
                                    Terms
                                </span>
                            </div>
                            <div className="all_links">
                                <NavLink>Data privacy</NavLink>
                                <NavLink>Terms</NavLink>
                                <NavLink>Accessibility</NavLink>
                            </div>
                        </div>
                        <div className="footer_links_container">
                            <div className="link_title">
                                <span>
                                    Related
                                </span>
                            </div>
                            <div className="all_links">
                                <NavLink>Find Buyer</NavLink>
                                <NavLink>Feedback</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* social media icons group */}
                    <div className="footer_social_icons">
                        <div className="social_icon">
                            <img src="linkedin.webp" alt="social icon here" />
                        </div>
                        <div className="social_icon">
                            <img src="twitter.webp" alt="social icon here" />
                        </div>
                        <div className="social_icon">
                            <img src="facebook.webp" alt="social icon here" />
                        </div>
                        <div className="social_icon">
                            <img src="instagram.webp" alt="social icon here" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;