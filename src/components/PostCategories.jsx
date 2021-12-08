import React, { useState } from "react";
import "../assets/css/postCategories.css";
import joinGroup from "../assets/images/join-group.svg";
import leaveGroup from "../assets/images/leave-group.svg";

function PostCategories() {
	const [joinGroupToggle, setJoinGroupToggle] = useState("Join Group");
	const [buttonSvg, setButtonSvg] = useState(joinGroup);
	const [buttonClass, setButtonClass] = useState("groupJoinButton");

	const toggleJoin = () => {
		if (joinGroupToggle === "Join Group") {
			setJoinGroupToggle("Leave Group");
			setButtonSvg(leaveGroup);
			setButtonClass("groupLeaveButton");
		} else {
			setJoinGroupToggle("Join Group");
			setButtonSvg(joinGroup);
			setButtonClass("groupJoinButton");
		}
	};
	return (
		<>
			<div className='container-md my-4 border-bottom p-0'>
				{/* for small screens */}
				<div className='d-flex d-md-none mobileCategories px-3 align-items-center justify-content-between'>
					<div className='fw-bold'>Posts(368)</div>
					<div className='dropdown'>
						<button
							className='mobileFilter dropdown-toggle btn'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							Filter : All
						</button>

						<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
							<li>
								<button className='dropdown-item'>Article</button>
							</li>
							<li>
								<button className='dropdown-item'>Event</button>
							</li>
							<li>
								<button className='dropdown-item'>Education</button>
							</li>
							<li>
								<button className='dropdown-item'>Job</button>
							</li>
						</ul>
					</div>
				</div>

				<div className='row align-items-center'>
					<div className='col-lg-8 col-md-7 postCategories d-none d-md-block'>
						<ul className='nav nav-pills'>
							<li className='nav-item'>
								<button className='nav-link active' aria-current='page'>
									All Posts(32)
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link'>Article</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link'>Event</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link'>Education</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link'>Job</button>
							</li>
						</ul>
					</div>

					<div className=' col-lg-4 col-md-5 d-none d-md-flex justify-content-end'>
						<div className='dropdown'>
							<button
								className='btn dropdown-toggle writePostButton d-flex align-items-center'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Write a Post
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
							>
								<li>
									<button className='dropdown-item'>Article</button>
								</li>
								<li>
									<button className='dropdown-item'>Event</button>
								</li>
								<li>
									<button className='dropdown-item'>Education</button>
								</li>
								<li>
									<button className='dropdown-item'>Job</button>
								</li>
							</ul>
						</div>

						<button
							className={`btn btn-primary ${buttonClass}`}
							onClick={toggleJoin}
						>
							<img src={buttonSvg} alt='Icon' className='img-fluid px-1' />
							{joinGroupToggle}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default PostCategories;
