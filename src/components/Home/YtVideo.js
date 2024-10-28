import React from "react";

const YtVideo = () => {
    return (
        <>
            <div className="left_yt_video">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=bhRCMxXsA2oHPFmN"
                    title="Introduction To WiseGPT"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    )
}

export default YtVideo;