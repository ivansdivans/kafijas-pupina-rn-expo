import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RootStackNavigation from "../RootStackNavigation";
import ProfileStackNavigation from "../ProfileStackNavigation";
import Colors from "../../styles/Colors";

export type BottomTabsParamList = {
	Shop: undefined;
	ProfileStack: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigation: React.VFC = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.PACKAGE },
				tabBarActiveTintColor: Colors.PRIMARY,
				tabBarInactiveTintColor: Colors.GREY,
				headerShown: false,
			}}
		>
			<BottomTabs.Screen
				name="Shop"
				component={RootStackNavigation}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="shopping" color={color} size={size} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="ProfileStack"
				component={ProfileStackNavigation}
				options={{
					title: "Profile",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabsNavigation;
