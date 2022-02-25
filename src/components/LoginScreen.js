import React from 'react';
import { useDispatch } from 'react-redux';
import { startFacebookLogin, startGoogleLogin } from '../actions/auth';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	const handleFacebookLogin = () => {
		dispatch(startFacebookLogin());
	};

	return (
		<div className="container-center">
			<ul>
				<button onClick={handleGoogleLogin}>Login with Google</button>
				<hr />
				<button onClick={handleFacebookLogin}>
					Login with Facebook
				</button>

				<hr />
			</ul>
		</div>
	);
};
