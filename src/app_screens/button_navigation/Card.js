import React, { useState } from "react";
import { View,Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Pressable } from "react-native";
import CreditCardDisplay from 'react-native-credit-card-display';
import Feather from 'react-native-vector-icons/Feather'
import Transaction from "../../app_conponents/cards/transactions";

const winHeight = Dimensions.get('window').height

const Card =()=>{

  const [hide,setHide] =useState(true)

  function toggle(value){
    setHide(value)
  }
    return (
      <View style={styles.container}>
        {/* Cards attached */}
        <View style={styles.credit}>
          {hide?
          <View style={styles.card}>
            <CreditCardDisplay
              number={'****  ****  ****  ****'}
              cvc={'***'}
              expiration="**/**"
              name="John J. Doe"
              since="2004"
              cardStyles={{marginTop:'25%',marginLeft:'15%',}}
            />
            <TouchableOpacity style={{ height:30, width:40, marginTop:'22%',alignSelf:'center'}} onPress={()=>toggle(false)}><Feather name='eye' size={25} color='blue'  /></TouchableOpacity>
          </View>:
          <View style={styles.card}>
              <CreditCardDisplay
                number={'4242  4242  4242  4242'}
                cvc={123}
                expiration="04/21"
                name="John J. Doe"
                since="2004"
                cardStyles={{marginTop:'25%',marginLeft:'15%'}}
              />
              <TouchableOpacity style={{ height:30, width:40, marginTop:'22%',alignSelf:'center'}} onPress={()=>toggle(true)}><Feather name='eye-off' size={25} color='blue' /></TouchableOpacity>

          </View>
          }
          
        </View>
        {/* Recent Section */}
        <View style={styles.recent}>
          <View style={styles.titleText}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Recent Activity</Text>
            <Pressable>
              <Text style={{color:'blue',}}>See all</Text>
            </Pressable>
          </View>
          <ScrollView style={styles.activities}>
            {/* A flatlist tot be used */}
            <Transaction credit={true} amount={23000}/>
            <Transaction credit={true} amount={506}/>
            <Transaction credit={false} amount={13000}/>
            <Transaction credit={true} amount={8922}/>
            <Transaction credit={true} amount={506}/>
            <Transaction credit={false} amount={13000}/>
            <Transaction credit={true} amount={8922}/>
          </ScrollView>
        </View>

      </View>
        
      );
}
export default Card

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  credit:{
    height: winHeight*0.5
  },
  recent:{
    height:winHeight*0.4
  },
  titleText:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'4%'
  }
})