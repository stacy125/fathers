import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import profile from '../assets/profile-pic.png';
import useAuth from '../context/AuthContext';
import { updateProfile, updateEmail, deleteUser, reauthenticateWithCredential} from "firebase/auth";
import { auth } from '../secret/firebase'
import { useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo';

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const { user } = useAuth();
  const navigation = useNavigation();



  const photoChange = (e) => {
    updateProfile(auth.currentUser, {
      photoURL: photoURL
    }).then(() => {
      // Profile updated!
      setPhotoURL(photoURL)
     
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  const usernameChange = (e) => {
    updateProfile(auth.currentUser, {
      displayName: username
    }).then(() => {
      // Profile updated!
      setUsername(username)
     
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  const emailChange = (e) => {
    updateEmail(auth.currentUser, {
      email: email
    }).then(() => {
      // Profile updated!
      setEmail(email)

    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  const deleteAccount = async () => {
    auth
    const user = auth.currentUser
    const credential = reauthenticateWithCredential(credential)
    deleteUser(user);
  }


  const Photo = () => {
    if (user.photoURL) {
      return <Image source={profile} style={styles.image} />
    } else {
      return <Image source={user.photoURL} style={styles.image} />
    }
  }



  const toggleModal = () => {
    setVisible(!visible);
  };

  const toggleDashboard = () => {
    setShow(!show);;
  };

  if(!user){
    return null
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignSelf: 'center' }}>
        <Button style={styles.topButton} onPress={toggleDashboard}>
          <Text style={styles.editText}>YOUR ACCOUNT</Text>
        </Button>
        <Button style={styles.topButton} onPress={toggleDashboard}>
          <Text style={styles.editText}>DASHBOARD</Text>
        </Button>
      </View>
      <Photo />
      <Modal visible={show} animationType='slide'>
        <Dashboard toggleDashboard={toggleDashboard} show={show} />
      </Modal>
      <View style={styles.mid} >
        <Button style={styles.editButton} onPress={photoChange}>
          <Text style={styles.editText}>EDIT</Text>
        </Button>
        <Text style={styles.text} >Username</Text>
        <TextInput style={styles.input} name={username} value={username} onChangeText={(text) => setUsername(text)} placeholder={user.displayName} />
        <Button style={{ fontSize: 14 }} onPress={usernameChange}><Text style={styles.editText}>change username</Text></Button>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} name={email} value={email} onChangeText={(text) => setEmail(text)} placeholder={user.email} />
        <Button style={{ fontSize: 14 }} onPress={emailChange}>
          <Text style={styles.editText}>change email</Text>
        </Button>
      </View>
      <View style={{ flexDirection: "row", bottom: 20 }}>
        <Button style={styles.reset} onPress={toggleModal}>
          <Text style={styles.resetText}>RESET PASSWORD</Text>
        </Button>
        <Modal visible={visible} animationType='slide'>
          <View style={{ marginTop: 50 }}>
            <Fil style={{ marginLeft: 20 }} />
            <Logo style={styles.logo} />
          </View>
          <View style={{ marginTop: 50, marginHorizontal: 10 }}>
            <Text style={styles.resetText}>RESET PASSWORD</Text>
            <TextInput style={styles.resetPassword} placeholder='enter new password' onChangeText={text => setPassword(text)} />
            <Button style={styles.resetModal} onPress={toggleModal}>
              <Text style={styles.resetText}>PASSWORD SET</Text>
            </Button>
          </View>
        </Modal>
        <Button style={styles.reset} onPress={deleteAccount} >
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
  resetModal: {
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
    alignSelf: 'center',
  },
  resetText: {
    color: '#F12816',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20

  }

})

export default Profile


// add image
// their saved events
// username
// email
// password reset
// notification