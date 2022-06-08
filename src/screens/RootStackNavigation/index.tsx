import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../WelcomeScreen";
import MainStackNavigation from "../MainStackNavigation";

export type RootStackParamList = {
	Welcome: undefined;
	MainStack: undefined;
};

//TODO
const isNewUser: boolean = false;

const RootStack = createNativeStackNavigator();

const RootStackNavigation: React.VFC = () => {
	return (
		<RootStack.Navigator>
			{isNewUser ? (
				<RootStack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{ headerShown: false }}
				/>
			) : (
				<RootStack.Screen name="MainStack" component={MainStackNavigation} />
			)}
		</RootStack.Navigator>
	);
};

export default RootStackNavigation;
