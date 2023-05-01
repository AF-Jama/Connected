import React,{useState,useEffect,useContext} from "react";
import auth from '@react-native-firebase/auth';
import authContext from "../Contexts/AuthContext/AuthContext";



const useAuth = ()=>{
    // const [initializing, setInitializing] = useState(true); // setting initialising state 
    // const [user, setUser] = useState(null); // setting user state


    // function onAuthStateChanged(user) {
    //     if(!user){
    //         // triggered if user evaluates to false
    //         setUser(null);
    //         setInitializing(false)
    //         return;
    //     }

    //     setUser(user);
    //     setInitializing(false);
    //     return;

    //   }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    //   }, []); // useEffect triggered on initial render (on mount)

    //   return {user}; // returns user state

    return useContext(authContext);

}



export default useAuth;