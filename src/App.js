import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Hero from "./components/Hero";
import profilePic from "./assets/images/profile-pic.png";
import PostCategories from "./components/PostCategories";
import PostSection from "./components/PostSection";
import MobileCreateAc from "./components/MobileCreateAc";

function App() {
	return (
		<>
			{/* To preview Mobile Login and Sign up modal please uncomment the
			"MobileCreateAc" component. */}
			{/* <MobileCreateAc /> */}

			{/* if you want to see without login view then sent the "loginEd" prop "false"*/}
			<Header loginEd={false} name='Siddharth Goyal' profilePic={profilePic} />

			<Hero />

			<PostCategories />

			{/* if you want to see without login view then sent the "loginEd" prop "false" */}
			<PostSection loginEd={true} />
		</>
	);
}

export default App;
