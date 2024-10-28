import React, { Suspense, useState } from "react";
import "../../styles/home/videoGuide.css";
import { customers } from "../../api/customers";

const YtVideo = React.lazy(() => import("./YtVideo"));

const VideoGuide = () => {
    const [customer, setCustomer] = useState("buyer")

    const categoryDynamicStyle = {
        borderBottom: "4px solid #EB7150",
        color: "var(--text_color_orange)"
    }

    return (
        <>
            <section className="video_guide_section">
                <div className="video_guide_inner_section">
                    {/* youtube video here */}
                    <Suspense fallback={<div>loading...</div>}>
                        <YtVideo />
                    </Suspense>

                    {/* buyer and supplier category toggler */}
                    <div className="right_buyer_supplier_container">
                        <div className="categories_of_customer">
                            {/* customer option */}
                            <div className="category"
                                onClick={() => setCustomer("buyer")}
                                style={customer === "buyer" ? categoryDynamicStyle : null}>
                                <span>Buyer</span>
                            </div>

                            {/* supplier option */}
                            <div className="category"
                                onClick={() => setCustomer("supplier")}
                                style={customer === "supplier" ? categoryDynamicStyle : null}>
                                <span>Supplier</span>
                            </div>
                        </div>


                        {/* buyer or customer info display */}
                        <div className="buyer_and_supplier_info">
                            {
                                customers[customer].map((currentInfoParagraph) => (
                                    <div className="green_check_and_paragraph_container">
                                        {/* green verified check */}
                                        <div className="green_check_bg">
                                            <img src="greenCheck.webp" alt="green check image" />
                                        </div>

                                        {/* verified information  */}
                                        <p>
                                            {
                                                currentInfoParagraph
                                            }
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoGuide;