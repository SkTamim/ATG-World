import React from "react";
import facebook from "../assets/images/facebook.svg";
import google from "../assets/images/google.svg";
import loginModal from "../assets/images/login-modal.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function LoginForm() {
	return (
		// for login
		<>
			<div className='col-6'>
				<h3 className='py-2'>Sign In</h3>
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
				<button className='btn createBtn'>Sign In</button>
				<div className='socialLoginGroup mb-3'>
					<button className='btn socialLogin'>
						<img src={facebook} alt='Form icon' className='img-fluid px-2' />
						Sign In with Facebook
					</button>
					<button className='btn socialLogin'>
						<img src={google} alt='Form icon' className='img-fluid px-2' />
						Sign In with Google
					</button>
				</div>
				<button className='btn forgetPassword'>Forgot Password?</button>
			</div>

			<div className='col-6 py-2'>
				<p className='text-end upperText'>
					Don’t have an account yet?
					<button className='logInBtn link-primary'>
						Create new for free!
					</button>
				</p>
				<img src={loginModal} alt='Form SVG' className='img-fluid' />
			</div>
		</>
	);
}

export default LoginForm;
