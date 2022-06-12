import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabsNavigation from "./src/screens/BottomTabsNavigation";

const App = () => (
	<NavigationContainer>
		<StatusBar barStyle="light-content" />
		<BottomTabsNavigation />
	</NavigationContainer>
);

export default App;
