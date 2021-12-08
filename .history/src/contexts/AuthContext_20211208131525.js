import React from 'react'

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    )
}

export default AuthProvider
