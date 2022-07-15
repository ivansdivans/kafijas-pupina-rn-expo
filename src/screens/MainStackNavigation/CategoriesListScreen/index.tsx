import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MainStackParamList } from "../index";
import AppScreen from "../../../components/AppScreen";
import AppIcon from "../../../components/AppIcon";

//TODO: create file with mock response and pass whole product item in navigation
const COFFEE_PRODUCTS = [
	{
		imageSource: require("./../../../assets/images/colombia.jpg"),
		title: "Colombia",
		description:
			"Sabalansēta, piesātināta garša. Spilgts, izteikts dzēriena aromāts, kurā izpaužas žāvētu augļu notis. Tīra, viegla, caurspīdīga pēcgarša ar patīkamu un izsmalcinātu augļu garšu.",
		price: "7,59",
		discount: "",
	},
];

const TEA_PRODUCTS = [
	{
		imageSource: require("./../../../assets/images/strawberry-melna.jpg"),
		title: "Strawberry, melnā aromatizētā tēja",
		description:
			"Augļaina, krēmīga un viegla kā zemeņu krējuma īriss melnā tēja.",
		price: "5,49",
		discount: "4,12",
	},
];

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
							products: COFFEE_PRODUCTS,
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
							products: TEA_PRODUCTS,
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
