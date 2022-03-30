import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <Image source={require('../assets/Fatherhood_is_lit_logo_v1_black.png')} style={styles.image} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 50,
        marginBottom: 20,
        alignSelf: 'center',
      
    }
})

export default Logo