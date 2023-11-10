import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'

import {
  getFirestore,
  collection,
  addDoc
} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDXfZhi0ovpjpGLuRyV5dzT7uEFSaqGHw4',
  authDomain: 'mycv-2cf47.firebaseapp.com',
  databaseURL: 'https://mycv-2cf47.firebaseio.com',
  projectId: 'mycv-2cf47',
  storageBucket: 'mycv-2cf    47.appspot.com',
  messagingSenderId: '987255097152',
  appId: '1:987255097152:web:2601348a7f47d999549ca5'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const registerForm = document.getElementById('register-form')
const blogForm = document.getElementById('blog-form')
const loginForm = document.getElementById('login-form')
const logoutBtn = document.getElementById('logout')
const authContainer = document.getElementById('authContainer')
const blogContainer = document.getElementById('blogContainer')
let uid = ''

onAuthStateChanged(auth, user => {
  if (user) {
    uid = user.uid
    authContainer.style.display = 'none'
    blogContainer.style.display = 'block'

  } else {
    console.log('User is logged out')
    authContainer.style.display = 'block'
    blogContainer.style.display = 'none'
  }
})

logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => alert('User is logged out.'))
})

registerForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)
  const userInfo = {
    fullname: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
  }
  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then(userCredential => {
      const user = userCredential.user
      console.log('user->', user)
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage->', errorMessage)
    })
})

loginForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)
  const userInfo = {
    email: e.target[0].value,
    password: e.target[1].value
  }
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user
      console.log('user logged in->', user)
      // ...
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage user not logged in->', errorMessage)

      // ..
    })
})

blogForm.addEventListener('submit', async e => {
  e.preventDefault()
  const blogInfo = {
    title: e.target[0].value,
    description: e.target[1].value,
    level: e.target[2].value,
    user: uid
  }
  try {
    const docRef = await addDoc(collection(db, 'blogs'), blogInfo)
    console.log('Document written with ID: ', docRef.id)
    alert('Document added')
  } catch (e) {
    console.error('Error adding document: ', e)
  }
})
