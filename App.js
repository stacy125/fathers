import React, { useState } from 'react';
import { Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from "react-native-screens";
import { Provider } from 'react-native-paper';
import Theme from './components/Theme';
import DrawerMenu from './menu/DrawerMenu';
import MyTabBar from './components/MyTabBar';
import MainStack from './components/MainStack'
import Tabs from './menu/Tabs'
import { Provider as AuthProvider } from './context/EventContext';
import Signup from './screens/SignupScreen';
import Signin from './screens/SigninScreen';
import Home from './screens/HomeScreen';
import AddEvent from './screens/AddEventScreen';
import Events from './screens/EventScreen';
import Approved from './screens/SavedEventsScreen';
import Profile from './screens/ProfileScreen';
import ResultsShow from './search/ResultsShowScreen';
import Contact from './screens/ContactScreen';
import AboutUs from './screens/AboutUsScreen';




LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Warning: Async Storage has been extracted from react-native core'
]);

enableScreens();


const { width } = Dimensions.get("screen");
const RootStack = createStackNavigator();


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log()

  return (
    <AuthProvider>
      <Provider theme={Theme}>
        <NavigationContainer   >
          <RootStack.Navigator initialRouteName='Home' >
            {isLoggedIn ? (
              // Screens for logged in users
              <RootStack.Group>
                <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <RootStack.Screen name="MainStack" component={MainStack} />
              </RootStack.Group>
            ) : (
              // Auth screens
              <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="Signin" component={Signin} />
                <RootStack.Screen name="Signup" component={Signup} />
                <RootStack.Screen name="Events" component={Events} />
              </RootStack.Group>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}




