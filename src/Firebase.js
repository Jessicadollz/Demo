import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCgzypin6En8NDuJ-Lv6XeauChkt9DDgoU",
    authDomain: "temp-a5daa.firebaseapp.com",
    projectId: "temp-a5daa",
    storageBucket: "temp-a5daa.appspot.com",
    messagingSenderId: "995197684580",
    appId: "1:995197684580:web:93ae75ca9d4986e46d4871"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };