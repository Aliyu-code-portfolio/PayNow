import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TitlePane from '../../app_conponents/page_title_pane'
import { Airtime, Food, Subscription } from '../../app_conponents/subscription_pane';

const winheight=Dimensions.get('window').height;

const Subscriptions= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
        <StatusBar 
            animated={true}
            backgroundColor="blue"
            />
          <View style={styles.titleBar}>
            <TitlePane/>
          </View>
          <ScrollView style={styles.content}>
            <Airtime/>
            <Subscription/>
            <Food/>
          </ScrollView>
    </>
  );
};

const styles= StyleSheet.create({
  titleBar:{
    height:winheight*0.2,
    backgroundColor:'blue',
    
  },
  content:{
    backgroundColor:'white',
    maxHeight:winheight*0.8,
    padding:'5%',
    paddingTop:'2%',
    overflow:'hidden'
  }
});

export default Subscriptions;
