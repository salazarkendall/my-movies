import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		name: '',
		lastname: '',
		email: '',
		password: '',
		confirmpassword: '',
	});

	const { name, lastname, email, password, confirmpassword } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startRegister(name, lastname, email, password));
	};

	return (
		<div className="animate__animated animate__fadeIn container-center column">
			<div className="container column form">
				<h1 className="main__title">REGISTER</h1>
				<form onSubmit={handleSubmit} className="form-box">
					<input
						className="form-input block"
						type="text"
						name="name"
						onChange={handleInputChange}
						placeholder="Name"
						value={name}
					/>
					<input
						className="form-input block"
						type="text"
						name="lastname"
						onChange={handleInputChange}
						placeholder="Last Name"
						value={lastname}
					/>
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
					<input
						className="form-input block"
						name="confirmpassword"
						onChange={handleInputChange}
						placeholder="Confirm Password"
						type="password"
						value={confirmpassword}
					/>
					<button type="submit" className="btn btn--error block">
						Create user
					</button>
				</form>
				<Link to="/login" className="link u-mt-2">
					Already a member? Log in here
				</Link>
			</div>
		</div>
	);
};
