import { useState,useEffect,useContext,useReducer } from "react";
import auth from '@react-native-firebase/auth'
import authContext from "./AuthContext";


const AuthContextProvider = ({children})=>{
    const [initializing, setInitializing] = useState(true); // setting initialising state 
    const [user, setUser] = useState(null); // setting user state

    function onAuthStateChanged(user) {
        if(!user){
            // triggered if user evaluates to false
            setUser(null);
            setInitializing(false)
            return;
        }

        setUser(user);
        setInitializing(false);
        return;

      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []); // useEffect triggered on initial render (on mount)

      const onLogout = async ()=>{
        await auth().signOut();
      }


    return (
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}



export default AuthContextProvider;