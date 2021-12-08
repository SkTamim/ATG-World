import React from "react";
import "../assets/css/post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

function Post(props) {
	const checkCategory = (category) => {
		if (category === "🗓️ Meetup") {
			return (
				<a href={props.link} className='btn webLink webLink-meetup my-3'>
					Visit Website
				</a>
			);
		} else if (category === "💼️ Job") {
			return (
				<a href={props.link} className='btn webLink webLink-job my-3'>
					Apply on Timesjobs
				</a>
			);
		} else {
			return <p className='card-text text-muted'>{props.para}</p>;
		}
	};

	return (
		<>
			<div className='card my-2'>
				{props.category !== "💼️ Job" ? (
					<img src={props.postPic} className='card-img-top' alt='Post' />
				) : null}
				<div className='card-body'>
					<div className='post-category py-2'>{props.category}</div>
					<div className='card-title d-flex justify-content-between align-items-center'>
						<h5>{props.title}</h5>
						<div className='dropdown'>
							<button
								className='btn optionsBtn'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								<MoreHorizIcon />
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
							>
								<li>
									<button className='dropdown-item btn'>Edit</button>
								</li>
								<li>
									<button className='dropdown-item btn'>Report</button>
								</li>
								<li>
									<button className='dropdown-item btn'>Save</button>
								</li>
							</ul>
						</div>
					</div>

					{props.category === "🗓️ Meetup" || props.category === "💼️ Job" ? (
						<div className='d-flex justify-content-between col-md-7'>
							{props.category === "🗓️ Meetup" ? (
								<div className='date d-flex align-items-center'>
									<TodayOutlinedIcon />
									<span className='px-1'>{props.date}</span>
								</div>
							) : (
								<div className='company d-flex align-items-center'>
									<WorkOutlineOutlinedIcon />
									<span className='px-1'>{props.company}</span>
								</div>
							)}
							<div className='location d-flex align-items-center'>
								<LocationOnOutlinedIcon />
								<span className='px-1'>{props.location}</span>
							</div>
						</div>
					) : null}

					{checkCategory(props.category)}

					<div className='d-flex justify-content-between align-items-center py-2'>
						<div className='accout d-flex align-items-center'>
							<img src={props.profilePic} alt='Poster' className='img-fluid' />
							<h5 className='px-2'>
								{props.name}
								<span className='d-block d-md-none fs-6 text-muted fw-normal'>
									{props.views} views
								</span>
							</h5>
						</div>
						<div className='d-flex align-items-center'>
							<div className='views d-none d-md-block'>
								<VisibilityIcon />
								<span className='px-2'>{props.views} views</span>
							</div>

							<div className='share dropdown'>
								<button
									className='btn'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									<ShareIcon />
								</button>
								<ul
									className='dropdown-menu'
									aria-labelledby='dropdownMenuButton1'
								>
									<li>
										<button className='dropdown-item btn'>Facebook</button>
									</li>
									<li>
										<button className='dropdown-item btn'>Twitter</button>
									</li>
									<li>
										<button className='dropdown-item btn'>LinkedIn</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Post;
