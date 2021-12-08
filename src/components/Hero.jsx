import React, { useState } from "react";
import "../assets/css/hero.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Hero() {
	const [joinGroup, setJoinGroup] = useState("Join Group");

	const clickEvent = () => {
		if (joinGroup === "Join Group") {
			setJoinGroup("Leave Group");
		} else {
			setJoinGroup("Join Group");
		}
	};
	return (
		<section className='hero text-light position-relative'>
			<div className='container-md position-relative h-100'>
				<div className='row'>
					<div className='col'>
						<div className='headings'>
							<h1 className='mainHeading'>Computer Engineering</h1>
							<p className='subHeading'>
								142,765 Computer Engineers follow this
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* For small screens */}
			<div className='smallScreen d-flex d-md-none my-3 justify-content-between align-items-center'>
				<button className='backBtn btn text-light ms-3'>
					<ArrowBackIcon />
				</button>
				<button
					className='joinGroupBtn btn me-3 text-light'
					onClick={clickEvent}
				>
					{joinGroup}
				</button>
			</div>
		</section>
	);
}

export default Hero;
