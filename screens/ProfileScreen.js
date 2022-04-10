import { StyleSheet, Text, View, Image, B } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import profile from '../assets/profile-pic.png';

const Profile = ({ handleSignup }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const editValue = (e) => {
    username = e.target.editValue
    email = e.target.value
  }
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />
      <View style={styles.mid} >
        <Text style={styles.text} >Username</Text>
        <TextInput style={styles.input} name={username} value={username} onChangeText={(text) => setUsername(text)} />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} name={email} value={email} onChangeText={(text) => setEmail(text)} />
        <Button style={styles.editButton} onPress={() => handleSignup}>
          <Text style={styles.editText}>EDIT</Text>
        </Button>
        <View style={styles.pushContainer} >
          <Text style={styles.push} >Push Notifications</Text>
          <Button style={styles.outerButton} />
          <Button style={styles.pushButton} />
        </View>
      </View>
      <Button style={styles.reset} >
        <Text style={styles.resetText}>RESET PASSWORD</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    width: '100%',
    marginTop: 5,
    marginBottom: 100,
  },
  mid: {
    marginTop: 50
  },
  text: {
    left: 79,
    top: 15
  },
  image: {
    height: 250,
    width: 370,
    alignSelf: 'center',
    top: 60
  },
  input: {
    left: 79,
    width: 200,
    height: 30,
    top: 20,
    marginBottom: 20
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    width: 100,
    height: 36,
    left: 79,
    top: 20,
  },
  editText: {
    color: '#F12816'
  },
  outerButton: {
    backgroundColor: '#F12816',
    width: 50,
    height: 20,
    borderRadius: 10,
    left: 190,
    bottom: 20
  },
  pushButton: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 90,
    borderWidth: 2,
    left: 230,
    bottom: 40


  },
  pushContainer: {
    top: 50,
    left: 20,
  },
  innerButton: {
    left: 70
  },
  reset: {
    width: 300,
    height: 50,
    left: 40,
    backgroundColor: '#F12816',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    top: 30,
  },
  resetText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
   
  }

})

export default Profile


// add image
// their saved events
// username
// email
// password reset
// notification