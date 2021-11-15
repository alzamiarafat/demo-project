import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function Auth({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password) {
        return auth.createWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unAuthenticUser = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });
        return unAuthenticUser
    }, [])

    const value = {
        currentUser,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

