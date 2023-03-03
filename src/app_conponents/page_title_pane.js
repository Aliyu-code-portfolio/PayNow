import React from 'react'
import {StyleSheet, View,Text,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Searchbar } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"

function TitlePane(){
    

    return(
        <View style={styles.body}>
            <View style={styles.titleContainer}>
                <View style={styles.titleContents}>
                    <Text style={styles.title}>Subscriptions</Text>
                    <FontAwesome5 name='money-bill-wave' style={{color:'#CFD805', fontSize:20,marginTop:5,alignSelf:'center'}} />
                </View>
                <View style={styles.icons}>
                    <View style={[styles.iconWrap,{marginRight:15}]}>
                    <TouchableWithoutFeedback>
                        <Feather name='x' style={{color:'#F3F3F3', fontSize:20,textAlign:'center',}} />
                    </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.iconWrap}>
                    <TouchableOpacity>
                         <Entypo name='dots-three-horizontal' style={{color:'#F3F3F3', fontSize:20, textAlign:'center'}} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Searchbar
                placeholder="Search subscriptions"
                //value={searchKeyword}
                // onSubmitEditing={() => {
                // search(searchKeyword);
                // }}
                // onChangeText={(text) => {
                // setSearchKeyword(text);
                // }}
                style={styles.search}
            />
        </View>
    )
}
export default TitlePane

const styles = StyleSheet.create({
    body:{
        height:'100%',
        margin:'5%',
        marginTop:'4.5%',
        
    },
    titleContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleContents:{
        flexDirection:'row',
    },
    icons:{
        flexDirection:'row'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        padding:10,
        paddingLeft:1,
        color:'#ababab'
    },
    iconWrap:{
        backgroundColor:'#345DE7',
        borderRadius:200,
        width:40,
        height:40,
        marginTop:5,
        borderWidth:1,
        borderColor:'gray',
        justifyContent:'center',
        alignContent:'center'
        
    },
    search:{
        borderRadius:10,
        marginTop:'3%'
    }

});