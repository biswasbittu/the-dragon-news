import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const user ={displayName:'Muri Khan'}

const authInfo={
    user
}

const AuthProviders = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;