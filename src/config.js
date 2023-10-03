import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
	apiKey: 'AIzaSyAbBStMVGjlfdxeTPOfMnoR11no5BmlNIw',
	authDomain: 'xerocode-5e918.firebaseapp.com',
	projectId: 'xerocode-5e918',
	storageBucket: 'xerocode-5e918.appspot.com',
	messagingSenderId: '581782196339',
	appId: '1:581782196339:web:74e06d9839b32ca7515a06',
	measurementId: 'G-LEV5V4Y2NP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
