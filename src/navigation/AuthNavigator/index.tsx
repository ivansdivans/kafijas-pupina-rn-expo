import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../../styles/Colors";
import WelcomeScreen from "../../screens/WelcomeScreen";

//TODO: implement screen with app intro carousel
//TODO: navigate to app intro carousel screen after language select
export type AuthStackParamList = {
	Welcome: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.VFC = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.Primary,
				},
				headerTintColor: Colors.Secondary,
			}}
		>
			<AuthStack.Screen name="Welcome" component={WelcomeScreen} />
		</AuthStack.Navigator>
	);
};

export default AuthNavigator;
