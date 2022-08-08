import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

import Colors from "../styles/Colors";

interface Props {
	text: string;
	onPress: () => void;
	style?: TextStyle;
}

const LinkText: React.VFC<Props> = ({ text, onPress, style = {} }) => (
	<Text onPress={onPress} style={[styles.linkText, style]}>
		{text}
	</Text>
);

interface Style {
	linkText: TextStyle;
}

const stylesObj: Style = {
	linkText: {
		fontSize: 17,
		color: Colors.Primary,
		textDecorationLine: "underline",
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default LinkText;
