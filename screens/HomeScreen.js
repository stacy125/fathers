import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
// import { auth } from '../secret/firebase'
import { Button } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import image from '../assets/landing-page.png'
import useAuth from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons';
import Fil from '../components/Fil-logo'

const HomeScreen = () => {
  
const { signInWithGoogle, facebookSignIn, signInWithTwitter } = useAuth()
  const navigation = useNavigation()

  console.log(signInWithGoogle, 'signInWithGoogle');
  console.log(useAuth(), 'useAuth');

  // const signOut = async () => {
  //   try {
  //     await auth().signOut();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const text = "Sign in"
  const routeName = "Signin"

  return (
    <Background>
      <Fil />
      <Logo  />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image} />
        </View>
        <Text style={styles.text}>Where fathers can find,</Text>
        <Text style={styles.text}>create and share events to</Text>
        <Text style={styles.text}>enjoy with their children</Text>
        <Button style={styles.spacer} mode='contained' onPress={() => {
          navigation.navigate('Signup')
        }}>@CONTINUE WITH EMAIL</Button>
        <View style={styles.icon1}>
          <TouchableOpacity style={styles.icons} onPress={signInWithGoogle}>
            <FontAwesome name="google" size={24} color="#F12816" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={facebookSignIn} >
            <FontAwesome name="facebook" size={24} color="#F12816" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={signInWithTwitter} >
            <FontAwesome name="twitter" size={24} color="#F12816" />
          </TouchableOpacity>

        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName)}> 
            <Text style={styles.text1}>Already have an account?</Text>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
      </View>
    </Background>

  )}

export default HomeScreen

const styles = StyleSheet.create({
 
  container: {
    height: 400,
  },
  spacer: {
    marginTop: "5%",
    width: '80%',
    backgroundColor: '#14225C',
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  imageContainer: {
    width: 380,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    // fontFamily: Poppins

  },
  text1: {
    marginLeft: 30
  },
  link: {
    position: 'absolute',
    color: 'red',
    marginLeft: 215
  },
  icon1: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icons: {
    justifyContent: 'space-around',
    padding: 20,
  },

})