import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCwGf_7Bo5XkOJ16qnv7hdOJM_5GsoQx6M",
	authDomain: "counting-on-you-87316.firebaseapp.com",
	databaseURL: "https://counting-on-you-87316.firebaseio.com",
	projectId: "counting-on-you-87316",
	storageBucket: "counting-on-you-87316.appspot.com",
	messagingSenderId: "51926325505"
};

firebase.initializeApp(config);

export default firebase;