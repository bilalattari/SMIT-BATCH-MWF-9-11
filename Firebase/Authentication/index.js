import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
    , onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import {
    getFirestore, getDocs, doc,
    collection, addDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

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

//initialize
const db = getFirestore(app);
const todosCollectionRef = collection(db, 'todos')

const registerForm = document.getElementById('register-form')
const loginForm = document.getElementById('login-form')
const loader = document.getElementById('loader-div')
const userDiv = document.getElementById('user-info')
const auhDiv = document.getElementById('auth')
const logout = document.getElementById('logout')
const userEmail = document.getElementById('user-email')
const addInfo = document.getElementById('addInfo')
const todoInput = document.getElementById('todo_input')
const todosContainer = document.getElementById('todos_container')

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
        getTodos()
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

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signedout')
    }).catch((error) => {
        // An error happened.
        console.log('signedout', error)

    });
})


//DB Section--->

addInfo.addEventListener('click', async () => {
    if (!todoInput.value) return alert('Please add todo')
    try {
        const docAdded = await addDoc(todosCollectionRef, {
            todo: todoInput.value
        });
        todoInput.value = ''
        getTodos()
        console.log("Document written with ID: ", docAdded);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})

async function getTodos() {
    todosContainer.innerHTML = null
    const querySnapshot = await getDocs(todosCollectionRef);
    querySnapshot.forEach((todoDoc) => {
        const todoObj = todoDoc.data()
        const div = document.createElement('div')
        div.className = 'todo-div'
        const span = document.createElement('span')
        span.innerText = todoObj.todo
        const button = document.createElement('button')
        button.innerText = 'Delete'
        button.id = todoDoc.id

        button.addEventListener('click', async function () {
            console.log(this)

            const docRef = doc(db, 'todos', this.id)
            console.log(docRef)
            await deleteDoc(docRef)
            getTodos()
        })

        div.appendChild(span)
        div.appendChild(button)

        todosContainer.appendChild(div)

    });
}


//1. getFirestore  // to initialize firestore, 
//2. getDocs,  // to get all the documents in the particular collection 
//3. doc,   // to create the reference of the single document
//4. collection // to create the reference of the single collection, 
//5. addDoc, // to add the document in the collection , it takes two arguments 1.collection reference 2.Document
//6. deleteDoc // to delete the single document , it takes doc reference as an argument