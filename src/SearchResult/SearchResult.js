import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar.js';
import './SearchResult.css';
import config from '../config.js';
const { gapi_key } = config;

function SearchResult() {
	let [searchParams, setSearchParams] = useSearchParams();
	let navigate = useNavigate();
	const [query, setQuery] = useState(searchParams.get("query"));
	const [videos, setVideos] = useState([]);

	function listVideos(arr) {
		let videoList = [];
		for (let each in arr) {
			videoList.push(
				<div className="video-container">
				<div className="video" onClick={() => {navigate(`/watch/?v=${arr[each].id.videoId}`)}}>
					<img src={arr[each].snippet.thumbnails.medium.url} alt={arr[each].snippet.title} />
					<div className="videoInfo">
						<h3>{arr[each].snippet.title}</h3>
						<p>{arr[each].snippet.channelTitle}</p>
					</div>
				</div>
				</div>
			);
		}
		setVideos(videoList);
	}

	function refreshResults(query) {
		setQuery(query);
	}

	useEffect(() => {
		if (query !== undefined) {
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${gapi_key}&q=${query}`)
		.then((res) => res.ok ? res.json() : { error: `Error ${res.status}: ${res.statusText}` })
		.then((data) => data.error ? console.log(data.error) : listVideos(data.items))
		} else {
			navigate("/");
		}
		
	}, [query]);

	return (
		
		<div className="results-container">
			<h1 className="back-button" onClick={() => {navigate("/")}}>Back</h1>
			<SearchBar handleRefresh={refreshResults}/>
			<h1>Search Results</h1>
			<div className="results">
			<div className="videos">
				{videos}
			</div>
			</div>
		</div>
		
	);
}

export default SearchResult;
