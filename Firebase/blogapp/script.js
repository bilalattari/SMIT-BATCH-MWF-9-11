import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'

import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  getDoc,
  query, where,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'

import {
  getStorage, ref, uploadBytes, getDownloadURL
} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDXfZhi0ovpjpGLuRyV5dzT7uEFSaqGHw4',
  authDomain: 'mycv-2cf47.firebaseapp.com',
  databaseURL: 'https://mycv-2cf47.firebaseio.com',
  projectId: 'mycv-2cf47',
  storageBucket: "mycv-2cf47.appspot.com",
  messagingSenderId: '987255097152',
  appId: '1:987255097152:web:2601348a7f47d999549ca5'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);

const registerForm = document.getElementById('register-form')
const blogForm = document.getElementById('blog-form')
const loginForm = document.getElementById('login-form')
const logoutBtn = document.getElementById('logout')
const authContainer = document.getElementById('authContainer')
const blogContainer = document.getElementById('blogContainer')
const blogContainerDiv = document.getElementById('blogContainerDiv')
const filterBtn = document.getElementById('filterBtn')
const userInfoForm = document.getElementById('user-info')
const user_name = document.getElementById('user_name')
const user_email = document.getElementById('user_email')
const user_number = document.getElementById('user_number')
const user_about = document.getElementById('user_about')
const user_profile_img = document.getElementById('user_profile_img')
const user_img = document.getElementById('user_img')



let userInfo;
let uid = ''


onAuthStateChanged(auth, user => {
  if (user) {
    uid = user.uid
    getUserInfo()
    if (authContainer) {
      authContainer.style.display = 'none'
      blogContainer.style.display = 'block'
      if (blogContainer) {
        getBlogs()
      }
    }
  } else {
    console.log('User is logged out')
    if (authContainer) {
      authContainer.style.display = 'block'
      blogContainer.style.display = 'none'
    }
  }
})

logoutBtn?.addEventListener('click', () => {
  signOut(auth).then(() => alert('User is logged out.'))
})

registerForm?.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)
  const userInfo = {
    fullname: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
  }
  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then(async userCredential => {
      const user = userCredential.user
      const userRef = doc(db, "users", user.uid)
      await setDoc(userRef, userInfo)
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage->', errorMessage)
    })
})

loginForm?.addEventListener('submit', e => {
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
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage user not logged in->', errorMessage)
    })
})

blogForm?.addEventListener('submit', async e => {
  e.preventDefault()

  let userLevel;
  document.getElementsByName('level').forEach((data) => {
    if (data.checked) {
      userLevel = data.value
    }
  })
  const blogInfo = {
    title: e.target[0].value,
    description: e.target[1].value,
    level: userLevel,
    user: uid
  }
  try {
    const docRef = await addDoc(collection(db, 'blogs'), blogInfo)
    console.log('Document written with ID: ', docRef.id)
    blogForm.reset()
    getBlogs()
  } catch (e) {
    console.error('Error adding document: ', e)
  }
})


async function getBlogs(q = query(collection(db, 'blogs'), where("user", "==", uid))) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return blogContainerDiv.innerHTML = null
  querySnapshot.forEach(async (blog) => {
    blogContainerDiv.innerHTML = null
    // doc.data() is never undefined for query doc snapshots
    let blogInfo = blog.data()
    const userRef = doc(db, "users", blogInfo.user)
    const userInfo = await getDoc(userRef)
    blogInfo.userInfo = userInfo.data()
    console.log('blogInfo-->', blogInfo)
    const { title, description, level, userInfo: { fullname } } = blogInfo

    const div = document.createElement('div')
    const h2 = document.createElement('h5')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const h4 = document.createElement('b')
    h2.innerText = `${fullname}`
    h3.innerText = title
    p.innerText = description
    h4.innerText = `${level}`
    div.className = 'blog'
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(h4)

    blogContainerDiv.appendChild(div)

  })
}

filterBtn?.addEventListener('click', () => {
  let filter;
  let q;
  document.getElementsByName('query').forEach((data) => {
    if (data.checked) {
      filter = data.value
    }
  })
  if (filter === 'All') {
    q = query(collection(db, 'blogs'), where("user", "==", uid))
  }
  if (filter === 'Beginner') {
    q = query(collection(db, 'blogs'), where("level", "==", "Beginner"), where("user", "==", uid))
  }
  if (filter === 'Intermediate') {
    q = query(collection(db, 'blogs'), where("level", "==", "Intermediate"), where("user", "==", uid))
  }
  if (filter === 'Expert') {
    q = query(collection(db, 'blogs'), where("level", "==", "Expert"), where("user", "==", uid))
  }
  getBlogs(q)
  console.log(filter)
  console.log(q)

})


async function getUserInfo() {
  const userDocRef = doc(db, 'users', uid)
  const user = await getDoc(userDocRef)
  userInfo = user.data()
  if (user_name) {

    user_name.value = userInfo.fullname
    user_email.value = userInfo.email
    user_about.value = userInfo.about || ''
    user_number.value = userInfo.number || ''

    if (userInfo.profileImg) {
      user_img.src = userInfo.profileImg
    }
  }
}

userInfoForm?.addEventListener('submit', async function (e) {
  e.preventDefault()
  try {
    let userInfo = {
      fullname: e.target[1].value,
      email: e.target[2].value,
      number: e.target[3].value,
      about: e.target[4].value,
    }

    console.log('userInfo-->', userInfo)

    await updateDoc(doc(db, 'users', uid), userInfo)
    alert('User info updated')
  } catch (err) {
    console.log(err)
    alert('Sorry , not updated')

  }

})

user_profile_img?.addEventListener('change', async function () {
  console.log(this.files[0])
  const profileRef = ref(storage, `users/${uid}`)
  try {
    await uploadBytes(profileRef, this.files[0]).then((snapshot) => {
      console.log('Uploaded a file!');
      getDownloadURL(profileRef)
        .then(async (url) => {
          console.log('url--->', url)
          await updateDoc(doc(db, 'users', uid), { profileImg: url })
          user_img.src = url
        })
        .catch((err) => console.log(err))
    });
  } catch (err) {
    console.log(err)
  }
})



//1. getFirestore initialize the db in your project const db = getFirestore(app)
//2. collection -> to make collection reference -> collection(db, "users" )
//3. doc -> to make document reference -> doc(db , "user" , "--id---")
//4. addDoc -> to add document to the collection and generate unique itself -> addDoc(collection(db, "users" ) , {})
//5. getDocs -> to get all documents in the collection -> getDocs(collection(db, "users"))
//6. deleteDoc -> to delete a single document under collection -> deleteDoc(doc(db, "users" , '---id---'))
//7. setDoc -> to add/update document under the collection -> setDoc(doc() , {})
//8. getDoc -> to get a single document from collection -> getDoc(doc())