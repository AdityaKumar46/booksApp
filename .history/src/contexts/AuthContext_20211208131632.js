import React, {useContext} from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    )
}

export default AuthProvider
