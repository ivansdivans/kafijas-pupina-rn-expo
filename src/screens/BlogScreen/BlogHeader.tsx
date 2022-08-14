import React from "react";
import {
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
	View,
	ViewStyle,
	StyleSheet,
	TextStyle,
} from "react-native";

import H3 from "../../components/H3";
import appStyles from "../../styles/Application";
import Colors from "../../styles/Colors";

interface Props {
	categories: {
		categoryId: number;
		categoryName: string;
	}[];
}

const BlogHeader: React.VFC<Props> = ({ categories }) => {
	const { width } = useWindowDimensions();

	//TODO: typescript
	const renderHeaderCategory = (category: any) => (
		<TouchableOpacity
			key={category.categoryId}
			style={[styles.headerItem, { width: (width - 20 - 10) / 4 }]}
		>
			<H3 style={styles.text}>{category.categoryName}</H3>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				contentContainerStyle={styles.scrollViewContentContainer}
			>
				{categories.map((item) => renderHeaderCategory(item))}
			</ScrollView>
		</View>
	);
};

interface Style {
	container: ViewStyle;
	scrollViewContentContainer: ViewStyle;
	headerItem: ViewStyle;
	text: TextStyle;
}

const stylesObj: Style = {
	container: {
		height: 80,
		width: "100%",
		backgroundColor: Colors.Secondary,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	scrollViewContentContainer: {
		alignItems: "center",
		paddingHorizontal: 20,
	},
	headerItem: {
		height: 40,
		marginRight: 20,
		...appStyles.center,
		borderWidth: 2,
		borderColor: Colors.Contrast,
		borderRadius: 10,
	},
	text: {
		color: Colors.Contrast,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default BlogHeader;
