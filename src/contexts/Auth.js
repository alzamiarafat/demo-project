import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const AuthContext = createContext({
    currentUser: null,
    signUp: () => Promise,
    login: () => Promise,
    logout: () => Promise,
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unAthenticUser = onAuthStateChanged(auth, user=>{
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

    const value = {
        currentUser,
        signUp,
        login,
        logout
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

