import React from "react";
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	ViewStyle,
	StyleSheet,
	TextStyle,
} from "react-native";

import Colors from "../styles/Colors";

interface Props {
	onPress: () => void;
	imageSource?: any; //TODO
	title?: string;
	description?: string;
	price?: string;
	discount?: string;
}

const ListItem: React.VFC<Props> = ({
	onPress,
	imageSource,
	title,
	description,
	price,
	discount,
}) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<View style={styles.pictureBlock}>
			<Image
				style={{ width: 80, height: 80 }}
				source={imageSource}
				resizeMode="contain"
			/>
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
	textBlock: ViewStyle;
	title: TextStyle;
	description: TextStyle;
	priceContainer: ViewStyle;
	priceText: TextStyle;
	discountPriceText: TextStyle;
}

const stylesObj: Style = {
	container: {
		width: "100%",
		minHeight: 50,
		marginVertical: 10,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.SECONDARY,
		flexDirection: "row",
		alignItems: "center",
		// Android
		shadowColor: Colors.SHADOW,
		// iOS
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	pictureBlock: {
		width: "30%",
		height: 100,
	},
	textBlock: {
		width: "70%",
		height: "100%",
	},
	title: {
		fontSize: 30,
	},
	description: {
		fontSize: 10,
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
	priceText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	discountPriceText: {
		fontSize: 20,
		fontWeight: "bold",
		fontStyle: "italic",
		marginLeft: 10,
		color: Colors.ACCENT,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default ListItem;
