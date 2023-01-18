import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h5>
				{user?.displayName ? (
					<button onClick={handleSignOut}>Log Out</button>
				) : (
					<Link to="/signin">Sign in</Link>
				)}
			</h5>
		</div>
	);
};

export default Navbar;
