import React, { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import auth from "../../../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const provider = new GoogleAuthProvider();
  const FBprovider = new FacebookAuthProvider();
  const GitHubprovider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOutUser
  const signOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  // signInWithFacebook
  const signInWithFacebook = () => {
    return signInWithPopup(auth, FBprovider);
  };

  // signInWithGithub
  const signInWithGithub = () => {
    return signInWithPopup(auth, GitHubprovider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
