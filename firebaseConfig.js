import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_8BNMkLakwaRZIkW0otQCtLw4B2oFGQ",
  authDomain: "bizarro-steam.firebaseapp.com",
  projectId: "bizarro-steam",
  storageBucket: "bizarro-steam.appspot.com",
  messagingSenderId: "909242830074",
  appId: "1:909242830074:web:5e847a1b4bb4d99a094d43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);