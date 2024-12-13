import React from "react";

const YtVideo = () => {
    return (
        <>
            <div className="left_yt_video">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dH59z5IOUsY?si=raEUOek1gsSe3EBk"
                    title="Introduction To WiseGPT"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}

export default YtVideo;