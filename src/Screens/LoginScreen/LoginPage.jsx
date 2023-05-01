import { View,Text,SafeAreaView,Image,Button } from 'react-native';
import { useState,useEffect,useReducer,useContext } from 'react';
import tw from 'twrnc';

const LoginScreen = ({navigation})=>{





    return (
        <SafeAreaView style={tw`flex-1 bg-red-300 justify-center items-center`}>
            <View style={tw`p-10`}>
                <Image source={require('../../../assets/firebase.png')} style={tw`w-60 h-60 mb-6`}/>
                <Button title="Login Here" color="#faae2b" onPress={()=>navigation.navigate('Login Form')}  style={tw`p-10`}/>
            </View>
        </SafeAreaView>
    )
}



export default LoginScreen;