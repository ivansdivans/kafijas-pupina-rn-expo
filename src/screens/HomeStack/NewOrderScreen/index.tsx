import React from 'react'
import {Text} from 'react-native'

import AppScreen from '../../../components/AppScreen'
import AppIcon from '../../../components/AppIcon'

const NewOrderScreen: React.VFC = () => {
 return (
    <AppScreen>
        <Text>Open up App.tsx to start working on your app!</Text>
        <AppIcon name="home" size={50}/>
     </AppScreen>
     )
}

export default NewOrderScreen