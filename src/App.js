import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Hero from "./components/Hero";
import profilePic from "./assets/images/profile-pic.png";
import PostCategories from "./components/PostCategories";
import PostSection from "./components/PostSection";

function App() {
	return (
		<>
			<Header loginEd={false} name='Sk Tamim' profilePic={profilePic} />
			<Hero />
			<PostCategories />
			<PostSection />
		</>
	);
}

export default App;
