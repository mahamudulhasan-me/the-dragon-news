import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(auth);
const githubProvider = new GithubAuthProvider(auth);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  //   handle signInWithGoogle
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   handle signInWithGitHub
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // create new user by email and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle signInWithEmailAndPassword
  const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle signOut
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return unsubscribe;
  }, []);
  const authInfo = {
    user,
    signInWithGoogle,
    signInWithGithub,
    createNewUser,
    logInWithEmailAndPassword,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
