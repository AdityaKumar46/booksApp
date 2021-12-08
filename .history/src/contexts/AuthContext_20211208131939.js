import React, {useContext, useState} from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState();

    const value={
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )
}

export default AuthProvider
