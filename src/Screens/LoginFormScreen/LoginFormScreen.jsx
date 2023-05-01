import { View,Text,SafeAreaView,TextInput,Image, StyleSheet } from 'react-native';
import { useState,useEffect,useReducer } from 'react';
import { app } from "../../Constants/firebase-config";
import auth from '@react-native-firebase/auth';
import tw from 'twrnc';
import { Button } from '@rneui/base';

const LoginFormScreen = ({navigation})=>{
    const [errorState,setErrorState] = useState(null); // set error state 
    const [successState,setSuccessState] = useState(null); // set success state

    const LoginReducer = (state,action)=>{
        switch(action.type){

            case "ON_EMAIL_CHANGE":
                return {...state,...action.payload}

            case "ON_PASSWORD_CHANGE":
                return {...state,...action.payload}

            default:
                return {...state}
        }
    }

    // .

    const [state,dispatch] = useReducer(LoginReducer,{
        email:"",
        password:""
    })

    const onLoginPress = ()=>{
        const { email,password } = state; // destructures state object

        console.log("HERE");

        if(!email || !password){
            setErrorState("Email and password must not be empty");
            return;
        }

        auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            setSuccessState("Successful Login");
            setErrorState(null);
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log("auth/email-already-in-use");
                setErrorState("That email address is already in use!");
                setSuccessState(null);
                return;
            }
        
            if (error.code === 'auth/invalid-email') {
                console.log("auth/invalid-email")
                setErrorState("That email address is invalid");
                setSuccessState(null);
                return;
            }
          });
    }

    console.log(state);


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
                    <TextInput placeholder='Email' onChangeText={(text)=>dispatch({type:"ON_EMAIL_CHANGE",payload:{email:text}})} style={tw`bg-grey p-2 mb-2`} allowFontScaling={true}/>
                    <TextInput placeholder='Password' onChangeText={(text)=>dispatch({type:"ON_PASSWORD_CHANGE",payload:{password:text}})} style={tw`bg-white p-2 mb-2`}/>
                    <Button title="Login" onPress={onLoginPress} style={tw`bg-green-400`}/>
                </View>
                <Text style={tw`text-center mt-2 text-base`} onPress={()=>navigation.navigate("Sign up")}>Dont have an account? Sign up here</Text>
                {successState && successState}
                {errorState && errorState}
            </View>

            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={[styles.serviceProviderBtn,tw`p-6 rounded-md text-sm`]} onPress={()=>console.log("SUCCESS")}>Use service providers</Text>
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



export default LoginFormScreen;