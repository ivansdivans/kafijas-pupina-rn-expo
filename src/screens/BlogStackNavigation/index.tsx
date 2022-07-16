import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BlogScreen from "./BlogScreen";
import Colors from "../../styles/Colors";

export type BlogStackParamList = {
	Blog: undefined;
};

const BlogStack = createNativeStackNavigator<BlogStackParamList>();

const BlogStackNavigation: React.VFC = () => {
	return (
		<BlogStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.Primary,
				},
				headerTintColor: Colors.Secondary,
			}}
		>
			<BlogStack.Screen name="Blog" component={BlogScreen} />
		</BlogStack.Navigator>
	);
};

export default BlogStackNavigation;
