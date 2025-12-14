import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const registerWithEmailAndPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const handleGoogleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authData = {
        registerWithEmailAndPassword,
        setUser,
        user,
        handleGoogleSignin,
        loading,
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;