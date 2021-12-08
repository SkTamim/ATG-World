import React, { useState } from "react";
import "../assets/css/locationForm.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function LocationForm() {
	const [location, setLocation] = useState("");
	const [icon, setIcon] = useState(<EditIcon />);

	const handelEvent = (e) => {
		setLocation(e.target.value);
	};

	const toggleFocus = (e) => {
		e.target.classList.add("active");
		setIcon(<CloseIcon />);
	};

	const blur = (e) => {
		e.target.classList.remove("active");
		setIcon(<EditIcon />);
	};

	return (
		<div className='locationForm px-lg-4 px-0'>
			<form>
				<div className='input-group'>
					<span className='input-group-text'>
						<LocationOnOutlinedIcon />
					</span>
					<input
						type='text'
						className='form-control'
						placeholder='Enter your location'
						id='locationForm'
						onChange={handelEvent}
						value={location}
						onClick={toggleFocus}
						onBlur={blur}
					/>
					<span className='input-group-text-extra'>{icon}</span>
				</div>
			</form>

			<div className='text-muted fs-6 d-flex my-2'>
				<div className='px-1'>
					<ErrorOutlineOutlinedIcon />
				</div>
				<p className=' warning-text'>
					Your location will help us serve better and extend a personalised
					experience.
				</p>
			</div>
		</div>
	);
}

export default LocationForm;
