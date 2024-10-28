import React from "react";
import "../../styles/home/getVerified.css";

const GetVerified = () => {
    return (
        <>
            <section className="get_verified_section">
                <div className="get_verified_inner_section">
                    {/* verification headline */}
                    <div className="get_verified_section_head">
                        <span>
                            Let Suppliers
                        </span>
                        <span className="border_bottom_text">
                            Find You
                        </span>
                    </div>

                    {/* verification btn */}
                    <div className="verification_btn">
                        <span>Get Verified</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetVerified;