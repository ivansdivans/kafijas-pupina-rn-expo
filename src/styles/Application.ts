import { StyleSheet } from "react-native";

import Colors from "./Colors";

const appStyles = StyleSheet.create({
	fullSize: {
		flex: 1,
	},
	fullWidth: {
		width: "100%",
	},
	row: {
		flexDirection: "row",
	},
	inlineContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	shadow: {
		// iOS
		shadowColor: Colors.Shadow,
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 3,
		// Android
		elevation: 2,
	},
});

export default appStyles;
