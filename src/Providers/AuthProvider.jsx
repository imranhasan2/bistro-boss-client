import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import usePublicAxios from "../Hooks/usePublicAxios";




export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {


    const axiosPublic = usePublicAxios()



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const logOut = async () => {
        setLoading(true)
        localStorage.removeItem('access-token')
        await signOut(auth);
        setUser(null);
        setLoading(false);
    }

    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
      
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })


    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })

        return () => unSubscribe;
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;