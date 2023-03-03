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
import ButtomTabs from '../app_screens/button_navigation';

const winheight=Dimensions.get('window').height;

const Authy= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
        <StatusBar 
            animated={true}
            backgroundColor="white"
            />
            <ButtomTabs/>
    </>
  );
};

export default Authy;
