import { View,Text,SafeAreaView,Image,TextInput, StyleSheet,KeyboardAvoidingView } from "react-native";
import { useState,useEffect,useContext,useReducer } from 'react';
import { app } from "../../Constants/firebase-config";
import auth from '@react-native-firebase/auth';
import { emailPattern,passwordPattern,usernamePattern } from "../../Constants/constants";
import firestore from '@react-native-firebase/firestore';
import tw from 'twrnc';
import { Button } from '@rneui/base';


const SignupFormScreen = ({navigation})=>{
    const [errorState,setErrorState] = useState(null);
    const [succesState,setSuccessState] = useState(null);

    const LoginReducer = (state,action)=>{
        switch(action.type){
            case "ON_USERNAME_CHANGE":
                var re = new RegExp(usernamePattern);
                re = re.test(action.payload.name);
                if(!re) return {...state};
                return {...state,...action.payload}

            case "ON_EMAIL_CHANGE":
                var re = new RegExp(emailPattern);
                re = re.test(action.payload.email);
                if(!re) return {...state};
                return {...state,...action.payload}

            case "ON_PASSWORD_CHANGE":
                var re = new RegExp(passwordPattern);
                re = re.test(action.payload.password);
                if(!re) return {...state};
                return {...state,...action.payload}

            default:
                return {...state}
        }
    }

    const [state,dispatch] = useReducer(LoginReducer,{
        name:"",
        email:"",
        password:""
    })

    console.log(state);

    const createUser = async (displayName,email)=>{
        let userCol = firestore().collection("users") // returnns users collection

        let userAdd = await userCol.add({
            name: displayName,
            email:email,
            occupation:null,
            age:null,
            accountCreationDate: Date()
        })


        return userAdd; // returns firebase document promise value
    }

    const onSignupClick = ()=>{
        const { name,email,password } = state; // destructure state object

        if(!name || !email || !password){
            setErrorState("Unable to create account");
            return;
        }; // triggered if name,email or password evaluates to false

        auth().createUserWithEmailAndPassword(email,password)
        .then((res) => {
            return createUser(name,email)
            // setSuccessState("User account created & signed in");
            // setErrorState(null);
          })
          .then((res)=>{
            setSuccessState("User account created & signed in");
            setErrorState(null);
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                setErrorState("That email address is already in use!");
                setSuccessState(null);
                return;
            }
        
            if (error.code === 'auth/invalid-email') {
                setErrorState("That email address is invalid");
                setSuccessState(null);
                return;
            }else{
                setErrorState("Cannot create user at this moment");
                setSuccessState(null);
                return;
            }
          });


    }


    useEffect(()=>{
        if(errorState){
            setTimeout(()=>{
                setErrorState(null);
            },3000)
        }

        if(setSuccessState){
            setTimeout(()=>{
                setSuccessState(null);
            },3000)
        }
    },[errorState,setSuccessState])




    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <View style={tw`h-3/4 p-6`}>
                <Image source={require('../../../assets/firebase.png')} style={tw`h-25 w-25 mr-auto ml-auto mb-2`}/>
                <View>
                    <TextInput placeholder='Username' onChangeText={(text)=>dispatch({type:"ON_USERNAME_CHANGE",payload:{name:text}})} style={tw`bg-grey p-2 mb-2`} allowFontScaling={true}/>
                    <TextInput placeholder='Email' onChangeText={(text)=>dispatch({type:"ON_EMAIL_CHANGE",payload:{email:text}})} style={tw`bg-white p-2 mb-2`}/>
                    <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text)=>dispatch({type:"ON_PASSWORD_CHANGE",payload:{password:text}})} style={tw`bg-white p-2 mb-2`}/>
                    <Button title="Sign up" onPress={onSignupClick} style={tw`bg-green-400`}/>
                </View>
                {errorState && <Text style={tw`text-base mt-1`}>{errorState}</Text>}
            </View>

            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={[styles.serviceProviderBtn,tw`p-6 rounded-md text-sm -z-30`]}>Use service providers</Text>
            </View>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    serviceProviderBtn:{
        backgroundColor:"#faae2b",
        color:"#00473e"
    },
})



export default SignupFormScreen;
