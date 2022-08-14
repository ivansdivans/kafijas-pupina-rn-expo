import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BlogScreen from "../../../screens/BlogScreen";
import Colors from "../../../styles/Colors";
import PostScreen from "../../../screens/PostScreen";

export type BlogStackParamList = {
	Blog: undefined;
	PostScreen: {
		blogPost: {
			postId: number;
			postTitle: string;
			postImageSource: any; //TODO: typescript
			postDescription: string;
			postAuthor: string;
			postDate: string;
		};
	};
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
			<BlogStack.Screen
				name="PostScreen"
				component={PostScreen}
				options={({ route }) => ({
					title: route.params.blogPost.postTitle,
				})}
			/>
		</BlogStack.Navigator>
	);
};

export default BlogStackNavigation;
