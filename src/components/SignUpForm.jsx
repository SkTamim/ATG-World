import React from "react";
import facebook from "../assets/images/facebook.svg";
import google from "../assets/images/google.svg";
import loginModal from "../assets/images/login-modal.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function SignUpForm() {
	return (
		<>
			<div className='col-6'>
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
				<button className='btn createBtn'>Create Account</button>
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
			</div>

			<div className='col-6 py-2'>
				<p className='text-end upperText'>
					Already have an account?
					<button className='logInBtn link-primary'>Sign In</button>
				</p>
				<img src={loginModal} alt='Modal SVG' className='img-fluid' />
				<p className='signInFooter text-muted'>
					By signing up, you agree to our Terms & conditions, Privacy policy
				</p>
			</div>
		</>
	);
}

export default SignUpForm;
