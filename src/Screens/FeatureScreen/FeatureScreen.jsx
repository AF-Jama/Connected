import { View,Text,Button,Image,SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button as ButtonRNE } from '@rneui/themed';
import tw from 'twrnc';


const FeatureScreen = ({ route,navigation })=>{
    const { featureImage,headerText,featureText } = route.params; // destructures param object




    return (
        <SafeAreaView style={tw`flex-1`}>

            <Text style={tw`text-center text-3xl text-black mt-6`}>{headerText}</Text>
            
            <View style={tw`h-3/5 w-full p-6 justify-between items-center flex-row`}>

                <View style={tw`w-1/2 items-center`}>
                    <Image source={featureImage} style={tw``}/>
                </View>

                <Text style={[styles.featureText,tw`w-1/2 text-xl p-5`]}>{featureText}</Text>
            </View>

            <View style={tw`flex-1 p-1`}>
                <TouchableOpacity style={[styles.button,tw`mb-2 p-5 rounded-full`]} onPress={()=>navigation.navigate("Login Form")}>
                    <Text>Want to try this, Login Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,tw`p-5 rounded-full`]} onPress={()=>navigation.navigate("Sign up")}>
                    <Text>Dont have an account, Sign up here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



export default FeatureScreen;



const styles = StyleSheet.create({
    featureText:{
        color:"#475d5b"
    },
    button:{
        marginRight:"auto",
        marginLeft:"auto",
        backgroundColor:"#faae2b"
    }
})