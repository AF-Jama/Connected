import React,{useState,useEffect,useContext} from "react";
import { View,Text } from 'react-native';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LoginScreen from "../Screens/LoginScreen/LoginPage";
import FeatureScreen from "../Screens/FeatureScreen/FeatureScreen";
import LoginFormScreen from "../Screens/LoginFormScreen/LoginFormScreen";
import SignupFormScreen from "../Screens/SignupFormScreen/SignupFormScreen";
import DashboardScreen from "../Screens/DashboardScreen/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "./useAuth";
import useUser from "./UseUser";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";


const AppNavigation = ()=>{
    const { user } = useAuth(); // useAuth hook which runs on initial render (on mount)
    // const { userState } = useUser(); // use user hook 
    const Stack = createNativeStackNavigator();

    console.log(user);

    if(!user){
        // triggered if user state is null
        return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name='Feature' component={FeatureScreen}/>
                <Stack.Screen name='Login Form' component={LoginFormScreen}/>
                <Stack.Screen name='Sign up' component={SignupFormScreen}/>
            </Stack.Navigator>    
        )
    }else{
        // triggered if user state evaluates to true (ie: not null)
        if(!useUser.age || !useUser.occupation){
            return (
                <Stack.Navigator>
                    <Stack.Screen name="Create Your Profile" component={AboutScreen}/>
                </Stack.Navigator>
            )
        }
        return (
            <Stack.Navigator>
                <Stack.Screen name='Your Dashboard' component={DashboardScreen} user = {user}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        )

    }
    

}



export default AppNavigation;