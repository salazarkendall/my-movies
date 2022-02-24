import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Navbar = () => {
	const navigate = useNavigate();

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
		<div className="navbar">
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
			<Link className="link" to="/movie">
				GENRES
			</Link>
			{/* <button className="button__login" type="button">
				Login
			</button> */}
		</div>
	);
};
