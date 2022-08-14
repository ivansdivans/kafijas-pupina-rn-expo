import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ViewStyle,
	ImageStyle,
	TextStyle,
	ScrollView,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import AppScreen from "../../components/AppScreen";
import { BlogStackParamList } from "../../navigation/AppNavigator/BlogStackNavigation";
import H1 from "../../components/H1";
import Colors from "../../styles/Colors";
import Separator from "../../components/Separator";
import P from "../../components/P";
import appStyles from "../../styles/Application";

//TODO: change AppScreen to have ScrollView, because now scroll indicator is away from screen side
const PostScreen: React.VFC = () => {
	const route = useRoute<RouteProp<BlogStackParamList, "PostScreen">>();

	return (
		<>
			<Image
				style={styles.image}
				source={route.params.blogPost.postImageSource}
				resizeMode="cover"
			/>
			<AppScreen>
				<ScrollView
					style={appStyles.fullSize}
					contentContainerStyle={styles.contentContainer}
				>
					<H1 style={styles.titleText} numberOfLines={1}>
						{route.params.blogPost.postTitle}
					</H1>
					<P style={styles.descriptionText}>
						{route.params.blogPost.postDescription}
					</P>
					<Separator height={20} />
					<P style={styles.otherText}>{route.params.blogPost.postAuthor}</P>
					<P style={styles.otherText}>{route.params.blogPost.postDate}</P>
				</ScrollView>
			</AppScreen>
		</>
	);
};

interface Style {
	contentContainer: ViewStyle;
	image: ImageStyle;
	titleText: TextStyle;
	descriptionText: TextStyle;
	otherText: TextStyle;
}

const stylesObj: Style = {
	contentContainer: {
		paddingHorizontal: 10,
	},
	image: {
		width: "100%",
		height: 200,
	},
	titleText: {
		flexShrink: 1,
		textAlign: "center",
		marginVertical: 20,
		color: Colors.Contrast,
	},
	descriptionText: {
		textAlign: "justify",
		lineHeight: 30,
	},
	otherText: {
		color: Colors.LightGrey,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default PostScreen;
