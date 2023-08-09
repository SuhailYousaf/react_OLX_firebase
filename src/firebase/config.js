import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiU1b5ZtR2XBCYq2McJs5F3jxpB134rXs",
  authDomain: "olx-clone-1f4bf.firebaseapp.com",
  projectId: "olx-clone-1f4bf",
  storageBucket: "olx-clone-1f4bf.appspot.com",
  messagingSenderId: "1049848673327",
  appId: "1:1049848673327:web:cf4314661f62ca0df742da",
  measurementId: "G-T0PZ5BJG78"
};
 

export default  firebase.initializeApp(firebaseConfig)