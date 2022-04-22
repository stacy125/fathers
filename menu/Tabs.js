import MyTabBar from '../components/MyTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import AddEvent from '../screens/AddEventScreen';
import Events from '../screens/EventScreen';
import Approved from '../screens/SavedEventsScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Tabs() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator initialRouteName='Profile' tabBar={props => <MyTabBar {...props} />} screenOptions={{headerShown: false}} >
           
            <Tab.Screen name="Add Event" component={AddEvent} options={{
                drawerIcon: ({ focused, size }) => (
                    <FontAwesome name="check-circle" size={24} color={focused ?  '#3DBFF2': 'white'} />
                )}}/>
            <Tab.Screen name="All Events" component={Events} options={{
                drawerIcon: ({ focused, size }) => (
                    <MaterialIcons name="find-in-page" size={24} color={focused ? '#F12816' : "#3DBFF2"} />
                )}} />
            <Tab.Screen name="Dad Approved" component={Approved} options={{
                drawerIcon: ({ focused, size }) => (
                    <FontAwesome name="circle-plus" size={24} color={focused ? '#3DBFF2' : 'white'} />
                )}} />
    
        </Tab.Navigator>
    )
}
