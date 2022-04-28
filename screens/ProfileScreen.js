import { StyleSheet, Text, View, Image, B } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import profile from '../assets/profile-pic.png';
import useAuth from '../context/AuthContext'

const Profile = ({ handleSignup }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const { user } = useAuth()

  const usernameChange = (e) => {
    username = user.displayName
    email = e.target.value
  }
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignSelf: 'center' }}>
        <Button style={styles.topButton} onPress={() => handleSignup}>
          <Text style={styles.editText}>YOUR ACCOUNT</Text>
        </Button>
        <Button style={styles.topButton} onPress={() => handleSignup}>
          <Text style={styles.editText}>DASHBOARD</Text>
        </Button>
      </View>
      <Image source={profile} style={styles.image} />
      <View style={styles.mid} >
        <Button style={styles.editButton} onPress={() => handleSignup}>
          <Text style={styles.editText}>EDIT</Text>
        </Button>
        <Text style={styles.text} >Username</Text>
        <TextInput style={styles.input} name={username} value={username} onChangeText={(text) => setUsername(text)} placeholder={user.displayName} />
        <Button style={{fontSize: 14}} onPress={() => handleSignup}>
          <Text style={styles.editText}>change username</Text>
        </Button>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} name={email} value={email} onChangeText={(text) => setEmail(text)} placeholder={user.email} />
        <Button style={{ fontSize: 14 }} onPress={() => handleSignup}>
          <Text style={styles.editText}>change email</Text>
        </Button>
        {/* <View style={styles.pushContainer} >
          <Text style={styles.push} >Push Notifications</Text>
          <Button style={styles.outerButton} />
          <Button style={styles.pushButton} />
        </View> */}
      </View>
      <View style={{ flexDirection: "row", bottom: 20 }}>
        <Button style={styles.reset} >
          <Text style={styles.resetText}>RESET PASSWORD</Text>
        </Button>
        <Button style={styles.reset} >
          <Text style={styles.resetText}>DELETE ACCOUNT</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 250,
    width: '100%',
    // marginBottom: 100,
  },
  mid: {
    marginTop: 30
  },
  text: {
    top: 15,
    textAlign: 'center',
    fontSize: 20
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    top: 30,
    borderRadius: 100,
  },
  input: {
    width: 200,
    height: 30,
    top: 20,
    marginBottom: 20,
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  topButton: {
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
    width: 164,
    height: 36,
    justifyContent: 'center',
    alignSelf: 'center'

  },
  editButton: {
    borderColor: 'transparent',
    width: 100,
    height: 36,
    alignSelf: 'center'

  },
  editText: {
    color: '#F12816',
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
    width: 180,
    // height: 50,
    left: 7,
    backgroundColor: 'white',
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
    color: '#F12816',
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