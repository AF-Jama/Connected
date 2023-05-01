import { View,Text,SafeAreaView,Button,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useState,useEffect,useContext,useReducer } from 'react';
import auth from '@react-native-firebase/auth'
import tw from 'twrnc';

const ProfileScreen = ({navigation,route})=>{



    return(
        <SafeAreaView style={tw`flex-1 bg-primary`}>
            <View style={tw`p-10`} >
                <View style={tw`flex-row justify-evenly items-center mb-1`}>
                    <Image source={require('../../../assets/person.jpg')} style={tw`w-25 h-25 rounded-full`}/>

                    <View>
                        <Text style={[style.profileText,tw`text-base mt-2`]}>James Manning</Text>
                        <Text style={[style.locationText,tw`text-base`]}>Location</Text>
                    </View>
                </View>
                <View style={tw`relative mt-2`}>
                    <Text style={[style.profileText,tw`text-base mt-2`]}>Russian</Text>

                    <View style={tw`absolute -left-8 top-2`}>
                        <Image source={require('../../../assets/passport.png')} style={tw`w-7 h-7`}/>
                    </View>
                </View>

                <View style={tw`relative mt-2`}>
                    <Text style={[style.profileText,tw`text-base mt-2`]}>JamesManning01@gmail.com</Text>

                    <View style={tw`absolute -left-8 top-2`}>
                        <Image source={require('../../../assets/mail.png')} style={tw`w-7 h-7`}/>
                    </View>
                </View>
            </View>

            <View style={tw`flex-row`}>
                    <View style={tw`w-1/2 p-5 border border-slant-500`}>
                        <Text style={tw`text-lg text-center`}>200</Text>
                        <Text style={tw`text-base font-800 text-center`}>Friends</Text>
                    </View>

                    <View style={tw`w-1/2 p-5 ml-0 border border-slant-500`}>
                    <Text style={tw`text-lg text-center`}>200</Text>
                        <Text style={tw`text-base font-800 text-center`}>Messages</Text>
                    </View>
            </View>

            <View style={tw`flex-1 justify-center items-center`}>
                <TouchableOpacity onPress={()=>auth().signOut()}>
                    <View style={[style.logoutbtn,tw`px-10 py-2 rounded relative`]}>
                        <Text style={tw`text-base ml-1`}>Logout</Text>

                        <View style={tw`absolute left-2 top-2 `}>
                            <Image source={require('../../../assets/power.png')} style={tw`h-6 w-6`}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    profileText:{
        color:"#475d5b"
    },
    locationText:{
        color:"#000"
    },
    logoutbtn:{
        backgroundColor:"#faae2b"
    }
})


export default ProfileScreen;