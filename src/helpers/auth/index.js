import init from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

init();
const auth = getAuth();

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return error;
    });
