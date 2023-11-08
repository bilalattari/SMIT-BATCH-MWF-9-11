import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js'
import { getAuth  ,createUserWithEmailAndPassword,signInWithEmailAndPassword    } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDXfZhi0ovpjpGLuRyV5dzT7uEFSaqGHw4',
  authDomain: 'mycv-2cf47.firebaseapp.com',
  databaseURL: 'https://mycv-2cf47.firebaseio.com',
  projectId: 'mycv-2cf47',
  storageBucket: 'mycv-2cf47.appspot.com',
  messagingSenderId: '987255097152',
  appId: '1:987255097152:web:2601348a7f47d999549ca5'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const registerForm = document.getElementById('register-form')
const loginForm = document.getElementById('login-form')

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
      // Signed up
      const user = userCredential.user
      console.log('user->', user)
      // ...
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage->', errorMessage)

      // ..
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
