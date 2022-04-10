import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MenuLogo from '../components/MenuLogo'
import CustomNavigationBar from '../components/CustomNavigationBar';
import Home from '../screens/HomeScreen';
import AddEvent from '../screens/AddEventScreen';
import Contact from '../screens/ContactScreen';
import Events from '../screens/EventScreen';
import ResultsShow from '../search/ResultsShowScreen'
import Profile from '../screens/ProfileScreen';
import AboutUs from '../screens/AboutUsScreen';
import Approved from '../screens/SavedEventsScreen';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import Tabs from './Tabs';
import { FontAwesome } from '@expo/vector-icons';




export default function DrawerMenu({ navigation }) {
    const [isVisible, setIsVisibile] = useState(false)

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props} style={{ flexDirection: 'column', backgroundColor: " #FFFFFF", width: '100%' }} >
                <CustomNavigationBar />
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>
        );
    }

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#14225C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    
    };
    const barOptionStyle = {
        headerStyle: {
            backgroundColor: '#14225C',
        }
    
    };


    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{screenOptionStyle}}>
            <Drawer.Screen name="Home" component={Home} options={screenOptionStyle}  />
            <Drawer.Screen name="Profile" component={Profile} icons={<FontAwesome name="user" size={24} color="black" />} options={screenOptionStyle} />
            <Drawer.Screen name="Add An Event" component={AddEvent} options={screenOptionStyle} />
            <Drawer.Screen name="Find Event" component={Events} options={screenOptionStyle} />
            {/* <Drawer.Screen name="ResultsShow" component={ResultsShow} options={screenOptionStyle} /> */}
            <Drawer.Screen name="About Us" component={AboutUs} options={screenOptionStyle} />
            <Drawer.Screen name="Dad Approved" component={Approved} options={screenOptionStyle} />
            <Drawer.Screen name="Contact Us" component={Contact} options={screenOptionStyle} />
            {/* <Drawer.Screen name="Tab" component={Tabs} /> */}
        </Drawer.Navigator>
    )

    // return (
    //     <View style={{
    //         width: '20%', height: 40, marginTop: '10%'
    //     }}>
    //         <MenuLogo/>
    //         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    //             <Text>Home</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.navigate('Events')}>
    //             <Text>Events</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
    //             <Text>Profile</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
    //             <Text>Add An Event</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.navigate('Approved')}>
    //             <Text>Approved Events</Text> 
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
    //             <Text>Contact Us</Text>
    //         </TouchableOpacity>

    //     </View>
    // );
}

const styles = StyleSheet.create({
    // container: {
    //     margin: 100,
    //     maxHeight: '100%'
    // },
    // paragraph: {
    //     backgroundColor: 'lavender',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    // },
    // seen: {
    //     height: '100%'
    // }
});
