import React,{useState,useEffect,useContext,useReducer} from 'react';
import userContext from './UserContext';
import useAuth from '../../CustomHooks/useAuth';
import auth from '@react-native-firebase/auth';
import db from "../../Constants/firebase-config";
import firestore from '@react-native-firebase/firestore';



const UserContextProvider = ({children})=>{

    const { user } = useAuth(); // use auth hook

    console.log("USER EMAIL:");
    console.log(user?.email);


    const UserReducer = (state,action)=>{
        switch (action.type) {
            // case "UPDATE_AGE":
            //     return {
            //         ...state,
            //         ...action.payload
            //     }

            // case "UPDATE_OCCUPATION":
            //     return {
            //         ...state,
            //         ...action.payload
            //     }

            case "UPDATE":
                return {
                    ...state,
                    ...action.payload
                }

            case "CLEAR":
                return {
                    name:"",
                    email:"",
                    age:"",
                    occupation:"",
                    uuid:""                    
                }
        
            default:
                break;
        }
    }

    const [userState,dispatch] = useReducer(UserReducer,{
        name:"",
        email:"",
        age:"",
        occupation:"",
        uuid:"",
        accountCreationDate:null
    })

    // console.log(userState);

    function capitalize(str) {
        const lowerCaseString = str.toLowerCase(), // convert string to lower case  
              firstLetter = str.charAt(0).toUpperCase(), // upper case the first character
              strWithoutFirstChar = lowerCaseString.slice(1); // remove first character from lower case string 
      
        return firstLetter + strWithoutFirstChar; 
      
    }


    useEffect(()=>{
        const getUser = async ()=>{
            try{
                let userData = await firestore().collection('users')
                .orderBy('email')
                .startAt(capitalize(user?.email))
                .endAt(user?.email.toLowerCase() + '\uf8ff')
                .get()

                const uuid = {
                    uuid:userData.docs[0]._ref._documentPath._parts[1]
                } // creating uuid object

                dispatch({type:"UPDATE",payload:{...userData.docs[0]._data,...uuid}});
                return;
            }catch(error){
                console.log("ERROR IS ");
                console.log(error);
                dispatch({type:"CLEAR"});
            }
        }

        getUser();
    },[user?.email]) // use effect runs on initial render (on mount) 





    return (
        <userContext.Provider value={{userState}}>
            {children}
        </userContext.Provider>
    )
}



export default UserContextProvider;