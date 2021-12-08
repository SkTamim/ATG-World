import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function PenIcon() {
	return (
		<>
			{/* for mobiles */}
			<div
				className='mobilePostBtn d-flex d-md-none align-items-center justify-content-center'
				title='Write a Post'
			>
				<EditOutlinedIcon />
			</div>
		</>
	);
}

export default PenIcon;
