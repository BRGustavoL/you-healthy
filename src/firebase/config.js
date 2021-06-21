import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHOd1usN8TgOlijuiYR10dqhPFzM55nrQ",
  authDomain: "you-healthy.firebaseapp.com",
  projectId: "you-healthy",
  storageBucket: "you-healthy.appspot.com",
  messagingSenderId: "988670427510",
  appId: "1:988670427510:web:42a840da51d64249effa57"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }