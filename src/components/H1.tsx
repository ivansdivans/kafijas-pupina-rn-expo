import React from "react";
import { Text, TextStyle, StyleSheet, TextProps } from "react-native";

import Colors from "../styles/Colors";

const H1: React.FC<TextProps> = (props) => (
	<Text {...props} style={[styles.text, props.style]}>
		{props.children}
	</Text>
);

interface Style {
	text: TextStyle;
}

const stylesObj: Style = {
	text: {
		fontSize: 34,
		color: Colors.Text,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default H1;
