import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDmFfweQXoMu93aZIoMMT3jhsL8lYXZx7c",
	authDomain: "meetus-e207d.firebaseapp.com",
	projectId: "meetus-e207d",
	storageBucket: "meetus-e207d.appspot.com",
	messagingSenderId: "706165589466",
	appId: "1:706165589466:web:fc75ecb80d115107c66ce3",
	measurementId: "G-325J2RTD89",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
