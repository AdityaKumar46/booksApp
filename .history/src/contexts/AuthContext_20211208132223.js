import React, {useContext, useState} from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const value={
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )
}

export default AuthProvider
