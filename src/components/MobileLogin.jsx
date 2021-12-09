import React from "react";
import "../assets/css/createAccount.css";
import "../assets/css/MobileSignup.css";
import facebook from "../assets/images/facebook.svg";
import google from "../assets/images/google.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function MobileLogin() {
	return (
		<div className='modal-dialog modal-dialog-centered mobileSignUp'>
			<div className='modal-content'>
				<button
					type='button'
					className='btn-close modalCloseBtn'
					data-bs-dismiss='modal'
					aria-label='Close'
				></button>

				<div className='modal-body'>
					<div className=''>
						<h3 className='py-2'>Create Account</h3>
						<form>
							<input
								type='email'
								name='email'
								id='logInEmail'
								className='form-control'
								placeholder='Email'
							/>
							<div className='input-group'>
								<input
									type='password'
									name='password'
									id='logInPassword'
									className='form-control'
									placeholder='Password'
								/>
								<span className='input-group-text logInPassword-goup'>
									<RemoveRedEyeOutlinedIcon />
								</span>
							</div>
						</form>
						<div className='d-flex justify-content-between align-items-center'>
							<button className='btn createBtn'>Sign In</button>
							<button className='orSignUp btn'>or, Create Account</button>
						</div>
						<div className='socialLoginGroup mb-3'>
							<button className='btn socialLogin'>
								<img src={facebook} alt='Icon' className='img-fluid px-2' />
								Sign in with Facebook
							</button>
							<button className='btn socialLogin'>
								<img src={google} alt='Icon' className='img-fluid px-2' />
								Sign in with Google
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileLogin;
