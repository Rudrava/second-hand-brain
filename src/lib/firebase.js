import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import toast from "react-hot-toast";

const firebaseConfig = {
    apiKey: "AIzaSyBvVBzZJbshpcuQFtoEkmMJdnHCqvoOHcs",
    authDomain: "second-hand-brain.firebaseapp.com",
    projectId: "second-hand-brain",
    storageBucket: "second-hand-brain.appspot.com",
    messagingSenderId: "719543855064",
    appId: "1:719543855064:web:c5f6ef21097f7e3eb6b4ad",
    measurementId: "G-VHWST39ZGZ",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const messagesRef = db.collection("messages");

export const signIn = {
    signInWithGoogle: () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(
            (err) => toast.error(err.message)
        );
    },
    signInWithGithub: () => {
        auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).catch(
            (err) => toast.error(err.message)
        );
    },
    signUpWithEmail: (values) => {
        auth.createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => toast.success("Account created Successfully!"))
            .catch((err) => toast.error(err.message));
    },
    logInWithEmail: (values) => {
        auth.signInWithEmailAndPassword(values.email, values.password)
            .then((res) => console.log(res.user))
            .catch((err) => toast.error(err.message));
    },
    signOut: () => {
        auth.signOut();
    },
};

export const currTime = firebase.firestore.FieldValue.serverTimestamp();
