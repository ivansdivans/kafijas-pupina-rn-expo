import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { BlogStackParamList } from "..";
import AppScreen from "../../../components/AppScreen";
import AppIcon from "../../../components/AppIcon";
import appStyles from "../../../styles/Application";

const BlogScreen: React.VFC = () => {
	// const navigation =
	// 	useNavigation<
	// 		NativeStackNavigationProp<BlogStackParamList, "Blog">
	// 	>();

	return (
		<AppScreen>
			<Text>BlogScreen</Text>
			<View
				style={{
					...appStyles.inlineContainer,
					marginHorizontal: 20,
					marginVertical: 20,
				}}
			>
				<AppIcon name="notebook" size={50} />
				<Text>Did you know that coffee ...?</Text>
			</View>
		</AppScreen>
	);
};

export default BlogScreen;
