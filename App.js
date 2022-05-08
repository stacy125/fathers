import React, { useState } from 'react';
import { Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from "react-native-screens";
import { Provider } from 'react-native-paper';
import Theme from './components/Theme';
import DrawerMenu from './menu/DrawerMenu';
import Tabs from './menu/Tabs'
import { Provider as ActionProvider } from './context/EventContext';
import {AuthProvider} from './context/AuthContext';
import Signup from './screens/SignupScreen';
import Signin from './screens/SigninScreen';
import OneEvent from './search/OneEvent';
import Dashboard from './screens/Dashboard';
import '@react-native-async-storage/async-storage'
import Carousel from './components/Carousel';




LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Warning: Async Storage has been extracted from react-native core'
]);

enableScreens();


const { width } = Dimensions.get("screen");
const RootStack = createStackNavigator();


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Provider theme={Theme}>
      <AuthProvider>
        <NavigationContainer   >
          <ActionProvider>
            <RootStack.Navigator initialRouteName='Home' >
              <RootStack.Screen name="Drawer" component={DrawerMenu} options={{ headerShown: false }} />
              <RootStack.Screen name="Event" component={OneEvent} />
              <RootStack.Screen name="Dashboard" component={Dashboard} />
              <RootStack.Screen name="CarouselStacks" component={Carousel} />
              {/* <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /> */}
              {!isLoggedIn && (
                // Auth screens
                <RootStack.Group>
                  <RootStack.Screen name="Signin" component={Signin} />
                  <RootStack.Screen name="Signup" component={Signup} />
                </RootStack.Group>
              )}
            </RootStack.Navigator>
          </ActionProvider>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}




