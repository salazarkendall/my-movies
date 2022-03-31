import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Navbar = () => {
	const navigate = useNavigate();
	const { uid } = useSelector((state) => state.auth);

	const [{ searchInput }, handleInputChange, resetInputs] = useForm({
		searchInput: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?q=${searchInput}`);
		resetInputs();
	};

	const handleBlur = () => resetInputs();

	return (
		<div className="navbar animate__animated animate__fadeIn">
			<Link className="link" to="/">
				HOME
			</Link>
			<form onSubmit={handleSubmit}>
				<input
					autoComplete="off"
					className="input"
					name="searchInput"
					onBlur={handleBlur}
					onChange={handleInputChange}
					placeholder="SEARCH"
					value={searchInput}
				/>
			</form>
			{uid ? (
				<Link
					className="link"
					to={`/profile/${uid}`}
				>
					PROFILE
				</Link>
			) : (
				<Link
					className="link"
					to="/login"
				>
					LOGIN
				</Link>
			)}

			<button className="float" type="button">
				<i className="fa-solid fa-arrow-up"></i>
			</button>
		</div>
	);
};
