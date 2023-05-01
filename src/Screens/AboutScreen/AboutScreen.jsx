import React,{useState,useEffect,useContext,useReducer} from "react";
import { View,Text,Button,SafeAreaView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import useUser from "../../CustomHooks/UseUser";
import tw from 'twrnc';

const AboutScreen = ({navigation,route})=>{
    const { userState } = useUser(); // use User state hook

    const AboutStateReducer = (state,action)=>{
        switch(action.type){
            case "UPDATE_AGE":
                return {
                    ...state,
                    ...action.payload
                }

            case "UPDATE_OCCUPATION":
                return {
                    ...state,
                    ...action.payload
                }

            default:
                return {
                    ...state
                }
        }
    }

    console.log(userState);

    const [aboutState,dispatch] = useReducer(AboutStateReducer,{
        age:userState.age,
        occupation:userState.occupation
    })




    return (
        <SafeAreaView style={tw`flex-1 p-6 bg-red-500`}>

        </SafeAreaView>
    )
}



export default AboutScreen;