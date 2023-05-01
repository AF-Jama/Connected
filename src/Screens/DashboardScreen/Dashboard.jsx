import React,{useState,useEffect,useContext} from "react";
import { View,Text,SafeAreaView,Button } from 'react-native';
import useUser from "../../CustomHooks/UseUser";
import auth from '@react-native-firebase/auth';
import db from "../../Constants/firebase-config";
import firestore from '@react-native-firebase/firestore';
import tw from 'twrnc';

const DashboardScreen = ({navigation,route})=>{
    const { userState } = useUser();

    // useEffect(()=>{
    //     let getData = async ()=>{
    //         getColl = db('')
    //     }
    // })

    // console.log(userState);

    const onPresss = async ()=>{
        const userDocument = await firestore().collection('users').doc("UWpsrKC5CqbD7jdrK9Qy").get();

        console.log(userDocument);
    }



    return (
        <SafeAreaView style={tw`flex-1 bg-red-500`}>
            {/* <Text>{email}</Text> */}
            <Button title="Logout" onPress={()=>auth().signOut()}/>
            <Button title="FIREBASE" onPress={onPresss}/>
            <Button title="Profile" onPress={()=>navigation.navigate("Profile")}/> 
        </SafeAreaView>
    )
}




export default DashboardScreen;