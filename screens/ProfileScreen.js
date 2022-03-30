import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>My account</Text>
      <Button onPress={() => navigation.navigate('SavedEvents')}>Suggested Events</Button>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    width: '100%'
  }
})

export default Profile


// add image
// their saved events
// username
// email
// password reset
// notification