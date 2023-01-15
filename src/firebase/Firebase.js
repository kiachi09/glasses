import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';
export function FirebaseLogin({ email, password }) {
	signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}

export function FirebaseCreate({ email, password }) {
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}

export function FirebaseSignOut() {
	signOut(auth)
		.then(() => {
			console.log('Sign out successful');
		})
		.catch(error => {
			console.error(error);
		});
}
