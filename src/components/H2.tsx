import React from "react";
import { Text, TextStyle, StyleSheet, TextProps } from "react-native";

import Color from "../styles/Colors";

const H2: React.FC<TextProps> = (props) => (
	<Text {...props} style={[styles.text, props.style]}>
		{props.children}
	</Text>
);

interface Style {
	text: TextStyle;
}

const stylesObj: Style = {
	text: {
		fontSize: 28,
		color: Color.Text,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default H2;
