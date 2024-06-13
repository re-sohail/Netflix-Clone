import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAUtWuAGzw_2aiCRyuC8-r9mCZ-9p6icJA",
  authDomain: "netflix-clone-6bbe6.firebaseapp.com",
  projectId: "netflix-clone-6bbe6",
  storageBucket: "netflix-clone-6bbe6.appspot.com",
  messagingSenderId: "117083102302",
  appId: "1:117083102302:web:21b3e4da993a91cbfc68cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

let signUp = async(name, email, password)=>{
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password)
        let user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

let login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

let logout = async()=>{
    signOut(auth)
}


export {auth, signUp, login, logout}