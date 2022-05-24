import React from "react";
import { View,Text,TouchableOpacity, Alert, TouchableHighlight,StyleSheet,Image } from "react-native";

class Methods extends React.Component{

    onPressButton(){
        Alert.alert("Please....add to cart if you want to purchase fruits.")
    }
    onLongPressButton(){
        Alert.alert("exit")
    }
    cart(){
        Alert.alert("added to the cart")
    }
    wishlist(){
        Alert.alert("added to the wishlist")
    }

    render(){
        return(
            <View style={styles.container}>

                <TouchableOpacity onPress={this.onPressButton} 
                hitSlop={{top:20,left:50,right:50}}
                >
                <Image source={require('../images/fruits.jpg')} style={styles.image}></Image>
                </TouchableOpacity>
        
                <TouchableHighlight onPress={this.wishlist} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Wishlist</Text>
                </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.cart}
                 activeOpacity={.5}
                 hitSlop={{top:20,bottom:20,left:50,right:50}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Cart</Text>
                    </View>
                </TouchableOpacity>

                <TouchableHighlight onLongPress={this.onLongPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>click here</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingTop:60,alignItems:"center",backgroundColor:"black",height:"100%"
    },
    button:{
        marginBottom:30,width:260,alignItems:"center",backgroundColor:"green"
    },
    buttonText:{
        padding:20,color:"white",fontSize:18
    },
    image:{
        height:"60%",
        width:400
    }
})

export default Methods;