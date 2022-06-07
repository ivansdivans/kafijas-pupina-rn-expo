import React from 'react'
import { Image, StyleSheet, ImageStyle, ViewStyle, SafeAreaView } from 'react-native'
import AppScreen from '../../components/AppScreen'

const WelcomeScreen: React.VFC = () => (
    <AppScreen>
        <Image resizeMode='contain' style={styles.image} source={require('../../assets/images/logo.jpg')} />
    </AppScreen>
)

interface Style {
    image: ImageStyle
}

const stylesObj: Style = {
    image: {
        width: '100%', //TODO: define in pixels and add height
    }
}

const styles = StyleSheet.create<Style>(stylesObj)

export default WelcomeScreen