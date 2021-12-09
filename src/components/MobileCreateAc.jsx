import React, { useState } from "react";
import "../assets/css/MobileCreateAc.css";

import MobileSignup from "./MobileSignup";
import MobileLogin from "./MobileLogin";

function MobileCreateAc() {
	const [btnType, setBtnType] = useState("");
	const clickEvent = (e) => {
		if (e.target.innerText === "Create account") {
			setBtnType("Create account");
		} else if (e.target.innerText === "Log In") {
			setBtnType("Log In");
		}
	};
	const chectType = () => {
		if (btnType === "Create account") {
			return <MobileSignup />;
		} else {
			return <MobileLogin />;
		}
	};
	return (
		<div className='MobileCreateAc d-flex d-md-none'>
			<button
				className='dropdown-item btn btn-light showModal'
				data-bs-toggle='modal'
				data-bs-target='#modal2'
				onClick={clickEvent}
			>
				Create account
			</button>
			<button
				className='dropdown-item btn btn-light showModal'
				data-bs-toggle='modal'
				data-bs-target='#modal2'
				onClick={clickEvent}
			>
				Log In
			</button>
			<div className='modal fade' id='modal2' data-bs-keyboard='false'>
				{chectType()}
			</div>
		</div>
	);
}

export default MobileCreateAc;
