import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../styles/Colors";

interface Props {
	name: any; //TODO
	size: number;
	backgroundColor?: string;
	iconColor?: string;
}

const AppIcon: React.VFC<Props> = ({
	name,
	size = 40,
	backgroundColor = Colors.PRIMARY,
	iconColor = Colors.SECONDARY,
}) => (
	<View
		style={{
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor,
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		<MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
	</View>
);

export default AppIcon;
