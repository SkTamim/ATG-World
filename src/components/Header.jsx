import React from "react";
import { PropTypes } from "prop-types";
import "../assets/css/header.css";
import logo from "../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
	return (
		<section className='header mx-3 px-4 px-lg-5 py-2 d-none d-md-flex justify-content-between align-items-center'>
			<a href='/#' className='logo'>
				<img src={logo} alt='Logo' className='img-fluid' />
			</a>

			<div className='searchBox'>
				<form>
					<div className='input-group'>
						<span className='input-group-text'>
							<SearchIcon />
						</span>
						<input
							type='search'
							name='search'
							id='search'
							className='form-control'
							placeholder='Search for your favorite groups in ATG'
						/>
					</div>
				</form>
			</div>

			{props.loginEd === false ? (
				<div className='createAccount dropdown'>
					<div
						className='dropdown-toggle cursor-pointer'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						Create account. <span className='text-primary'>It's free!</span>
					</div>

					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						<li>
							<button className='dropdown-item'>Create account</button>
						</li>
						<li>
							<button className='dropdown-item'>Log In</button>
						</li>
						<li>
							<button className='dropdown-item'>Terms and Conditions</button>
						</li>
					</ul>
				</div>
			) : (
				<div className='dropdown'>
					<div
						className='dropdown-toggle cursor-pointer name'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<img
							src={props.profilePic}
							alt='Profile'
							className='px-2 profile-pic img-fluid'
						/>
						{props.name}
					</div>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						<li>
							<button className='dropdown-item'>My Profile</button>
						</li>
						<li>
							<button className='dropdown-item'>Edit Profile</button>
						</li>
						<li>
							<button className='dropdown-item'>Log Out</button>
						</li>
					</ul>
				</div>
			)}
		</section>
	);
}

// checking proptype for avoiding errors
Header.propTypes = {
	loginEd: PropTypes.bool,
	name: PropTypes.string,
	profilePic: PropTypes.any,
};
Header.defaultProps = {
	loginEd: false,
	name: "User",
	profilePic: null,
};

export default Header;
