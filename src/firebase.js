import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC-64wtNPpGh0_Uoog8Mna6sykv8FBZvkM",
    authDomain: "where-s-waldo-b96e2.firebaseapp.com",
    projectId: "where-s-waldo-b96e2",
    storageBucket: "where-s-waldo-b96e2.appspot.com",
    messagingSenderId: "969118231312",
    appId: "1:969118231312:web:f7d5291523714ff412d395",
   
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const storage = getStorage(app)
  export {db}
  export {storage}