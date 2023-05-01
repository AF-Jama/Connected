import { View,Text,SafeAreaView,TouchableOpacity,Pressable,Button,Image, StyleSheet,FlatList } from "react-native";
import { useState,useEffect,useReducer,useContext } from "react";
import { initializeApp } from "@firebase/app";
import { getFirestore,collection,getDocs } from "@firebase/firestore";
import db from "../../Constants/firebase-config";
import authContext from "../../Contexts/AuthContext/AuthContext";
import { Header } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

const HomeScreen = ({ navigation })=>{

    const { displayName,age,occupation,isAuthenticated,onLogin,onLogout } = useContext(authContext);


    const features = [
        {
        "featureImage":require('../../../assets/chat.png'),"test":"123",
        "featureText":"Create Friendships and chat as long as you want",
        "headerText":"Messaging"
        },
        {
        "featureImage":require('../../../assets/facetime.png'),
        "test":"123",
        "featureText":"Video call friends and chat away",
        "headerText":"Video call"
        },
        {
        "featureImage":require('../../../assets/ai.png'),
        "test":"13234",
        "featureText":"Create Friendships and chat as long as you want",
        "headerText":"Messaging"
        }
    ]


    // useEffect(()=>{
    //     const fetch = async ()=>{
    //         const usersCol = collection(db,"users");
    //         const citySnapshot = await getDoc(usersCol);

    //         console.log(citySnapshot);
    //     }
    // })

    const fetchUsers = async ()=>{
        try{            
            const userdb = collection(db,"users"); // return users collection

            const usersSnapshot = await getDocs(userdb);
    
            const users = usersSnapshot.docs.map(doc => doc.data());
    
    
            console.log(users);
        }catch(error){
            console.log("HEREEE");
            console.log(`Error is ${error}`);
        }
    }



    return (
        <SafeAreaView style={tw`h-full flex-col bg-#FFFFFF`} >
            <View style={tw`flex-row items-center justify-between px-2 pt-1`}>
                {/* <Image style={tw`w-15 h-15 rounded-full`} source={require('../../../assets/person.jpg')}/> */}
                <Image style={tw`w-15 h-15`}  source={require('../../../assets/firebase.png')} resizeMode="contain"/>
                {isAuthenticated?<Button title="Logout" color="red" onPress={onLogout}/>:<Button title="Login" color="#faae2b" onPress={()=>navigation.navigate('Login')}/>}
            </View>

            <View style={tw`flex-1`}>
                <View style={tw`h-1/2 mt-6 p-6`}>
                    <Text style={tw`text-2xl font-bold font-sans text-neutral-900`}>Meet Like Minded People From Around The World, <Text style={tw`text-red-500`}>Without the burdern of tranditional of media</Text></Text>
                    <Button title="Explore More" color="#ff6e6c" style={tw`p-100`}/>

                    <View>
                        <Text style={tw`text-center text-neutral-900 text-xl my-4`}>Features</Text>

                        <View style={tw`mt-2`}>
                            <FlatList data={features} horizontal={true} contentContainerStyle={{flex:1,flexDirection:"row",justifyContent:"space-between",padding:5}} renderItem={({item})=>(
                                <TouchableOpacity onPress={()=>navigation.navigate('Feature',{...item})}>
                                    <Image source={item.featureImage} style={tw`h-10 w-10 rounded-full flex-row`}/>
                                </TouchableOpacity>
                            )}/>
                        </View>
                    </View>
                </View>

                <View style={tw`flex-1 flex-row p-6`}>

                    <View style={tw`h-full w-1/2 p-1 mr-3`}>
                        <Image source={require('../../../assets/person2.jpg')} style={tw`h-20 w-20 rounded-full mx-auto mt-3`}/>
                        <Text style={tw`text-center mt-1`}>The best app I have ever used, 100% reccomend</Text>
                        <Text style={tw`text-center mt-1 text-sm text-neutral-900`}>Kate Manning</Text>
                    </View>

                    <View style={tw`h-full w-1/2 p-1`}>
                        <Image source={require('../../../assets/person.jpg')} style={tw`h-20 w-20 rounded-full mx-auto mt-3`}/>
                        <Text style={tw`text-center mt-1`}>The best app I have ever used, 100% reccomend</Text>
                        <Text style={tw`text-center mt-1 text-sm text-neutral-900`}>James Manningss</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    imageContainer: {
      flex: 1,
      marginRight: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
});
  
  
  
  
  


export default HomeScreen;