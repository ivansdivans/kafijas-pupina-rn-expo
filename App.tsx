import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";

const App = () => {
	const isNewUser = false; //TODO: implement logic

	return (
		<NavigationContainer>
			<StatusBar barStyle="light-content" />
			{isNewUser ? <AuthNavigator /> : <AppNavigator />}
		</NavigationContainer>
	);
};

export default App;
