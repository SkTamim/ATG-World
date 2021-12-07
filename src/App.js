import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Hero from "./components/Hero";
import profilePic from "./assets/images/profile-pic.png";
import PostCategories from "./components/PostCategories";

function App() {
	return (
		<>
			<Header loginEd={false} name='Sk Tamim' profilePic={profilePic} />
			<Hero />
			<PostCategories />
		</>
	);
}

export default App;
