import React from "react";
import {
	Text,
	View,
	Image,
	StyleSheet,
	ImageStyle,
	ViewStyle,
	SafeAreaView,
	TextStyle,
	TouchableOpacity,
} from "react-native";

import Colors from "../../styles/Colors";

const WelcomeScreen: React.VFC = () => (
	<SafeAreaView style={styles.contentContainer}>
		<View style={styles.imageContainer}>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../../assets/images/logo.jpg")}
			/>
		</View>
		<View style={styles.languageContentContainer}>
			<View style={styles.languageRowContainer}>
				<TouchableOpacity style={styles.languageContainer}>
					<Text style={styles.text}>LV</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.languageContainer}>
					<Text style={styles.text}>RU</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.languageContainer}>
					<Text style={styles.text}>EN</Text>
				</TouchableOpacity>
			</View>
		</View>
	</SafeAreaView>
);

interface Style {
	contentContainer: ViewStyle;
	imageContainer: ViewStyle;
	image: ImageStyle;
	languageContentContainer: ViewStyle;
	languageRowContainer: ViewStyle;
	languageContainer: ViewStyle;
	text: TextStyle;
}

const stylesObj: Style = {
	contentContainer: {
		flex: 1,
		backgroundColor: Colors.PRIMARY,
	},
	imageContainer: {
		marginTop: 20,
	},
	image: {
		width: "100%",
		height: 106, //TODO: make proper scale
	},
	languageContentContainer: {
		flex: 1,
		justifyContent: "flex-end",
		bottom: 100,
	},
	languageRowContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	languageContainer: {
		width: 80,
		height: 80,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 2,
		borderBottomColor: Colors.SECONDARY,
	},
	text: {
		fontSize: 40,
		color: Colors.SECONDARY,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default WelcomeScreen;
