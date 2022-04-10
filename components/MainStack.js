import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddEvent from '../screens/AddEventScreen';
import Events from '../screens/EventScreen';
import Approved from '../screens/SavedEventsScreen';
import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import ResultsShow from '../search/ResultsShowScreen';
import Contact from '../screens/ContactScreen';
import AboutUs from '../screens/AboutUsScreen';
import Signup from '../screens/SignupScreen';
import Signin from '../screens/SigninScreen';

export default function Tabs({screenOptionStyle}) {

    const MainStack = createStackNavigator();

    

    return (

        <MainStack.Navigator screenOptions={{
            headerShown: false, headerStyle: {
                backgroundColor: '#14225C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, }} >
            <MainStack.Screen name="Home" component={Home}  />
            <MainStack.Screen name="Sign In" component={Signin} />
            <MainStack.Screen name="Signup" component={Signup} />
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="ResultsShow" component={ResultsShow} />
            <MainStack.Screen name="Contact" component={Contact} />
            <MainStack.Screen name="AboutUs" component={AboutUs} />
            <MainStack.Screen name="AddEvent" component={AddEvent} />
            <MainStack.Screen name="Events" component={Events} />
            <MainStack.Screen name="Approved" component={Approved} />
        </MainStack.Navigator>
    )
}
