import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextStyle,
	ScrollView,
	ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AppScreen from "../../components/AppScreen";
import appStyles from "../../styles/Application";
import CategoriesListItem from "./CategoriesListItem";
import { MainStackParamList } from "../../navigation/AppNavigator/MainStackNavigation/index";

//TODO: create file with mock response and pass whole product item in navigation
const COFFEE_PRODUCTS = [
	{
		id: 1,
		imageSource: require("./../../assets/images/colombia.jpg"),
		title: "Colombia",
		description:
			"Sabalansēta, piesātināta garša. Spilgts, izteikts dzēriena aromāts, kurā izpaužas žāvētu augļu notis. Tīra, viegla, caurspīdīga pēcgarša ar patīkamu un izsmalcinātu augļu garšu.",
		price: "7,59",
		discount: "",
	},
	{
		id: 2,
		imageSource: require("./../../assets/images/guatemala.jpg"),
		title: "Guatemala",
		description:
			"Samtainā, dziļā, daudzpusīgā kafija savas nokrāsas neatklāj uzreiz, bet pakāpeniski. Šokolādes toņus nomaina viegls augļu skābums. Stiprs, stabils aromāts, tā galvenās notis — rūgtā šokolāde un zemesrieksti, ko nomaina vieglākas maizes garšas nianses.",
		price: "7,59",
		discount: "",
	},
	{
		id: 3,
		imageSource: require("./../../assets/images/decaf.jpg"),
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
		imageSource: require("./../../assets/images/strawberry-melna.jpg"),
		title: "Strawberry, melnā aromatizētā tēja",
		description:
			"Augļaina, krēmīga un viegla kā zemeņu krējuma īriss melnā tēja.",
		price: "5,49",
		discount: "4,12",
	},
	{
		id: 2,
		imageSource: require("./../../assets/images/sencha.jpg"),
		title: "Ķīnas Senča/China Sencha, zaļā tēja",
		description:
			"Ķīnas Senča tēja tiek audzēta Ķīnas tēju plantācijās. Ķīnas Senča tējai piemīt medus krāsas uzlējums un patīkama garšas buķete.",
		price: "5,49",
		discount: "4,12",
	},
	{
		id: 3,
		imageSource: require("./../../assets/images/relax-herbal.jpg"),
		title: "Relax Herbal Dream Organic, zāļu tēja",
		description:
			"Atlaidieties, aizveriet acis un sapņojiet, pateicoties šim citrusa un maigās kumelītes maisījumam.",
		price: "5,49",
		discount: "",
	},
];

const CATEGORIES = [
	{
		id: 1,
		categoryName: "Coffee",
		categoryIconName: "seed",
		products: COFFEE_PRODUCTS,
	},
	{
		id: 2,
		categoryName: "Tea",
		categoryIconName: "leaf",
		products: TEA_PRODUCTS,
	},
];

const CategoriesListScreen: React.VFC = () => {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<MainStackParamList, "CategoriesList">
		>();

	return (
		<AppScreen>
			<ScrollView style={appStyles.fullSize}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Select category to start order</Text>
				</View>
				{CATEGORIES.map((category) => (
					<CategoriesListItem
						key={category.id}
						onPress={() =>
							navigation.navigate("ProductsList", {
								categoryName: category.categoryName,
								products: category.products,
							})
						}
						iconName={category.categoryIconName}
						categoryName={category.categoryName}
					/>
				))}
			</ScrollView>
		</AppScreen>
	);
};

interface Style {
	titleContainer: ViewStyle;
	title: TextStyle;
}

const stylesObj: Style = {
	titleContainer: {
		marginVertical: 20,
		alignItems: "center",
	},
	title: {
		fontSize: 18,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default CategoriesListScreen;
