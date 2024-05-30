import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    const logOut = () => {
        return signOut(auth)
    }


    const updateUserProfile = (name, photo) => {

      return  updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
        })


    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('current-user', currentUser)
        })

        return () => unSubscribe;
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;