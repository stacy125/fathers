import React from 'react';
import CustomNavigationBar from '../components/CustomNavigationBar';
import Home from '../screens/HomeScreen';
import AddEvent from '../screens/AddEventScreen';
import Contact from '../screens/ContactScreen';
import Events from '../screens/EventScreen';
import Profile from '../screens/ProfileScreen';
import AboutUs from '../screens/AboutUsScreen';
import Approved from '../screens/SavedEventsScreen';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import logout from '../screens/SignOutScreen';
import HowItWorks from '../screens/HowItWorks';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../secret/firebase'
import ResultsList from '../search/ResultsList';
import UseResults from '../search/UseResults';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';


export default function DrawerMenu() {

    const [user, loading, error] = useAuthState(auth);

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




    const Drawer = createDrawerNavigator();

    console.log(user);

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ screenOptionStyle }}>
            {!user ? (
                <Drawer.Group>
                    <Drawer.Screen name="Home" component={Home} options={{
                        headerStyle: {
                            backgroundColor: '#14225C',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ focused, size }) => (
                            <FontAwesome name="home" size={24} color={focused ? '#F12816' : '#3DBFF2'} />
                        )}}/>
                </Drawer.Group>

            ) : (
                <Drawer.Group>
                        <Drawer.Screen name="Profile" component={Profile} icons={<FontAwesome name="user" size={24} color="black" />} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <FontAwesome name="user" size={24} color={focused ? '#F12816' : '#3DBFF2'
} />
                            )}} />
                        <Drawer.Screen name="How it works" component={Carousel} icons={<FontAwesome name="circle-question" size={24} color="black" />} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <FontAwesome name="user" size={24} color={focused ? '#F12816' : '#3DBFF2'
} />
                            )}} />
                        <Drawer.Screen name="Add An Event" component={AddEvent} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <Ionicons name="md-add-circle-sharp" size={24} color={focused ? '#F12816' : "#3DBFF2"} />
                            )}} />
                        <Drawer.Screen name="Find Event" component={UseResults} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <MaterialIcons name="find-in-page" size={24} color={focused ? '#F12816' : "#3DBFF2"} />
                            )}} />
                        <Drawer.Screen name="About Us" component={AboutUs} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <Ionicons name="hand-right-sharp" size={24} color={focused ? '#F12816' : '#3DBFF2'} />
                            )}} />
                        <Drawer.Screen name="Dad Approved" component={Approved} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <FontAwesome name="check-circle" size={24} color={focused ? '#F12816' :'#3DBFF2'} />
                            )}} />
                        <Drawer.Screen name="Sign out" component={logout} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <FontAwesome name="sign-out" size={24} color={focused ? '#F12816' :'#3DBFF2'} />
                            )}} />
                        <Drawer.Screen name="Contact Us" component={Contact} options={{
                            headerStyle: {
                                backgroundColor: '#14225C',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            drawerIcon: ({ focused, size }) => (
                                <FontAwesome name="envelope" size={24} color={focused ? '#F12816' : '#3DBFF2'} />
                            )}} />
                </Drawer.Group>

            )
            }
        </Drawer.Navigator>
    )

}

