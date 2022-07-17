import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BlogStackNavigation from "./BlogStackNavigation";
import MainStackNavigation from "./MainStackNavigation";
import ProfileStackNavigation from "./ProfileStackNavigation";

import Colors from "../../styles/Colors";
import ShopNavigationButton from "./ShopNavigationButton";

export type BottomTabsParamList = {
	BlogStack: undefined;
	Shop: undefined;
	ProfileStack: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const AppNavigator: React.VFC = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="Shop"
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.Secondary },
				tabBarActiveTintColor: Colors.Primary,
				tabBarInactiveTintColor: Colors.Grey,
				headerShown: false,
			}}
		>
			<BottomTabs.Screen
				name="BlogStack"
				component={BlogStackNavigation}
				options={{
					title: "Blog",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="notebook" color={color} size={size} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="Shop"
				component={MainStackNavigation}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<ShopNavigationButton onPress={() => navigation.navigate("Shop")} />
					),
				})}
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

export default AppNavigator;
