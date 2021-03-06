import React from "react";
import { PropTypes } from "prop-types";
import Post from "./Post";
import post1 from "../assets/images/post-1.png";
import post2 from "../assets/images/post-2.png";
import post3 from "../assets/images/post-3.png";
import profile1 from "../assets/images/profile-pic-2.png";
import profile2 from "../assets/images/profile-pic-3.png";
import profile3 from "../assets/images/profile-pic-4.png";
import profile4 from "../assets/images/profile-pic.png";
import PenIcon from "./PenIcon";
import LocationForm from "./LocationForm";
import RecommendedGroup from "./RecommendedGroup";

function PostSection(props) {
	return (
		<section className='post-section mb-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 px-lg-0'>
						<Post
							category='✍️ Article'
							title='What if famous brands had regular fonts? Meet RegulaBrands!'
							para='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
							profilePic={profile1}
							postPic={post1}
							views='1.4k'
							name='Sarthak Kamra'
						/>
						<Post
							category='🔬️ Education'
							title='Tax Benefits for Investment under National Pension Scheme launched by Government'
							para='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
							profilePic={profile2}
							postPic={post2}
							views='1.4k'
							name='Sarah West'
						/>
						<Post
							category='🗓️ Meetup'
							title='Finance & Investment Elite Social Mixer @Lujiazui'
							date='Fri, 12 Oct, 2018'
							location='Ahmedabad, India'
							link='#'
							profilePic={profile3}
							postPic={post3}
							views='1.4k'
							name='Ronal Jones'
						/>

						<Post
							category='💼️ Job'
							title='Software Developer'
							company='Innovaccer Analytics Private Ltd.'
							location='Noida, India'
							link='#'
							profilePic={profile4}
							views='1.4k'
							name='Joseph Gray'
						/>
					</div>
					<div className='col-md-4 g-0 g-lg-3 d-none d-md-block'>
						<LocationForm />
						{props.loginEd ? <RecommendedGroup /> : null}
					</div>
				</div>
			</div>

			{/* for mobile */}
			<PenIcon />
		</section>
	);
}

// checking proptype for avoiding errors
PostSection.propTypes = {
	loginEd: PropTypes.bool,
};
PostSection.defaultProps = {
	loginEd: false,
};

export default PostSection;
