import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React from 'react'
import { theme } from './Theme';

const Background = ({children}) => {
  return (
    <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            {children}
        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.colors.tint,
        
    },
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 500,
        maxHeight: 400,
        margin: 50,
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default Background

