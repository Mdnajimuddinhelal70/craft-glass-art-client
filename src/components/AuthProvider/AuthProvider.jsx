import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase/firebse.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

const auth = getAuth(app)
export const AuthContext = createContext(null)


// adding auth provider
const googleProvider = new GoogleAuthProvider()
// const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        setUser(null)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

       // google login
       const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
        
             if(user){
             setUser(user)
             }
             setLoading(false)
         });
         return () => {
             unSubscribe()
         }
         }, [])
     

    const userInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;