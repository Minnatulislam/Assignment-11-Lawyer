
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
  
export const AuthProvider = createContext();
const auth = getAuth(app);

 const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
  
       const [user, setUser] = useState({})
       const [loading, setLoading] = useState(true)

       const handlarSignup = (email, password) =>{
                setLoading(true)
              return  createUserWithEmailAndPassword(auth,email,password)
       }

       const  UserProfile = (profile) =>{
          setLoading(true)
              return updateProfile(auth.currentUser, profile)
       }

       const UserLogin = (email, password)=>{
          setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
       }

         
         const handlarGoogle = () =>{
          setLoading(true)
              return signInWithPopup(auth, googleProvider)
         }
         
       const ligninOut = ()=>{
          setLoading(true)
           return signOut(auth)
       }

         useEffect( ()=>{

               const unSubribe = onAuthStateChanged(auth , (remaingUser)=>{

                     setUser(remaingUser)
                     setLoading(false)
               })

               return ()=> unSubribe()
         },[])

         const authInfo = {
            user,
            loading,
            handlarSignup,
            UserProfile,
            UserLogin,
            handlarGoogle,
            ligninOut
           
          }

    return (
       <AuthProvider.Provider value={authInfo}>
            {children}
       </AuthProvider.Provider>
    );
};

export default ContextProvider;