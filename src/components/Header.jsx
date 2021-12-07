import React from "react";
import "../assets/css/header.css";
import logo from "../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
	return (
		<section className='header mx-3 px-4 px-lg-5 py-2 d-none d-md-flex justify-content-between align-items-center'>
			<a href='#' className='logo'>
				<img src={logo} alt='Logo' className='img-fluid' />
			</a>

			<div className='searchBox'>
				<form>
					<div className='input-group'>
						<span class='input-group-text'>
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

			<div className='createAccount dropdown'>
				<div
					className='dropdown-toggle cursor-pointer'
					id='createAcDropdown'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					Create account. <span className='text-primary'>It's free!</span>
				</div>

				<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
					<li>
						<a class='dropdown-item' href='#'>
							Sign Up
						</a>
					</li>
					<li>
						<a class='dropdown-item' href='#'>
							Sign In
						</a>
					</li>
					<li>
						<a class='dropdown-item' href='#'>
							Terms and Conditions
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Header;
