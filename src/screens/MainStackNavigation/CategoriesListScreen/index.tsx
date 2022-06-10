import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MainStackParamList } from "../index";
import AppScreen from "../../../components/AppScreen";
import AppIcon from "../../../components/AppIcon";

const CategoriesListScreen: React.VFC = () => {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<MainStackParamList, "CategoriesList">
		>();

	return (
		<AppScreen>
			<Text>CategoriesListScreen</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("ProductsList", {
							categoryName: "Coffee",
							productsListId: 1,
						})
					}
				>
					<Text>Coffee</Text>
					<AppIcon name="coffee" size={50} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("ProductsList", {
							categoryName: "Tea",
							productsListId: 2,
						})
					}
				>
					<Text>Tea</Text>
					<AppIcon name="tea" size={50} />
				</TouchableOpacity>
			</View>
		</AppScreen>
	);
};

export default CategoriesListScreen;
