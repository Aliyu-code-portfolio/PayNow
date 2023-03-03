import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import Subscriptions from './Subscriptions';
import Home from './Home'
import Analytics from './Analytics'
import Card from './Card'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

function ButtomTabs() {
  return (
    <Tab.Navigator initialRouteName='Subscriptions' screenOptions={{headerShown:false,tabBarHideOnKeyboard:true, tabBarActiveTintColor:'blue', }}>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon:({focused})=>(  
            <AntDesign name="home" color={focused?'blue':'gray'} size={25}/>  
          )  }}/>
      <Tab.Screen name="Analytics" component={Analytics} 
      options={{tabBarIcon:({focused})=>(  
        <Octicons name="graph" color={focused?'blue':'gray'} size={25}/>  
    )  }}
      />
      <Tab.Screen name="Subscriptions" component={Subscriptions} 
      options={{tabBarIcon:({focused})=>(  
        <MaterialIcons name="subscriptions" color={focused?'blue':'gray'} size={25}/>  
    )  }}
      />
      <Tab.Screen name="Cards" component={Card} 
      options={{tabBarIcon:({focused})=>(  
        <AntDesign name="creditcard" color={focused?'blue':'gray'} size={25}/>  
    )  }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{tabBarIcon:({focused})=>(  
        <EvilIcons name="user" color={focused?'blue':'gray'} size={28}/>  
    )  }}
      />
    </Tab.Navigator>
  );
}
export default ButtomTabs;