import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesListScreen from "./CategoriesListScreen";
import ProductsListScreen from "./ProductsListScreen";
import Colors from "../../styles/Colors";

export type MainStackParamList = {
	CategoriesList: undefined;
	ProductsList: {
		categoryName: string;
		productsListId: number;
	};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigation: React.VFC = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.PRIMARY,
				},
				headerTintColor: Colors.SECONDARY,
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
