import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddEvent from '../screens/AddEventScreen';
import Events from '../screens/EventScreen';
import Approved from '../screens/SavedEventsScreen';
import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import Contact from '../screens/ContactScreen';
import AboutUs from '../screens/AboutUsScreen';
import OneEvent from '../search/OneEvent';
// import HowItWorksAdd from '../screens/HowItWorksAdd';
// import HowItWorksReview from '../screens/HowItWorkReview';
// import HowItWorks from '../screens/HowItWorks';

export default function MainStacks() {

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
            {/* <MainStack.Screen name="Profile" component={Profile} /> */}
            {/* <MainStack.Screen name="How it works" component={HowItWorks} />
            <MainStack.Screen name="How it works Add" component={HowItWorksAdd} />
            <MainStack.Screen name="How it works Review" component={HowItWorksReview} /> */}
            <MainStack.Screen name="Chosen Event" component={OneEvent}/>
            <MainStack.Screen name="Contact Us" component={Contact} />
            <MainStack.Screen name="About Us" component={AboutUs} />
            <MainStack.Screen name="Add Event" component={AddEvent} />
            <MainStack.Screen name="Events" component={Events} />
            <MainStack.Screen name="Approved" component={Approved} />
        </MainStack.Navigator>
    )
}
