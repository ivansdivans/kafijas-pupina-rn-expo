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
		id: 1,
		imageSource: require("./../../../assets/images/colombia.jpg"),
		title: "Colombia",
		description:
			"Sabalansēta, piesātināta garša. Spilgts, izteikts dzēriena aromāts, kurā izpaužas žāvētu augļu notis. Tīra, viegla, caurspīdīga pēcgarša ar patīkamu un izsmalcinātu augļu garšu.",
		price: "7,59",
		discount: "",
	},
	{
		id: 2,
		imageSource: require("./../../../assets/images/guatemala.jpg"),
		title: "Guatemala",
		description:
			"Samtainā, dziļā, daudzpusīgā kafija savas nokrāsas neatklāj uzreiz, bet pakāpeniski. Šokolādes toņus nomaina viegls augļu skābums. Stiprs, stabils aromāts, tā galvenās notis — rūgtā šokolāde un zemesrieksti, ko nomaina vieglākas maizes garšas nianses.",
		price: "7,59",
		discount: "",
	},
	{
		id: 3,
		imageSource: require("./../../../assets/images/decaf.jpg"),
		title: "Decaf",
		description:
			"Kafija, kura izgājusi augstākās kvalitātes ūdens dekafeinizācijas procesu. Klasiskā kafijas garša, kuru var baudīt visas dienas garumā. Dzērienā atklājas sabalansētas tumšās šokolādes, karameles un tumšā iesala notis.",
		price: "7,59",
		discount: "5,59",
	},
];

const TEA_PRODUCTS = [
	{
		id: 1,
		imageSource: require("./../../../assets/images/strawberry-melna.jpg"),
		title: "Strawberry, melnā aromatizētā tēja",
		description:
			"Augļaina, krēmīga un viegla kā zemeņu krējuma īriss melnā tēja.",
		price: "5,49",
		discount: "4,12",
	},
	{
		id: 2,
		imageSource: require("./../../../assets/images/sencha.jpg"),
		title: "Ķīnas Senča/China Sencha, zaļā tēja",
		description:
			"Ķīnas Senča tēja tiek audzēta Ķīnas tēju plantācijās. Ķīnas Senča tējai piemīt medus krāsas uzlējums un patīkama garšas buķete.",
		price: "5,49",
		discount: "4,12",
	},
	{
		id: 3,
		imageSource: require("./../../../assets/images/relax-herbal.jpg"),
		title: "Relax Herbal Dream Organic, zāļu tēja",
		description:
			"Atlaidieties, aizveriet acis un sapņojiet, pateicoties šim citrusa un maigās kumelītes maisījumam.",
		price: "5,49",
		discount: "",
	},
];

const CategoriesListScreen: React.VFC = () => {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<MainStackParamList, "CategoriesList">
		>();

	return (
		<AppScreen>
			<Text>Select the product you would like to shop</Text>
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
