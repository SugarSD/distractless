import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home.js";
import SearchResult from "./SearchResult/SearchResult.js";
import WatchVideo from "./WatchVideo/WatchVideo.js";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";


function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/search/" element={<SearchResult />} />
				<Route path="/watch/" element={<WatchVideo />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
