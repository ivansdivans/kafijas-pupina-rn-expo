import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AppIcon from "../../components/AppIcon";
import AppScreen from "../../components/AppScreen";
import appStyles from "../../styles/Application";
import { BlogStackParamList } from "../../navigation/AppNavigator/BlogStackNavigation";

const BlogScreen: React.VFC = () => {
	// const navigation =
	// 	useNavigation<
	// 		NativeStackNavigationProp<BlogStackParamList, "Blog">
	// 	>();

	return (
		<AppScreen>
			<ScrollView style={appStyles.fullSize}>
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
			</ScrollView>
		</AppScreen>
	);
};

export default BlogScreen;
