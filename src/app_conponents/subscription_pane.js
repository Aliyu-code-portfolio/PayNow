import React from "react";
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions
  } from 'react-native'
import { BillCard } from "./cards/bill_card";

//Data to pass for subscription cards
import logo from '../../assets/mtn.png'
const cardName='MTN';
const data = ['aliyu','abdullahi','isyaka','is','learning']
 
const winHeight = Dimensions.get('window').height

//Airtime
export const Airtime = ()=> {
    const isDarkMode = useColorScheme() === 'dark';
    return (
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Airtime</Text>
                </View>
                <View style={styles.content}>
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                </View>
            </View>
    );
  }

  //Subscriptions
  export const Subscription = ()=> {
    const isDarkMode = useColorScheme() === 'dark';
    return (
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Subscriptions</Text>
                </View>
                <View style={styles.content}>
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                </View>
            </View>
    );
  }

  export const Food = ()=> {
    const isDarkMode = useColorScheme() === 'dark';
    return (
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Foods</Text>
                </View>
                <View style={styles.content}>
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                    <BillCard name={cardName} image={logo} />
                </View>
            </View>
    );
  }

  const styles = StyleSheet.create({
    body:{
        width:'100%'
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
    },
    titleContainer:{
        marginTop:20,
    },
    content:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
    }
});