import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar(props) {
    let navigate = useNavigate();
    const [input, setInput] = useState("");
    const [buttonActive, setButtonActive] = useState(false);

    function handleSearch() {
        if (input !== "") {
            props.handleRefresh(input);
            navigate(`/search/?query=${input}`);
        }
    }

    useEffect(() => {
		if (input !== "" && !buttonActive) {
			setButtonActive(true);
			document.querySelector("button").style.color = "white";
			document.querySelector("button").style.cursor = "pointer";
			document.querySelector("button").style.backgroundColor = "transparent";
		} else if (input === "" && buttonActive) {
			setButtonActive(false);
			document.querySelector("button").style.color = "#acacac";
			document.querySelector("button").style.cursor = "default";
			document.querySelector("button").style.backgroundColor = "#232323";
		}
		//document.title = `Distractless | ${input}`;
	}, [input]);

    return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search"
				value={input}
				onChange={e => setInput(e.target.value)}
				onKeyDown={e => e.key === "Enter" ? handleSearch() : null}
			/>
			<button onClick={handleSearch}>🔍</button>
		</div>
	);
}

export default SearchBar;