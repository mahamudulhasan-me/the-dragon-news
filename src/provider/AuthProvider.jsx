import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(auth);
const githubProvider = new GithubAuthProvider(auth);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  //   handle signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  //   handle signInWithGitHub
  const signInWithGithub = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProvider);
  };
  // create new user by email and password
  const createNewUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle signInWithEmailAndPassword
  const logInWithEmailAndPassword = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update user profile
  const updateUserProfile = (user, displayName, photoUrl) => {
    const profileUpdate = updateProfile(user, {
      displayName: displayName,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch(() => {});
    return profileUpdate;
  };
  //handle signOut
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    createNewUser,
    logInWithEmailAndPassword,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
