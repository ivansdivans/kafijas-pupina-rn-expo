import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AppScreen from "../../components/AppScreen";
import AppIcon from "../../components/AppIcon";
import appStyles from "../../styles/Application";
import { ProfileStackParamList } from "../../navigation/AppNavigator/ProfileStackNavigation/index";

const ProfileScreen: React.VFC = () => {
	// const navigation =
	// 	useNavigation<
	// 		NativeStackNavigationProp<ProfileStackParamList, "Profile">
	// 	>();

	return (
		<AppScreen>
			<Text>ProfileScreen</Text>
			<View
				style={{
					...appStyles.inlineContainer,
					marginHorizontal: 20,
					marginVertical: 20,
				}}
			>
				<AppIcon name="face-man" size={50} />
				<Text>My name: Ivans Mihailovs</Text>
			</View>
			<View
				style={{
					...appStyles.inlineContainer,
					marginHorizontal: 20,
					marginVertical: 20,
				}}
			>
				<AppIcon name="phone" size={50} />
				<Text>My phone: +371 28720022</Text>
			</View>
		</AppScreen>
	);
};

export default ProfileScreen;
