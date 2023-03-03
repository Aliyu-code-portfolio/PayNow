import React, { useState } from "react";
import { StyleSheet ,View,Text,Dimensions, ScrollView, Switch } from "react-native";
import Entypo from "react-native-vector-icons/Entypo"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"


const winheight=Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;
const Profile =()=>{
    const [notify,setNotify]= useState(false)//retrieve initial toggle value from local storage
    const [helper,setHelper]= useState(false)//retrieve initial toggle value from local storage
    const [dark,setDark]= useState(false)//retrieve initial toggle value from local storage
    
    //Local Storage of settings
    const notification=()=>{
        //Change the local value of notification
        setNotify(!notify)
    }
    const helperToggle=()=>{
        //Change the local value of notification
        setHelper(!helper)
    }
    const darkmode=()=>{
        //Change the local value of notification
        setDark(!dark)
    }
    return (
        <View style={styles.container}>
            {/* Title Pane */}
            <View style={styles.titlepane}>
                <View style={styles.titleContents}>
                    <Text style={styles.title}>Profile</Text>
                    {/* <Entypo name='user' style={{color:'#CFD805', fontSize:20,alignSelf:'center'}} /> */}
                </View>
            </View>
            <ScrollView style={styles.body}>
                {/* Profile Picture and name */}
                <View style={styles.profile}>
                    <View style={styles.pic}>

                    </View>
                    <View style={styles.nameIcon}>
                        <Text style={styles.name}>
                            Aliyu Abdullahi
                        </Text>
                        <Octicons name='verified' style={{color:'green',marginLeft:5,marginTop:5, fontSize:20,alignSelf:'center'}} />
                    </View>
                    <Text style={styles.email}>
                        aliyuabdullahi@gmail.com
                    </Text>
                </View>
                {/* Account Settings */}
                <View style={styles.account}>
                    <Text style={{marginBottom:10}}>Account Settings</Text>
                    <View style={styles.settings}>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                            <Entypo name='user' style={{color:'gray', fontSize:16,alignSelf:'center', }} />
                            <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Your details</Text>
                            </View>
                            <SimpleLineIcons name='arrow-right' style={{color:'gray', fontSize:16,alignSelf:'center',marginRight:5}} />              
                        </View>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='lock' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Transaction Pin</Text>
                            </View>
                            <SimpleLineIcons name='arrow-right' style={{color:'gray', fontSize:16,alignSelf:'center',marginRight:5}} />
                        </View>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='key' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Change Password</Text>
                                </View>
                                <SimpleLineIcons name='arrow-right' style={{color:'gray', fontSize:16,alignSelf:'center',marginRight:5}} />
                        </View>
                    </View>
                </View>
                {/* App Settings */}
                <View style={styles.app}>
                    <Text style={{marginBottom:10}}>Account Settings</Text>
                    <View style={styles.settings}>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='notification' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Notification</Text>
                            </View>
                            <Switch trackColor={{false:'gray',true:'#6391F9'}} value={notify} onValueChange={notification} thumbColor={notify ? 'blue' : '#f4f3f4'} ios_backgroundColor="#3e3e3e"/>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='text' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Text Display</Text>
                            </View>
                            <SimpleLineIcons name='arrow-right' style={{color:'gray', fontSize:16,alignSelf:'center',marginRight:5}} />
                        </View>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='flash' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Shower helper on screen</Text>
                            </View>
                            <Switch trackColor={{false:'gray',true:'#6391F9'}} value={helper} onValueChange={helperToggle} thumbColor={helper ? 'blue' : '#f4f3f4'} ios_backgroundColor="#3e3e3e"/>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.subOption}>
                                <Entypo name='moon' style={{color:'gray', fontSize:16,alignSelf:'center'}} />
                                <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Dark mode</Text>
                            </View>
                            <Switch trackColor={{false:'gray',true:'#6391F9'}} value={dark} onValueChange={darkmode} thumbColor={dark ? 'blue' : '#f4f3f4'} ios_backgroundColor="#3e3e3e"/>
                        </View>
                    </View>
                </View>
                {/* More settings */}
                <View style={styles.more}>
                    <Text style={{marginBottom:10}}>More settings</Text>
                    <View style={styles.settings}>
                        <View style={{flexDirection:'row',marginTop:'4%',marginLeft:'5%',}}>
                            <FontAwesome name='sign-out' style={{color:'red', fontSize:25,alignSelf:'center'}} />
                            <Text style={{marginLeft:10, fontWeight:'bold', fontSize:16}}>Sign out</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titlepane:{
        height: winheight*0.1,
        backgroundColor:'blue',
        
    },
    body:{
        height:winheight*0.9,
        backgroundColor:'white',

    },
    profile:{
        height:winheight*0.2,
        margin:'5%',
    },
    pic:{
        borderRadius:100,
        height:100,
        width:100,
        borderColor:'green',
        borderWidth:2
    },
    nameIcon:{
        flexDirection:'row',
    },
    account:{
        height:winheight*0.2,
        margin:'5%',
        
    },
    app:{
        height:winheight*0.3,
        margin:'5%',
    },
    more:{
        height:winheight*0.1,
        margin:'5%',
    },
    settings:{
        height:'80%',
        width:winWidth*0.93,
        backgroundColor:'#F5F5F5',
        borderRadius: 10,
    },
    option:{
        flexDirection:'row',
        marginTop:'4%',
        marginLeft:'5%',
        justifyContent:'space-between'
    },
    subOption:{
        flexDirection:'row',
    },
    titleContents:{
        flexDirection:'row',
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        margin:'5%',
        marginRight:1,
        color:'#ababab'
    },
    name:{
        color:'black',
        fontWeight:'700',
        marginTop:'2%',
    }
})