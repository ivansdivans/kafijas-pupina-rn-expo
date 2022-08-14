import React from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AppIcon from "../../components/AppIcon";
import AppScreen from "../../components/AppScreen";
import appStyles from "../../styles/Application";
import { BlogStackParamList } from "../../navigation/AppNavigator/BlogStackNavigation";
import BlogHeader from "./BlogHeader";
import BlogItem from "./BlogItem";
import Separator from "../../components/Separator";
import SeparatorLine from "../../components/SeparatorLine";
import Colors from "../../styles/Colors";

const BLOG_CATEGORIES = [
	{
		categoryId: 1,
		categoryName: "Coffee",
	},
	{
		categoryId: 2,
		categoryName: "Tea",
	},
	{
		categoryId: 3,
		categoryName: "Other",
	},
];

const BLOG_POSTS = [
	{
		postId: 1,
		postCategory: "Coffee",
		postTitle: "How coffee is roasted",
		postImageSource: require("../../assets/images/blogpost-coffee-roasting.jpg"),
		postDescription:
			"Raw coffee beans are dropped into loaders and then into a rotating drum. The drum is pre-heated to a temperature of around 240 degrees. After 12-15 minutes depending on the type of roast, the roasted beans will exit the drum at around 195 degrees and are then taken out into a cooling tray at the front of the roaster. They are then passed through a machine that removes any stones or debris before being checked by hand for any defects, and once cooled completely, finally packaged for sale.",
		postAuthor: "Unknown Author",
		postDate: "12 Aug 2022",
	},
	{
		postId: 2,
		postCategory: "Tea",
		postTitle: "Calming Tea",
		postImageSource: require("../../assets/images/blogpost-calming-tea.jpg"),
		postDescription:
			"Tea can be a great way to introduce a little moment of zen into your daily routine. With everything from classic chamomile to meditative matcha, our teas are a perfect fit to soothe the nerves and promote relaxation and well-being. Teas for anxiety include mint teas, chamomile teas, lavender teas, rose teas, and matcha.",
		postAuthor: "Unknown Author",
		postDate: "13 Aug 2022",
	},
	{
		postId: 3,
		postCategory: "Other",
		postTitle: "Where to go in Riga",
		postImageSource: require("../../assets/images/blogpost-where-to-go.jpg"),
		postDescription:
			"Visiting Riga today, you can choose between a huge variety of coffee shops serving freshly roasted coffee. While this is not entirely Specialty grade it remains sort of an extraordinary offer within the borders of an evolving Speciality coffee scene. Since opening of the first Speciality coffee shop there are now about 20 shops. The following list covers those that serve both espresso-based and brewed coffee in Riga.",
		postAuthor: "Unknown Author",
		postDate: "14 Aug 2022",
	},
];

//TODO: add onBlockHeaderItemPress to filter blog posts
const BlogScreen: React.VFC = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<BlogStackParamList, "Blog">>();

	return (
		<>
			<BlogHeader categories={BLOG_CATEGORIES} />
			<AppScreen>
				<FlatList
					data={BLOG_POSTS}
					keyExtractor={(item) => item.postId.toString()}
					renderItem={({ item }) => (
						<BlogItem
							id={item.postId}
							title={item.postTitle}
							imageSource={item.postImageSource}
							description={item.postDescription}
							author={item.postAuthor}
							date={item.postDate}
							onPostPress={(pressedItemId) =>
								navigation.navigate("PostScreen", {
									blogPost:
										pressedItemId &&
										BLOG_POSTS.find(
											(object) => object.postId === pressedItemId
										),
								})
							}
						/>
					)}
					ItemSeparatorComponent={() => (
						<SeparatorLine height={10} lineColor={Colors.LightGrey} />
					)}
				/>
			</AppScreen>
		</>
	);
};

export default BlogScreen;
