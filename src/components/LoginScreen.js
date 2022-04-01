import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	// startFacebookLogin,
	startGoogleLogin,
	startNormalLogin,
} from '../actions/auth';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	// const handleFacebookLogin = () => {
	// 	dispatch(startFacebookLogin());
	// };

	const handleNormalLogin = (e) => {
		e.preventDefault();
		dispatch(startNormalLogin(email, password));
	};

	return (
		<div className="animate__animated animate__fadeIn container-center column ">
			<ul className="container column form">
				<h1 className="main__title">LOGIN</h1>
				<form className="form-box">
					<input
						className="form-input block"
						name="email"
						onChange={handleInputChange}
						placeholder="Email"
						type="email"
						value={email}
					/>
					<input
						className="form-input block"
						name="password"
						onChange={handleInputChange}
						placeholder="Password"
						type="password"
						value={password}
					/>
					<button
						className="btn btn--error block"
						onClick={handleNormalLogin}
					>
						Normal Login
					</button>
					<button
						className="btn btn--warning block"
						onClick={handleGoogleLogin}
					>
						Login with Google
					</button>
					{/* <button
						className="btn btn--primary block"
						onClick={handleFacebookLogin}
					>
						Login with Facebook
					</button> */}
				</form>

				<Link to="/register" className="link u-mt-2">
					Create a new account instead
				</Link>
			</ul>
		</div>
	);
};
