import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import HowItWorks from '../screens/HowItWorks';
import HowItWorksAdd from '../screens/HowItWorksAdd';
import HowItWorksReview from '../screens/HowItWorkReview';
import { createStackNavigator } from '@react-navigation/stack';



const Carousel = () => {

    const [isSelected, setIsSelected] = useState(false)

    const CarouselStack = createStackNavigator();



    return (
        <CarouselStack.Navigator screenOptions={{
            headerShown: false, headerStyle: {
                backgroundColor: '#14225C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }} >
            <CarouselStack.Screen name="How it works" component={HowItWorks} />
            <CarouselStack.Screen name="How it works to Add" component={HowItWorksAdd} />
            <CarouselStack.Screen name="How it works to Review" component={HowItWorksReview} />
        </CarouselStack.Navigator>
    )
}

export default Carousel

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,

    },
})