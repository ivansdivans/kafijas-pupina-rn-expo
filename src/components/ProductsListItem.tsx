import React from "react";
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	ViewStyle,
	StyleSheet,
	TextStyle,
	ImageStyle,
} from "react-native";

import appStyles from "../styles/Application";
import Colors from "../styles/Colors";

interface Props {
	onPress: () => void;
	imageSource?: any; //TODO
	title?: string;
	description?: string;
	price?: string;
	discount?: string;
}

const ProductsListItem: React.VFC<Props> = ({
	onPress,
	imageSource,
	title,
	description,
	price,
	discount,
}) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<View style={styles.pictureBlock}>
			<Image style={styles.image} source={imageSource} resizeMode="contain" />
		</View>
		<View style={styles.textBlock}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
			{price && (
				<View style={styles.priceContainer}>
					<Text style={styles.priceText}>€{price}</Text>
					{discount ? (
						<Text style={styles.discountPriceText}>€{discount}</Text>
					) : null}
				</View>
			)}
		</View>
	</TouchableOpacity>
);

interface Style {
	container: ViewStyle;
	pictureBlock: ViewStyle;
	image: ImageStyle;
	textBlock: ViewStyle;
	title: TextStyle;
	description: TextStyle;
	priceContainer: ViewStyle;
	priceText: TextStyle;
	discountPriceText: TextStyle;
}

const stylesObj: Style = {
	container: {
		...appStyles.fullWidth,
		...appStyles.inlineContainer,
		minHeight: 50,
		marginVertical: 10,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.Package,
		...appStyles.shadow,
	},
	pictureBlock: {
		width: "30%",
		height: 100,
		alignSelf: "flex-start",
		marginTop: 5,
	},
	image: {
		width: 80,
		height: 80,
	},
	textBlock: {
		width: "70%",
		height: "100%",
	},
	title: {
		fontSize: 24,
	},
	description: {
		fontSize: 12,
	},
	priceContainer: {
		...appStyles.inlineContainer,
		marginTop: 10,
	},
	priceText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	discountPriceText: {
		fontSize: 18,
		fontWeight: "bold",
		fontStyle: "italic",
		marginLeft: 10,
		color: Colors.Accent,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default ProductsListItem;
