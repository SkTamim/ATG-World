import React from "react";
import "../assets/css/createAccount.css";
import "../assets/css/MobileSignup.css";
import facebook from "../assets/images/facebook.svg";
import google from "../assets/images/google.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function MobileSignup() {
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
							<div className='input-group'>
								<input
									type='text'
									aria-label='First name'
									placeholder='First name'
									className='form-control'
									id='firstName'
									name='firstName'
								/>
								<input
									type='text'
									aria-label='Last name'
									placeholder='Last name'
									className='form-control'
									id='lastName'
									name='lastName'
								/>
							</div>
							<input
								type='email'
								name='email'
								id='email'
								className='form-control'
								placeholder='Email'
							/>
							<div className='input-group'>
								<input
									type='password'
									name='password'
									id='password'
									className='form-control'
									placeholder='Password'
								/>
								<span className='input-group-text'>
									<RemoveRedEyeOutlinedIcon />
								</span>
							</div>
							<input
								type='text'
								name='ConfirmPassword'
								id='ConfirmPassword'
								className='form-control'
								placeholder='Confirm Password'
							/>
						</form>
						<div className='d-flex justify-content-between align-items-center'>
							<button className='btn createBtn'>Create Account</button>
							<button className='orSignUp btn'>or, Sign In</button>
						</div>
						<div className='socialLoginGroup mb-3'>
							<button className='btn socialLogin'>
								<img src={facebook} alt='Icon' className='img-fluid px-2' />
								Sign up with Facebook
							</button>
							<button className='btn socialLogin'>
								<img src={google} alt='Icon' className='img-fluid px-2' />
								Sign up with Google
							</button>
						</div>
						<p className='signInFooter text-muted text-center'>
							By signing up, you agree to our Terms & conditions, Privacy policy
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileSignup;
