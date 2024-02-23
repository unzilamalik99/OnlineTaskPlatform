import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification, // Correct import here
} from "firebase/auth"; // Import from the auth module
import { addDoc, collection } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db } from "./FirebaseConfig";

const auth = getAuth();

export const doCreateUserWithEmailAndPassword = async (userData) => {
  try {
    console.log("Before creating user");

    const userCredential = await createUser(
      auth,
      userData.email,
      userData.password
    );

    console.log("After creating user");

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: userData.name,
    });

    await addDoc(collection(db, "userProfiles"), {
      uid: user.uid,
      name: userData.name,
      email: userData.email,
    });

    console.log("Profile updated and data stored in the database");

    return user;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const doSignWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    // Handle errors here
    console.error("Error signing out:", error.message);
    throw error;
  }
};

export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    // Handle errors here
    console.error("Error sending password reset email:", error.message);
    throw error;
  }
};

export const doPasswordChange = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    // Handle errors here
    console.error("Error updating password:", error.message);
    throw error;
  }
};

export const doSendEmailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    // Handle errors here
    console.error("Error sending email verification:", error.message);
    throw error;
  }
};
