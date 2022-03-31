import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { LoginScreen } from '../components/LoginScreen';
import { MovieDetailScreen } from '../components/MovieDetailScreen';
import { Navbar } from '../components/ui/Navbar';
import { ProfileScreen } from '../components/ProfileScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResultsScreen } from '../components/ResultsScreen';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
	const { uid } = useSelector((state) => state.auth);
	console.log(uid);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<HomeScreen />} />
				<Route path="/search" element={<ResultsScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="/movie/:id" element={<MovieDetailScreen />} />
				<Route path="/profile/*" element={<ProfileScreen />} />
				<Route path="/*" element={<HomeScreen />} />
			</Routes>
		</Router>
	);
};
