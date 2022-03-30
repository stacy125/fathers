import React, { useState } from 'react';
import { Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from "react-native-screens";
import { Provider } from 'react-native-paper';
import Theme from './components/Theme';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import Home from './screens/HomeScreen';
import AddEvent from './screens/AddEventScreen';
import Contact from './screens/ContactScreen';
import Events from './screens/EventScreen';
import ResultsShow from './search/ResultsShowScreen'
import Profile from './screens/ProfileScreen';
import Approved from './screens/SavedEventsScreen';
import MyTabBar from './components/MyTabBar';
import CustomNavigationBar from './components/CustomNavigationBar';
import SearchByPrice from './search/SearchByPrice';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Warning: Async Storage has been extracted from react-native core'
]);

enableScreens();


const { width } = Dimensions.get("screen");
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const DrawerNav = () => {
//   <Drawer.Navigator >
//     <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//     <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
//     <Drawer.Screen name="AddEventScreen" component={AddEventScreen} />
//     <Drawer.Screen name="Event" component={EventScreen} />
//     <Drawer.Screen name="ResultsShow" component={ResultsShowScreen} />
//     <Drawer.Screen name="SavedEvent" component={SavedEventScreen} />
//     <Drawer.Screen name="Contact" component={ContactScreen} />
//   </Drawer.Navigator>
// }
export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log()

  return (
    <Provider theme={Theme}>
      <NavigationContainer >
        <Tab.Navigator tabBar={props => <MyTabBar {...props} screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }} />}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name='Signin' component={SigninScreen} />
          <Tab.Screen name='Signup' component={SignupScreen} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="AddEvent" component={AddEvent} />
          <Tab.Screen name="Events" component={Events} />
          <Tab.Screen name="ResultsShow" component={ResultsShow} />
          <Tab.Screen name="Approved" component={Approved} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );

  //   return (
  //     <Provider>
  //       <NavigationContainer>

  //       </NavigationContainer>
  //     </Provider>
  //   )
}




