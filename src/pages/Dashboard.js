import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const { logOut, user } = UserAuth();
	const handleSignOut = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (e) {
			console.log("error is ", e.message);
		}
	};
	return (
		<div>
			<h1>Account</h1>
			<div>
				<p>Welcome, {user?.displayName}</p>
			</div>
			<button onSubmit={handleSignOut}> Log Out </button>
		</div>
	);
};

export default Dashboard;
