import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "./ProfileScreen";
import Colors from "../../styles/Colors";

export type ProfileStackParamList = {
	Profile: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigation: React.VFC = () => {
	return (
		<ProfileStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.PRIMARY,
				},
				headerTintColor: Colors.SECONDARY,
			}}
		>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} />
		</ProfileStack.Navigator>
	);
};

export default ProfileStackNavigation;
