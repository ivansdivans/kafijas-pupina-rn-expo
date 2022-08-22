import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	ViewStyle,
	StyleSheet,
	TextStyle,
} from "react-native";

import AppIcon from "../../components/AppIcon";
import appStyles from "../../styles/Application";

interface Props {
	onPress: () => void;
	iconName: string;
	categoryName: string;
}

const CategoriesListItem: React.VFC<Props> = ({
	onPress,
	iconName,
	categoryName,
}) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<View style={styles.iconBlock}>
			<AppIcon name={iconName} size={80} />
		</View>
		<View style={styles.textBlock}>
			<Text style={styles.title}>{categoryName}</Text>
		</View>
	</TouchableOpacity>
);

interface Style {
	container: ViewStyle;
	iconBlock: ViewStyle;
	textBlock: ViewStyle;
	title: TextStyle;
}

const stylesObj: Style = {
	container: {
		...appStyles.fullWidth,
		...appStyles.inlineContainer,
		minHeight: 50,
		marginVertical: 10,
		padding: 10,
	},
	iconBlock: {
		width: "30%",
	},
	textBlock: {
		width: "70%",
		justifyContent: "center",
		marginLeft: 20,
	},
	title: {
		fontSize: 48,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default CategoriesListItem;
