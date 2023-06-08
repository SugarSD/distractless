import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './WatchVideo.css';

function Watch() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    const [videoId, setVideoId] = useState(searchParams.get("v"));
    const [video, setVideo] = useState([]);

    function goBack() {
        navigate(-1);
    }

    useEffect(() => {
        setVideo([<div id="video">
            <iframe width={560 * 2} height={315 * 2} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allowFullScreen rel="0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>])
    }, []);

    return (
        <div className="watch-container">
            <h1 onClick={goBack}>Back</h1>
            <div className="playing-container">
                {video}
            </div>
        </div>
    )
}

export default Watch;