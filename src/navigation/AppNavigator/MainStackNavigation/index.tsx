import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesListScreen from "../../../screens/CategoriesListScreen";
import ProductsListScreen from "../../../screens/ProductsListScreen";

import Colors from "../../../styles/Colors";

export type MainStackParamList = {
	CategoriesList: undefined;
	ProductsList: {
		categoryName: string;
		products: {
			id: number;
			imageSource: any; //TODO
			title: string;
			description: string;
			price: string;
			discount: string;
		}[];
	};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigation: React.VFC = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.Primary,
				},
				headerTintColor: Colors.Secondary,
			}}
		>
			<MainStack.Screen
				name="CategoriesList"
				component={CategoriesListScreen}
				options={{ title: "Categories" }}
			/>
			<MainStack.Screen
				name="ProductsList"
				component={ProductsListScreen}
				options={({ route }) => ({
					title: `${route.params.categoryName} products`,
				})}
			/>
		</MainStack.Navigator>
	);
};

export default MainStackNavigation;
