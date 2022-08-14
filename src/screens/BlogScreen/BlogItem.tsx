import React from "react";
import {
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	ViewStyle,
	TextStyle,
	ImageStyle,
} from "react-native";

import H2 from "../../components/H2";
import P from "../../components/P";
import Separator from "../../components/Separator";
import appStyles from "../../styles/Application";
import Colors from "../../styles/Colors";

interface Props {
	id: number;
	title: string;
	imageSource: any; //TODO: typescript
	description: string;
	author: string;
	date: string;
	onPostPress: (post: any) => void; //TODO: typescript
}

const BlogItem: React.VFC<Props> = ({
	id,
	title,
	imageSource,
	description,
	author,
	date,
	onPostPress,
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPostPress(id)}>
			<View style={appStyles.inlineContainer}>
				<View style={{ width: 90 }} />
				<H2 style={styles.titleText} numberOfLines={1}>
					{title}
				</H2>
			</View>
			<Separator height={5} />
			<View style={styles.contentContainer}>
				<Image style={styles.image} source={imageSource} resizeMode="cover" />
				<View style={appStyles.fullSize}>
					<P style={styles.descriptionText} numberOfLines={4}>
						{description}
					</P>
					<Separator height={5} />
					<P style={styles.greyText}>{author}</P>
					<P style={styles.greyText}>{date}</P>
				</View>
			</View>
		</TouchableOpacity>
	);
};

interface Style {
	container: ViewStyle;
	contentContainer: ViewStyle;
	image: ImageStyle;
	titleText: TextStyle;
	descriptionText: TextStyle;
	greyText: TextStyle;
}

const stylesObj: Style = {
	container: {
		minHeight: 150,
		...appStyles.fullWidth,
		marginVertical: 10,
	},
	contentContainer: {
		...appStyles.inlineContainer,
		alignItems: "flex-start",
	},
	image: {
		width: 80,
		height: 80,
		marginRight: 10,
		marginTop: 5,
	},
	titleText: {
		color: Colors.Contrast,
	},
	descriptionText: {
		minHeight: 80,
		textAlign: "justify",
	},
	greyText: {
		color: Colors.LightGrey,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default BlogItem;
