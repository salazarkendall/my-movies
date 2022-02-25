import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { LoginScreen } from '../components/LoginScreen';
import { MovieDetailScreen } from '../components/MovieDetailScreen';
import { ResultsScreen } from '../components/ResultsScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<HomeScreen />} />
				<Route path="/search" element={<ResultsScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/movie/:id" element={<MovieDetailScreen />} />
				<Route path="/*" element={<HomeScreen />} />
			</Routes>
		</Router>
	);
};
