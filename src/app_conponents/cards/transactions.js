import React from 'react'
import { View,Text, StyleSheet, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const winWidth = Dimensions.get('window').width

const Transaction=({credit,amount})=>{

    return(
        <View style={styles.container}>
            {credit?
            <View style={styles.logo}>
                <FontAwesome name='dollar' size={20} color='green' style={{textAlign:'center',paddingTop:5}}/>
            </View>:
            <View style={[styles.logo,{backgroundColor:'#F8A4A4'}]}>
                <FontAwesome name='dollar' size={20} color='red' style={{textAlign:'center',paddingTop:5}}/>
            </View>}
            <View style={styles.description}>
                <View style={styles.party}>
                    <Text style={{fontStyle:'normal', fontSize:14}}>Musa Abdullahi</Text>
                </View>
                <View style={styles.time}>
                    <Text style={{fontStyle:'italic', fontSize:14}}>16:30am</Text>
                </View>
            </View>
            <View style={styles.amount}>
                {credit?
                <Text style={{color:'green'}}>+{amount}</Text>
                :<Text style={{color:'red'}}>-{amount}</Text>}
            </View>
        </View>
    )
}
export default Transaction;

const styles=StyleSheet.create({
    container:{
        height:50,
        width: winWidth*0.9,
        margin:'4%',
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#ECE8E8'
    },
    logo:{
        height:30,
        width:30,
        borderRadius:300,
        marginTop:5,
        backgroundColor:'#ACF9B1'
    },
    amount:{
        marginTop:5,
    }
})