import { useContext, createContext, useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({ prompt: 'select_account' });
		// signInWithPopup(auth, provider);
		signInWithRedirect(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<AuthContext.Provider
			value={{ googleSignIn, logOut, user, createUser, signIn }}
		>
			{children}
		</AuthContext.Provider>
	);
};
export const UserAuth = () => {
	return useContext(AuthContext);
};
