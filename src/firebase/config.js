import firebase from "firebase";
import "firebase/auth"


const firebaseConfig = {
	apiKey: "AIzaSyBmvhVAevPCFIVkWSXyg8x_LR7KlSVkd54",
	authDomain: "register7-148e0.firebaseapp.com",
	projectId: "register7-148e0",
	storageBucket: "register7-148e0.appspot.com",
	messagingSenderId: "597252551312",
	appId: "1:597252551312:web:e24275bc676bac2f941e15",
	measurementId: "G-J5KNGFW7Y9"
};


firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
export { projectAuth }

