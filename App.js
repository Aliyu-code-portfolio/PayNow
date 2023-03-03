import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from '@react-navigation/native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Authy from './src/cloud_services/authentication';


const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const [oswaldLoaded] = useOswald({
  //   Oswald_400Regular,
  // });

  // const [latoLoaded] = useLato({
  //   Lato_400Regular,
  // });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Authy/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
 
});

export default App;
