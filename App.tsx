import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigation from "./src/screens/RootStackNavigation";

const App = () => (
	<NavigationContainer>
		<StatusBar barStyle="dark-content" />
		<RootStackNavigation />
	</NavigationContainer>
);

export default App;
