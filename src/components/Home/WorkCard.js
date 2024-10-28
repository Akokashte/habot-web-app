import React from "react";
import "../../styles/home/howItWorks.css";

const WorkCard = ({ icon, desc }) => {
    return (
        <>
            <div className="work_card_container">
                {/* how it works page card icon here */}
                <div className="work_card_image">
                    <img src={`${icon}`} alt="work card image" />
                </div>

                {/* how it works page card description here */}
                <div className="work_desc">
                    <p>
                        {
                            desc
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default WorkCard;