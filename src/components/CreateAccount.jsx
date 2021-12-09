import React from "react";
import "../assets/css/createAccount.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function CreateAccount(props) {
	const whatType = (type) => {
		if (type === "login") {
			return <LoginForm />;
		} else if (type === "signUp") {
			return <SignUpForm />;
		}
	};

	return (
		<>
			<div className='modal-dialog modal-dialog-centered bigScreenModel'>
				<div className='modal-content'>
					<div className='modal-header'>
						<p className='modal-title' id='staticBackdropLabel'>
							Let's learn, share & inspire each other with our passion for
							computer engineering. Sign up now 🤘🏼
						</p>
						<button
							type='button'
							className='btn-close modalCloseBtn'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<div className='container'>
							<div className='row'>{whatType(props.whatBtn)}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateAccount;
