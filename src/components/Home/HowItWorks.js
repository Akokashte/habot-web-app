import React from "react";
import "../../styles/home/howItWorks.css";
import WorkCard from "./WorkCard";
import {workInfo} from "../../api/workInfo";

const HowItWorks = () => {
    return (
        <>
            <section className="how_it_works_section">
                <div className="how_it_works_inner_section">
                    <h2>How it works?</h2>
                    <p className="how_it_work_description">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>

                    {/* work info all card wrapper */}
                    <div className="work_cards_wrapper">
                        {
                            workInfo.map((curWorkCard, index) => {
                                return <WorkCard key={index} icon={curWorkCard.icon} desc={curWorkCard.desc} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks;