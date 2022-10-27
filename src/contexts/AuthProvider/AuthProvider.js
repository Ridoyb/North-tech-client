import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext= createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin=(provider) =>{
        return signInWithPopup(auth,provider);
    }

    const signInWithGithub= (githubProvider)=>{
        signInWithPopup(auth, githubProvider)

    }


    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=> {
            unSubscribe();
        }
    }, [])

    const authInfo= {user,providerLogin,signInWithGithub,logOut, createUser, signIn, loading, updateUserProfile, verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;