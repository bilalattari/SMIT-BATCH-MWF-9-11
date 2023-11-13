import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
    , onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDXfZhi0ovpjpGLuRyV5dzT7uEFSaqGHw4",
    authDomain: "mycv-2cf47.firebaseapp.com",
    databaseURL: "https://mycv-2cf47.firebaseio.com",
    projectId: "mycv-2cf47",
    storageBucket: "mycv-2cf47.appspot.com",
    messagingSenderId: "987255097152",
    appId: "1:987255097152:web:2601348a7f47d999549ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById('register-form')
const loginForm = document.getElementById('login-form')
const loader = document.getElementById('loader-div')
const userDiv = document.getElementById('user-info')
const auhDiv = document.getElementById('auth')
const logout = document.getElementById('logout')
const userEmail = document.getElementById('user-email')



onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user is logged in')

        loader.style.display = 'none'
        auhDiv.style.display = 'none'
        userDiv.style.display = 'block'
        userEmail.innerText = `User email is ${user.email} and User uid is ${uid}` 
        // ...
    } else {
        // User is signed out
        loader.style.display = 'none'
        auhDiv.style.display = 'block'
        userDiv.style.display = 'none'

        // ...
    }
});



registerForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const email = e.target[0].value
    const password = e.target[1].value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('User is not register because of ' + errorMessage)
        });
})



loginForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const email = e.target[0].value
    const password = e.target[1].value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href = '/'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('User is not logged in because of ' + errorMessage)
        });
})

console.log(logout)

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signedout')
      }).catch((error) => {
        // An error happened.
        console.log('signedout' , error)

      });
})