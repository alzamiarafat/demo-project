import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from '@firebase/auth';

const AuthContext = createContext({
    currentUser: null,
    signUp: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    signInGoogle: () => Promise,
    signInFB: () => Promise,
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unAthenticUser = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })
        return () => {
            unAthenticUser();
        }
    }, []);

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth);
    }

    function signInGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }

    function signInFB() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);

    }

    const value = {
        currentUser,
        signUp,
        login,
        logout,
        signInGoogle,
        signInFB
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}



// export function Auth({ children }) {
//     const [currentUser, setCurrentUser] = useState()

//     function signUp(email, password) {
//         return auth.createWithEmailAndPassword(email, password)
//     }

//     useEffect(() => {
//         const unAuthenticUser = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//         });
//         return unAuthenticUser
//     }, [])

//     const value = {
//         currentUser,
//         signUp
//     }
//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

