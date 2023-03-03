import React from "react";
import {View,Text,StyleSheet, Image,Dimensions} from 'react-native'

const winHeight = Dimensions.get('window').height

export const BillCard=({name,image})=>{

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} height={winHeight*0.05} width={winHeight*0.05}/>
            </View>
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        width:'20%',
        margin:'2%'
    },
    imageContainer:{
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        padding:'10%',
        backgroundColor: '#EBF4FA'
    },
    image:{
        resizeMode:'cover',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',

    },
    name:{
        textAlign:'center',
        marginTop:5,
        color:'#c2c2c2',
        fontSize: 12,
        fontWeight:'700',
    }
    
})