import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import AboutPic from '../assets/about-us-hero.png';

const AboutUsScreen = () => {
    return (
        <View>
            <Image source={AboutPic} style={styles.image} />
            <ScrollView showsVerticalScrollIndicator style={styles.story} >
                <Text style={styles.text} >Our Story</Text>
                <Text style={styles.text}>  #FatherhoodIsLit was founded by me, James Lopez, a father of 3 very awesome boys.</Text>
                <Text style={styles.text}> As a technology entrepreneur, I am on the road often with and without my kids. I like being involved and used to spend hours searching for things to do with my 3 boys. From my favorite search engine to parenting groups, I would spend hours looking for activities or events that were not only fun for my kids but for me as well.</Text>
                <Text style={styles.text}> I would research, screenshot activities, and then place them in my calendar for future use. I knew that wasn't the right solution and needed a better, more effective way to save events or activities that I wanted to do with my kids, so #FatherhoodIsLit was born.</Text>
                <Text style={styles.text}> My hope with #FatherhoodIsLit is to provide fathers with activities or events that have been vetted by other fathers so they can go out there and create everlasting memories with their kids.</Text>
                <Text style={styles.text}>Our PRESENCE never has to be boring, now FATHERS have a place that showcases what they can do!
                </Text>
                <Button style={styles.button} >
                    <Text style={styles.buttonText} >FIND AN EVENT</Text>
                </Button>
            </ScrollView>
        </View>
    )
}

export default AboutUsScreen

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 370,
        alignSelf: 'center',
        top: 2,
    },
    story: {
        textAlign: 'auto',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    text: {
        marginBottom: 10,
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        /* or 150% */

        letterSpacing: 0.5,

    },
    button: {
        width: 300,
        height: 50,
        left: 20,
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
        top: 10,
    },
    buttonText: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    }
})