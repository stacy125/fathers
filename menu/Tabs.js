import MyTabBar from '../components/MyTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import AddEvent from '../screens/AddEventScreen';
import Events from '../screens/EventScreen';
import Approved from '../screens/SavedEventsScreen';
import DrawerMenu from './DrawerMenu';

export default function Tabs() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator initialRouteName='Profile' tabBar={props => <MyTabBar {...props} />} screenOptions={{headerShown: false}} >
            <Tab.Screen name="->" component={DrawerMenu} options={{headerShown:false}} />
            {/* <Tab.Screen name="Home" component={Home} options={{headerShown:false}} /> */}
            <Tab.Screen name="Add Event" component={AddEvent} />
            <Tab.Screen name="Find Events" component={Events} />
            <Tab.Screen name="Dad Approved" component={Approved} />
        </Tab.Navigator>
    )
}
