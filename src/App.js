import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Hero from "./components/Hero";
import profilePic from "./assets/images/profile-pic.png";

function App() {
	return (
		<>
			<Header loginEd={true} name='Sk Tamim' profilePic={profilePic} />
			<Hero />
		</>
	);
}

export default App;
