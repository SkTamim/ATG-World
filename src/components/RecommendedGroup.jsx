import React from "react";
import "../assets/css/recommendedGroup.css";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import user1 from "../assets/images/follwo-1.png";
import user2 from "../assets/images/follwo-2.png";
import user3 from "../assets/images/follwo-3.png";
import user4 from "../assets/images/follwo-4.png";

function RecommendedGroup() {
	const followBtn = (e) => {
		if (e.target.innerText === "Follow") {
			e.target.innerText = "Followed";
			e.target.classList.add("followed");
		} else {
			e.target.innerText = "Follow";
			e.target.classList.remove("followed");
		}
	};

	return (
		<div className='RecommendedGroup px-lg-4 px-0 my-4'>
			<div className='heading d-flex align-items-center'>
				<ThumbUpTwoToneIcon className='mx-1' />
				Recommended Groups
			</div>

			<div className='user d-flex justify-content-between align-items-center my-4'>
				<div>
					<img src={user1} alt='User' className='img-fluid pe-3' />
					<span>Leisure</span>
				</div>
				<button className='btn followBtn' onClick={followBtn}>
					Follow
				</button>
			</div>

			<div className='user d-flex justify-content-between align-items-center my-4'>
				<div>
					<img src={user2} alt='User' className='img-fluid pe-3' />
					<span>Activism</span>
				</div>
				<button className='btn followBtn' onClick={followBtn}>
					Follow
				</button>
			</div>

			<div className='user d-flex justify-content-between align-items-center my-4'>
				<div>
					<img src={user3} alt='User' className='img-fluid pe-3' />
					<span>MBA</span>
				</div>
				<button className='btn followBtn' onClick={followBtn}>
					Follow
				</button>
			</div>

			<div className='user d-flex justify-content-between align-items-center my-4'>
				<div>
					<img src={user4} alt='User' className='img-fluid pe-3' />
					<span>Philosophy</span>
				</div>
				<button className='btn followBtn' onClick={followBtn}>
					Follow
				</button>
			</div>
		</div>
	);
}

export default RecommendedGroup;
