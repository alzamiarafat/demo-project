import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const AuthContext = createContext({
    currentUser: 'fdsfe',
    signUp: ()=> Promise
});

export default function AuthContextProvider({children}){
    const [currentUser, setsetCurrentUser] = useState(null);
    const value={
        currentUser,
        signUp
    }
    
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
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

