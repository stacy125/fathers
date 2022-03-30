import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { Button } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import image from '../assets/landing-page.png'
import  { signInWithPopup }  from '../components/GoogleAuth'
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';
import Fil from '../components/Fil-logo'


const HomeScreen = ({ navigation }) => {
  
  // const signInWithGoogle = async () => {
  //   const provider = new auth.GoogleAuthProvider();
  //   auth.useDeviceLanguage();
  //   try {
  //     await auth.signInWithPopup(provider);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const text = "Sign in"
  const routeName = "SignInScreen"

  return (
    <Background>
      <Fil />
      <Logo style={styles.logo} />
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        </ImageBackground>
        <Text style={styles.text}>Where fathers can find,</Text>
        <Text style={styles.text}>create and share events to</Text>
        <Text style={styles.text}>enjoy with their children</Text>
        <Button style={styles.spacer} mode='contained' onPress={() => {
          navigation.navigate('SignupScreen')
        }}>@CONTINUE WITH EMAIL</Button>
        <View style={styles.icon1}>
          <TouchableOpacity style={styles.icons} onPress={signInWithPopup}>
            <FontAwesome  name="google" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} >
            <FontAwesome name="facebook" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} >
            <FontAwesome  name="twitter" size={24} color="red" />
          </TouchableOpacity>

        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName)}>
          <Spacer>
            <Text style={styles.text1}>Already have an account?</Text>
            <Text style={styles.link}>{text}</Text>
          </Spacer>
        </TouchableOpacity>
      </View>
    </Background>



  )
}

export default HomeScreen

const styles = StyleSheet.create({
  logo: {
    marginTop: '50%'
  },
  container: {
    height: 400
  },
  spacer: {
    marginTop: "5%",
    // marginBottom: '5%',
    width: '80%',
    backgroundColor: 'darkblue',
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  image: {
    width: '100%',
    height: '65%',
  },
  text: {
    textAlign: 'center',
    borderColor: 'red'

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