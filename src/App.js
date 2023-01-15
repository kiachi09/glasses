import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signin" element={<SignIn />} />
				<Route path="signup" element={<CreateAccount />} />
				<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
		</AuthContextProvider>
	);
}


export default App;
