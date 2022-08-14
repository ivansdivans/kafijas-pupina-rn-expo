import React from "react";
import { View } from "react-native";
import Colors from "../styles/Colors";

interface Props {
	height?: number;
	lineColor?: string;
}

const SeparatorLine: React.VFC<Props> = ({
	height = 10,
	lineColor = Colors.Shadow,
}) => (
	<View
		style={{
			width: "100%",
			paddingVertical: height,
		}}
	>
		<View style={{ borderBottomWidth: 1, borderBottomColor: lineColor }} />
	</View>
);

export default SeparatorLine;
